'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, GraduationCap, Users, Bookmark, Star, Calendar, ArrowUpRight, Award, HelpCircle } from 'lucide-react';

interface MentorNode {
  name: string;
  role: string;
  company: string;
  avatar: string;
  specialty: string;
}

interface CourseNode {
  title: string;
  tagline: string;
  duration: string;
  price: number;
  outcomes: string[];
}

interface SkillXProProps {
  onEnroll: (courseName: string, price: number) => void;
  onBookConsultation: () => void;
}

export const SkillXPro: React.FC<SkillXProProps> = ({ onEnroll, onBookConsultation }) => {
  const [selectedCourseIdx, setSelectedCourseIdx] = useState<number>(0);

  // Specified courses list
  const proCourses: CourseNode[] = [
    {
      title: 'ChatGPT Mastery & Generative Models',
      tagline: 'Leverage LLM reasoning paths. Write advanced parameters, prompt systems, and automate standard text tasks.',
      duration: '4 Weeks',
      price: 3499,
      outcomes: ['Zero-shot & Few-Shot prompting methodologies', 'Custom GPT creation & API integrations', 'Data protection & enterprise guardrails', 'Model fine-tuning strategies'],
    },
    {
      title: 'AI Productivity Suite',
      tagline: 'Optimize day-to-day office output. Integrate Microsoft Copilot, Gemini Workspace extensions, and automated note-taking tools.',
      duration: '4 Weeks',
      price: 2999,
      outcomes: ['Automating Excel formulas & reports with AI', 'Drafting slides, briefs, and pitches in seconds', 'Managing calendars & meeting transcripts', 'Dynamic PDF text summary pipelines'],
    },
    {
      title: 'AI Marketing & Branding',
      tagline: 'Create hyper-targeted copy. Orchestrate commercial image models, social automation triggers, and behavioral SEO analytics.',
      duration: '6 Weeks',
      price: 3999,
      outcomes: ['Generative visual designs for ads', 'Mass programmatic social posting engines', 'Structuring brand personas & newsletters', 'AI-assisted SEO search rankings'],
    },
    {
      title: 'AI for Educators & Teachers',
      tagline: 'Transform teaching. Learn how to draft instant, differentiated lesson plans, construct rubrics, and evaluate grading grids.',
      duration: '4 Weeks',
      price: 1999,
      outcomes: ['CBSE/NEP lesson outline generation', 'Automated worksheet and quiz curators', 'Teaching logical coding models with AI', 'Identifying plagiarism & ethical AI guidelines'],
    },
    {
      title: 'Data Analytics & Modeling',
      tagline: 'Mine deep business insights. Clean unstructured tables, generate database SQL lines, and construct fully interactive dashboard grids.',
      duration: '8 Weeks',
      price: 5999,
      outcomes: ['Cleaning tables and logs with Python AI', 'Framer / D3 interactive visualizations', 'Formulating financial forecasting curves', 'Extracting patterns from client messages'],
    },
    {
      title: 'Content Automation Engines',
      tagline: 'Create structured content pipelines. Program visual generators, transcription filters, and scriptwriters.',
      duration: '6 Weeks',
      price: 4499,
      outcomes: ['Speech-to-text transcript curators', 'AI scriptwriting & staging logic', 'Automated audio balancing & rendering', 'Short reels & documentation reels publishing'],
    },
    {
      title: 'Business AI Transformation',
      tagline: 'Rebuild corporate architecture. Implement organizational fine-tuning frameworks, CRM automation sync, and secure local databases.',
      duration: '8 Weeks',
      price: 7999,
      outcomes: ['Evaluating organizational AI readiness', 'Automating email support ticketers', 'Deploying containerized local models', 'Calculating cost ROI from transition pathways'],
    },
  ];

  // Industry Mentors
  const mentors: MentorNode[] = [
    {
      name: 'Dr. Anand Raman',
      role: 'Principal Researcher, Generative Lab',
      company: 'IISc / IIT Alumnus',
      avatar: 'https://picsum.photos/seed/anand/150/150',
      specialty: 'NLP & Deep Model Architectures',
    },
    {
      name: 'Neha Sen',
      role: 'Head of Brand Growth',
      company: 'Tech unicorn agency',
      avatar: 'https://picsum.photos/seed/nehasen/150/150',
      specialty: 'Generative Marketing Pipelines',
    },
    {
      name: 'Rohan Deshmukh',
      role: 'AI Curriculum Specialist',
      company: 'Ex-EdTech Leader',
      avatar: 'https://picsum.photos/seed/rohande/150/150',
      specialty: 'Classroom AI Integration',
    },
  ];

  const outcomesAndMetrics = [
    { stat: '87%', lbl: 'Achieved Significant Promotion or Job Shift' },
    { stat: '3.5x', lbl: 'Average Increase in Daily Task Speed' },
    { stat: '₹14 LPA', lbl: 'Average Grad Placement Salary Offer' },
    { stat: '30,000+', lbl: 'Workplace Hours Automations Logged' },
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0A2540] to-[#005AEE] text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Sparkles className="w-3.5 h-3.5 animate-bounce" /> SkillX Pro Career Transformation Hub
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            AI & Career Advancement Programs
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
            Secure your future in the intelligence era. Build actual developer outputs, master professional automation hacks, and acquire verifiable credentials.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 bg-[#00D4FF] hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Request Syllabus Call
            </button>
            <a href="#pro-course-modules" className="px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-xl font-bold text-xs transition-all flex items-center justify-center">
              Curriculum Overview
            </a>
          </div>
        </div>
      </section>

      {/* CURRICULUM OVERVIEW & ACCORDION */}
      <section id="pro-course-modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase font-sans">Professional Pathways</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Advanced AI Program Modules</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Select a pathway to inspect the specialized competencies, projects, and final enrollment fee terms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Menu Selection (Left) */}
          <div className="lg:col-span-4 space-y-2">
            {proCourses.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCourseIdx(idx)}
                className={`w-full text-left p-4 rounded-xl border flex justify-between items-center transition-all cursor-pointer ${
                  selectedCourseIdx === idx
                    ? 'border-blue-600 bg-blue-50/50 font-extrabold text-[#0066FF] shadow-sm'
                    : 'border-slate-100 bg-white hover:bg-slate-50 text-slate-600'
                }`}
              >
                <span className="text-xs sm:text-[13px] font-heading font-extrabold max-w-[85%] leading-tight">
                  {c.title}
                </span>
                <span className="text-[10px] font-bold font-mono text-slate-400">{c.duration}</span>
              </button>
            ))}
          </div>

          {/* Details Pane (Right) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-md space-y-6 text-left">
            <span className="bg-blue-100 text-[#0066FF] text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              Course Details
            </span>

            <div className="space-y-2">
              <h3 className="font-heading font-black text-[#0A2540] text-xl sm:text-2xl">
                {proCourses[selectedCourseIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                {proCourses[selectedCourseIdx].tagline}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Core Competencies Acquired:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {proCourses[selectedCourseIdx].outcomes.map((out, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 leading-normal font-sans font-medium">{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[9px] text-slate-400 block font-mono uppercase font-bold">Tuition Investment</span>
                <span className="font-mono font-extrabold text-[#0D2540] text-2xl">
                  ₹{proCourses[selectedCourseIdx].price.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 ml-1 font-sans">Inclusive of CGST/SGST</span>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onEnroll(proCourses[selectedCourseIdx].title, proCourses[selectedCourseIdx].price)}
                  className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer text-center"
                >
                  Enroll Now & Secure Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OUTCOMES AND PLACEMENTS INFOGRAPHIC */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-center">
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-[#00D4FF] uppercase tracking-widest">Transforming Standards</span>
            <h2 className="font-heading font-black text-3xl">Professional Career Outcomes</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomesAndMetrics.map((o, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <p className="font-mono text-3xl font-black text-[#00D4FF] mb-2">{o.stat}</p>
                <p className="text-xs text-slate-300 leading-snug font-semibold">{o.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY MENTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest font-sans">Academic Advisory</span>
          <h2 className="font-heading font-black text-3xl text-slate-800 font-bold">IIT & Top-Tier Industry Mentors</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Gain guidance from accomplished researchers, model developers, and digital architects matching commercial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {mentors.map((men, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative text-center flex flex-col items-center space-y-4">
              <img
                src={men.avatar}
                alt={men.name}
                className="w-20 h-20 rounded-full border border-slate-200 object-cover shadow-inner"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base leading-none">{men.name}</h4>
                <p className="text-[10px] text-slate-400 font-semibold font-mono uppercase">{men.role}</p>
                <p className="text-xs text-blue-600 font-bold font-sans">{men.company}</p>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg w-full text-[10px] text-slate-500">
                <p className="font-bold text-slate-400 uppercase tracking-wide">Expertise</p>
                <p className="mt-0.5">{men.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center font-sans">
        <h3 className="font-heading font-black text-2xl text-[#0A2540]">Course Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              author: 'Vikas Krishnan',
              title: 'Marketing Specialist, Web Hub',
              comment: 'The AI Marketing and Branding course was extremely actionable. We automated our monthly newsletter layouts and calculated copy fits in visual tools with absolute speed.',
              stars: 5,
            },
            {
              author: 'Dr. Shruti Patil',
              title: 'Assistant Professor, Commerce',
              comment: 'The Educators course is spectacular. I learned how to draft differentiated worksheets, rubric templates, and slide outline blocks in seconds. Saved me 10 hours a week!',
              stars: 5,
            },
          ].map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-5 rounded-xl block text-left space-y-3">
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">&quot;{rev.comment}&quot;</p>
              <div>
                <h5 className="font-heading font-extrabold text-xs text-[#0A2540]">{rev.author}</h5>
                <span className="text-[10px] text-slate-400">{rev.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENROLLMENT CTA */}
      <section className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <div className="space-y-4">
          <GraduationCap className="w-12 h-12 text-blue-600 mx-auto" />
          <h3 className="font-heading font-black text-xl text-[#0A2540]">Is Your Team Ready for AI Transformation?</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We deliver on-premise customized workshops, cohort training sessions, and system automations suited for corporate requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookConsultation}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Get Corporate Pricing Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillXPro;
