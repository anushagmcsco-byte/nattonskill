import { GoogleGenAI, Type } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Google Gen AI client with appropriate user agent telemetry headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const { answers, name, currentRole } = await req.json();

    if (!answers || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: 'Invalid or missing quiz answers' },
        { status: 400 }
      );
    }

    // Construct a rich prompt for Gemini based on user inputs
    const prompt = `
      You are an expert Futurist, AI Career Strategist, and Career Guidance Coach at "Natton SkillX".
      Analyze the following career readiness quiz answers for a user named "${name || 'Learner'}" who is currently a "${currentRole || 'Student/Professional'}".
      
      User Answers:
      ${answers
        .map((ans: { question: string; answer: string }, idx) => `${idx + 1}. Q: "${ans.question}" -> A: "${ans.answer}"`)
        .join('\n')}
      
      Based on this profile:
      1. Provide a personalized fit assessment and career recommendations.
      2. Explain their Career Readiness Score and evaluate how prepared they are for the AI-driven economy.
      3. Create a step-by-step 3-month action plan (Skilling Roadmap).
      4. List hot high-impact future skills they should target immediately.
      5. List 3-4 future career roles suited for them.
      
      You must respond with valid JSON matching the specified schema.
    `;

    // Request-response schema for structured JSON output
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are a helpful, professional, and futuristic AI Career Advisor. Always return valid, well-structured, non-empty JSON that fits the requested schema exactly.`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          required: [
            'careerRecommendation',
            'readinessScoreExplanation',
            'skillingRoadmap',
            'hotSkillsToLearn',
            'careersToExplore',
          ],
          properties: {
            careerRecommendation: {
              type: Type.STRING,
              description: 'Primary future-proof career recommendation and vision.',
            },
            readinessScoreExplanation: {
              type: Type.STRING,
              description: 'Explanation of their readiness for the AI era based on their answers.',
            },
            skillingRoadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ['duration', 'milestone', 'actionItems'],
                properties: {
                  duration: { type: Type.STRING, description: 'e.g., Month 1, Month 2, etc.' },
                  milestone: { type: Type.STRING, description: 'The focus milestone for this period.' },
                  actionItems: { type: Type.ARRAY, items: { type: Type.STRING } },
                },
              },
              description: '3-month detailed skill development roadmap.',
            },
            hotSkillsToLearn: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'High-demand future skills to learn.',
            },
            careersToExplore: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ['title', 'whyShortlisted', 'averageSalaryDemand'],
                properties: {
                  title: { type: Type.STRING },
                  whyShortlisted: { type: Type.STRING },
                  averageSalaryDemand: { type: Type.STRING, description: 'Market growth and demand details.' },
                },
              },
              description: 'Specific future career pathways matching their profile.',
            },
          },
        },
      },
    });

    const jsonText = response.text?.trim() || '{}';
    const reportData = JSON.parse(jsonText);

    return NextResponse.json(reportData);
  } catch (error: any) {
    console.error('Error generating career assessment:', error);
    return NextResponse.json(
      { error: 'Failed to process career report: ' + (error?.message || 'Server Error') },
      { status: 500 }
    );
  }
}
