'use client';

import React from 'react';
import { Award, Compass, Eye, Heart, Target, TrendingUp, Users } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const methodSteps = [
    { num: '01', title: 'Curriculum Curation', desc: 'Syllabus modules are designed alongside IIT academics, aligning with NEP, ICSE, and CBSE standards.' },
    { num: '02', title: 'Conceptual Training', desc: 'Demystifying neural algorithms and core tech models using simple logical diagrams and cued handbooks.' },
    { num: '03', title: 'Tangible Prototyping', desc: 'Encouraging young scholars and professionals to launch actual websites, apps, and classifiers.' },
    { num: '04', title: 'Ecosystem Diagnostics', desc: 'Conducting comprehensive psychometric mapping and school lab modernization assessments.' },
  ];

  return (
    <div className="space-y-24 pb-16 font-sans text-left">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-indigo-950 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Compass className="w-3.5 h-3.5" /> Empowering through Technical Knowledge
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Our Vision & Mission
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Empowering Students, Professionals, Educators, and Communities to thrive in the age of Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* CORE VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed max-w-5xl">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#0A2540]">
            <Eye className="w-6 h-6 text-blue-600" />
            <h3 className="font-heading font-extrabold text-lg sm:text-xl">The Strategic Vision</h3>
          </div>
          <p>
            To act as India&apos;s premier future-skilling pipeline, dismantling technology disparities and shaping modern innovators. We envision a society where every student, teacher, school, and village possesses absolute fluency in Artificial Intelligence and digital creativity tools.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#0A2540]">
            <Target className="w-6 h-6 text-blue-600" />
            <h3 className="font-heading font-extrabold text-lg sm:text-xl">Our Direct Mission</h3>
          </div>
          <p>
            Establishing turnkey school syllabus models, organizing on-premise village learning hubs (in collaboration with partners like Raitamitra Social Trust), conducting diagnostic career aptitude analyses, and upskilling professionals through actionable, state-of-the-art cohort modules.
          </p>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-blue-600 uppercase">Interactive Formats</span>
            <h2 className="font-heading font-black text-3xl text-slate-800">The SkillX Learning Methodology</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Our 4-step framework guarantees that concepts transition seamlessly from class theories into actual, working digital projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-4">
            {methodSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative space-y-4">
                <span className="text-3xl font-mono font-black text-slate-200 select-none">{step.num}</span>
                <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base leading-tight">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
