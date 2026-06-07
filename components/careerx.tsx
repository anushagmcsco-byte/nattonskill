'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, ChevronRight, Play, Award, BrainCircuit, Star, BarChart3, ArrowDownRight, Compass, HelpCircle, GraduationCap } from 'lucide-react';

interface CareerXProps {
  onBookConsultation: () => void;
}

export const CareerX: React.FC<CareerXProps> = ({ onBookConsultation }) => {
  // Assessment Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);

  // User particulars
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('Student'); // Student, Teacher, Professional, etc.

  // API Call state
  const [isCounsellingLoading, setIsCounsellingLoading] = useState(false);
  const [assessmentReport, setAssessmentReport] = useState<any | null>(null);
  const [apiError, setApiError] = useState('');

  // Readiness calculation scorecard
  const [scoreVal, setScoreVal] = useState(0);

  const quizQuestions = [
    {
      q: 'What types of tasks excite you the most in your workspace or class?',
      options: [
        { label: 'Designing visual layouts, styling, or creating vector story sketches.', dev: 'Creative/Design' },
        { label: 'Writing coding rules, variables, or checking math logic puzzles.', dev: 'Core Tech/Engineering' },
        { label: 'Organizing structural timelines, teaching teams, and planning steps.', dev: 'Management/Education' },
        { label: 'Developing rural resources, social trust, and green tech grids.', dev: 'Social Impact/Ecology' },
      ],
    },
    {
      q: 'Which future technology sounds most fascinating to explore research on?',
      options: [
        { label: 'Generative AI, Large Language Models, and deep neural nets.', dev: 'AI/Deep Learning' },
        { label: 'Scalable cloud databases, distributed ledger databases, or server routes.', dev: 'Full Stack Infra' },
        { label: 'Holographic interactive screens, AR/VR hubs alongside hardware.', dev: 'Interactive Hardware' },
        { label: 'Intelligent solar automation panels or agricultural crop analyzers.', dev: 'Sustainable Eng' },
      ],
    },
    {
      q: 'How do you prefer to solve difficult, unstructured problem statements?',
      options: [
        { label: 'Conducting sentiment interviews and mapping human emotional habits.', dev: 'Qualitative Folk' },
        { label: 'Formulating code test models and reading precision logs.', dev: 'Quantitative Logic' },
        { label: 'Sketchnoting layouts and diagrams to isolate milestones.', dev: 'Visual Framework' },
        { label: 'Creating rapid corporate business lean-canvas models.', dev: 'Business Venture' },
      ],
    },
    {
      q: 'What is your primary, absolute personal transformation target?',
      options: [
        { label: 'Securing an immediate promotion or maximizing salary curves.', dev: 'Finance Acceleration' },
        { label: 'Upgrading a school/college class curriculum to support CBSE/NEP.', dev: 'Syllabus Redesign' },
        { label: 'Scaling rural training hubs and teaching rural school beneficiaries.', dev: 'Inclusion Dev' },
        { label: 'Orchestrating modular products as an independent startup founder.', dev: 'Independent Creator' },
      ],
    },
    {
      q: 'How would you rate your current comfort with Artificial Intelligence (AI) tools?',
      options: [
        { label: 'Beginner: Mainly know default search, social feeds, and typing tests.', dev: 'Beginner' },
        { label: 'Intermediate: Comfortably writing structured ChatGPT cues for studies/tasks.', dev: 'Intermediate' },
        { label: 'Experienced: Write custom API endpoints, call JSON models, or code variables.', dev: 'Experienced' },
      ],
    },
  ];

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert('Please fill out your name.');
      return;
    }
    setQuizStarted(true);
    setCurrentQuestionIdx(0);
    setUserAnswers([]);
    setAssessmentReport(null);
    setApiError('');
  };

  const handleSelectOption = (option: any) => {
    const updatedAnswers = [
      ...userAnswers,
      {
        question: quizQuestions[currentQuestionIdx].q,
        answer: option.label,
        category: option.dev,
      },
    ];

    setUserAnswers(updatedAnswers);

    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // Calculate dynamic score based on categories selected
      // Experience and Technical answers weight scores higher, but anything shows a custom score
      let score = 55; // Base score
      updatedAnswers.forEach((ans) => {
        if (ans.category === 'Core Tech/Engineering' || ans.category === 'AI/Deep Learning' || ans.category === 'Experienced') {
          score += 9;
        } else if (ans.category === 'Intermediate' || ans.category === 'Full Stack Infra' || ans.category === 'Quantitative Logic') {
          score += 6;
        } else {
          score += 4;
        }
      });
      score = Math.min(score, 98); // cap at 98
      setScoreVal(score);

      // Trigger server-side AI evaluation matching prompt
      triggerAiEvaluation(updatedAnswers, score);
    }
  };

  const triggerAiEvaluation = async (answers: any[], calculatedScore: number) => {
    setIsCounsellingLoading(true);
    setApiError('');

    try {
      const response = await fetch('/api/career-assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          name: userName,
          currentRole: userRole,
        }),
      });

      const data = await response.json();

      if (response.ok && data) {
        setAssessmentReport(data);
      } else {
        setApiError(data.error || 'Failed to process AI career feedback.');
        // Fallback mockup model outcome if API returns empty
        setAssessmentReport({
          careerRecommendation: `Future AI Product Architect & Integration Lead for ${userRole}s`,
          readinessScoreExplanation: `Your calculated Future-Ready Score of ${calculatedScore}% signifies strong foundational logical reasoning paired with active curiosity. You are well-positioned to learn visual AI coding.`,
          skillingRoadmap: [
            { duration: 'Month 1', milestone: 'Master Prompt systems & NoCode tool suites', actionItems: ['Complete introductory prompt parameters courses', 'Deconstitute ChatGPT advanced contexts'] },
            { duration: 'Month 2', milestone: 'Develop Python-logical variables & layouts', actionItems: ['Acquire Python arrays, loops, and CSV query commands', 'Deploy standard local databases'] },
            { duration: 'Month 3', milestone: 'Construct real-time API routes & launch', actionItems: ['Connect Gemini API keys into full stack frameworks', 'Verify and deploy credentials'] },
          ],
          hotSkillsToLearn: ['Generative LLM prompt variables', 'No-code API orchestration', 'Python logical databases'],
          careersToExplore: [
            { title: 'AI Workspace Architect', whyShortlisted: 'Matches your focus on management & AI models.', averageSalaryDemand: 'High Growth, avg. Entry ₹12 LPA' },
            { title: 'Durable Database Curator', whyShortlisted: 'Leverages your curiosity about structured cloud queries.', averageSalaryDemand: 'CAGR 24% annually' },
          ],
        });
      }
    } catch (e: any) {
      console.error(e);
      setApiError('Network connection issue. Providing local career analysis.');
      // Local recovery
      setAssessmentReport({
        careerRecommendation: 'Future-Proof Digital Integrator & Technology Consultant',
        readinessScoreExplanation: `Your calculated Future-Ready Score of ${calculatedScore}% illustrates high qualitative competence and active interest in modern digital transformations.`,
        skillingRoadmap: [
          { duration: 'Month 1', milestone: 'AI Foundations & LLM parameter cues', actionItems: ['Understand Prompt structures & System Instructions', 'Deploy custom GPT models for workflows'] },
          { duration: 'Month 2', milestone: 'Framer & Interactive layout platforms', actionItems: ['Configure clean CSS designs and static responsive routes', 'Study local storage variables'] },
          { duration: 'Month 3', milestone: 'Commercial API deployments & Sync', actionItems: ['Master Gemini server-side environment variables', 'Draft customized portfolio projects'] },
        ],
        hotSkillsToLearn: ['Structured prompt Engineering', 'Interactive layout designs', 'API system connectivity'],
        careersToExplore: [
          { title: 'Futuristic Tech Advisor', whyShortlisted: 'Suits your aspiration to modernize educational pathways.', averageSalaryDemand: 'Rising, ₹10LPA average base' },
        ],
      });
    } finally {
      setIsCounsellingLoading(false);
    }
  };

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-indigo-950 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Compass className="w-3.5 h-3.5" /> Navigate the AI Disruption Confidently
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Discover Your Right Future Career Path
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Take our diagnostic quiz below. Analyze your skill baseline, obtain an index Score, and generate a customized AI action roadmap.
          </p>
        </div>
      </section>

      {/* CORE DIAGNOSTIC SERVICES LIST (Services requested by user: Psychometric Assessment, Aptitude Analysis, etc.) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase font-sans">Our Counseling Services</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Scientific Career Mapping</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Providing full-circle diagnostics, aptitude matrices, and custom college direction counseling for families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Psychometric Assessment',
              desc: 'Scientific profiling identifying underlying neurological traits, interests, and natural career inclinations.',
              badge: 'Trait Mapping',
            },
            {
              title: 'Aptitude Analysis',
              desc: 'Rigorous measurement of logical reasoning, numerical patterns, spatial orientations, and structural physics logic.',
              badge: 'Aptitude Fit',
            },
            {
              title: 'Career Mapping',
              desc: 'Custom detailed pathways detailing the average market CAGR, skills requirements, and college entries.',
              badge: '10-Year Path',
            },
            {
              title: 'Parent Counselling',
              desc: 'Synchronized meetings to bridge K-12 ambitions, financial budgets, and parent-child target benchmarks.',
              badge: 'Family Sync',
            },
            {
              title: 'College Guidance',
              desc: 'Detailed application, essay, entry examinations, and timeline assistance for premier Indian and global universities.',
              badge: 'Admissions',
            },
            {
              title: 'Stream Selection',
              desc: 'Scientific matching (Class 10-11) evaluating the optimal combination of subjects (Science, Arts, Commerce).',
              badge: 'NEP Aligned',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-3">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
              <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#0A2540]">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE QUIZ WORKFLOW (Career Quiz, Interest Assessment, Career Readiness Score) */}
      <section className="bg-slate-50 border-t border-b border-slate-100 py-16 scroll-mt-20" id="quiz-anchor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 text-left">
            {!quizStarted && !assessmentReport && (
              /* Greeting & Onboarding info */
              <div className="space-y-6 max-w-lg mx-auto text-center">
                <BrainCircuit className="w-14 h-14 text-blue-600 mx-auto animate-pulse" />
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl text-[#0A2540]">
                    Launch Free AI Career Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                    Evaluate your aptitude index and receive instant strategy summaries designed by Gemini AI model capabilities. Taking only 2 mins.
                  </p>
                </div>

                <form onSubmit={handleStartQuiz} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Enter Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Anusha Gowda"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Your Core Demographic</label>
                    <select
                      className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                    >
                      <option value="Student (Class 6-9)">Student (Class 6-9)</option>
                      <option value="Student (Class 10-12)">Student (Class 10-12)</option>
                      <option value="College Undergraduate">College Undergraduate</option>
                      <option value="Educator / Teacher">Educator / School Teacher</option>
                      <option value="Marketing / Tech Professional">Working Professional</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex justify-center items-center gap-1.5"
                  >
                    Start Diagnostic Assessment <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {quizStarted && !isCounsellingLoading && (
              /* Interactive Questionnaire block */
              <div className="space-y-6">
                {/* Header indicators */}
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-100 pb-3">
                  <span>Candidate: {userName}</span>
                  <span>Question {currentQuestionIdx + 1} of {quizQuestions.length}</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-1 bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-5">
                  <h4 className="font-heading font-black text-lg text-[#0A2540] tracking-tight">
                    {quizQuestions[currentQuestionIdx].q}
                  </h4>

                  <div className="flex flex-col gap-2.5">
                    {quizQuestions[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option)}
                        className="w-full text-left p-3.5 border border-slate-150 hover:border-blue-500 hover:bg-blue-50/20 rounded-xl text-xs sm:text-sm text-slate-700 font-sans cursor-pointer transition-all active:scale-[0.99]"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {isCounsellingLoading && (
              /* Custom dynamic countdown or computing loader matching prompt guidelines */
              <div className="p-8 text-center space-y-6 flex flex-col justify-center items-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 animate-pulse block">Gemini-3.5-flash processing</span>
                  <h4 className="font-heading font-black text-lg text-slate-800">
                    Running Aptitude Matching Models...
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed font-sans">
                    Evaluating logical vectors, career stream weights, and formulating your 3-Month skilling action milestones.
                  </p>
                </div>
              </div>
            )}

            {assessmentReport && !isCounsellingLoading && (
              /* Structured AI Strategy Report Outcome */
              <div className="space-y-8 animate-fade-in">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-100 pb-5">
                  <div className="text-left">
                    <span className="bg-emerald-150 bg-emerald-50 text-emerald-700 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wide">
                      Diagnostic Ready
                    </span>
                    <h3 className="font-heading font-black text-[#0A2540] text-xl sm:text-2xl mt-1.5 capitalize">
                      {userName}&apos;s Future-Skilling Report
                    </h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">Diagnosed on June 2026 • AI Grounded Model</p>
                  </div>

                  {/* Readiness Score circular graphic representation */}
                  <div className="mx-auto sm:mx-0 flex items-center gap-3 bg-blue-50/70 border border-blue-100 rounded-2xl p-4">
                    <span className="text-3xl font-mono font-black text-blue-600">{scoreVal}%</span>
                    <div className="text-left leading-none font-sans">
                      <p className="font-extrabold text-slate-800 text-xs">Readiness Score</p>
                      <p className="text-[9px] text-slate-450 text-slate-500 mt-1 uppercase font-semibold">Future-Fit Scale</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left">
                  {/* Left Report pane */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base uppercase tracking-wider text-slate-400">
                        Primary Recommendation
                      </h4>
                      <p className="text-base font-extrabold text-blue-600 leading-tight">
                        {assessmentReport.careerRecommendation}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider text-slate-400">
                        Readiness Explanation
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {assessmentReport.readinessScoreExplanation}
                      </p>
                    </div>

                    {/* Highly structured 3-month action roadmap */}
                    <div className="space-y-3 pt-2">
                      <h4 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider text-slate-400">
                        3-Month Skilling Roadmap
                      </h4>
                      <div className="relative border-l border-zinc-200 pl-4 ml-2 space-y-5">
                        {assessmentReport.skillingRoadmap?.map((road: any, idx: number) => (
                          <div key={idx} className="relative space-y-1">
                            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 bg-blue-600 rounded-full" />
                            <h5 className="font-heading font-bold text-xs sm:text-sm text-slate-800">
                              {road.duration} — <span className="text-blue-600">{road.milestone}</span>
                            </h5>
                            <ul className="list-disc list-inside text-[11px] text-slate-500 pl-2 space-y-0.5 font-sans">
                              {road.actionItems?.map((act: string, i: number) => (
                                <li key={i}>{act}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Hot skills and careers shortlist pane */}
                  <div className="md:col-span-4 space-y-6 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="space-y-3">
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-400">
                        Hot Future Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {assessmentReport.hotSkillsToLearn?.map((skill: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-white text-blue-600 font-semibold border border-slate-200 rounded text-[10px] font-sans">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-3">
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-400">
                        Shortlisted Career Paths
                      </h4>
                      <div className="space-y-2.5">
                        {assessmentReport.careersToExplore?.map((car: any, i: number) => (
                          <div key={i} className="text-xs space-y-1 border-b border-slate-200/50 pb-2.5 last:border-0 last:pb-0 font-sans">
                            <p className="font-bold text-slate-800">{car.title}</p>
                            <p className="text-[10px] text-slate-500 leading-normal leading-snug">{car.whyShortlisted}</p>
                            <p className="text-[10px] font-bold text-blue-600 mt-1 font-mono">{car.averageSalaryDemand}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 text-center flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      setQuizStarted(false);
                      setAssessmentReport(null);
                    }}
                    className="px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Retake Aptitude Quiz
                  </button>
                  <button
                    onClick={onBookConsultation}
                    className="px-6 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-700 shadow-md transition-colors cursor-pointer"
                  >
                    Discuss Report with Counselor
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerX;
