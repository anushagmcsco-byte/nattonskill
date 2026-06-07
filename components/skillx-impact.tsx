'use client';

import React from 'react';
import { Heart, Globe, ArrowUpRight, GraduationCap, Users, Shield, Award, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export const SkillXImpact: React.FC = () => {
  // Specified Rural and CSR Programs list
  const impactPrograms = [
    { title: 'Digital Literacy', desc: 'Providing computer fundamentals and internet safety bootcamps to rural state-govt high school children.', icon: Globe },
    { title: 'AI Awareness for Rural Students', desc: 'Deploying translation networks, prompt cues, and visual AI generators to teach rural kids tech capabilities.', icon: Sparkles },
    { title: 'Women Empowerment Workshops', desc: 'Equipping rural girl-scholars and young women with spreadsheet skills and gig-worker tools to foster independence.', icon: Users },
    { title: 'Teacher Development Hubs', desc: 'Upskilling village government instructors in simple lesson compilers and grading frameworks.', icon: GraduationCap },
    { title: 'Employability Skills Accelerators', desc: 'Mock resume structuring databases and coding handbook diagnostics for state college graduates.', icon: Award },
    { title: 'Community Innovation Labs', desc: 'Constructing physical labs in village hubs with hardware blocks, local databases, and broadband nodes.', icon: Building2 },
  ];

  // Specific CSR targets
  const csrTargetMetrics = [
    { target: '100+', lbl: 'Villages Covered by local hubs' },
    { target: '15,000+', lbl: 'Underprivileged Children trained' },
    { target: '60%+', lbl: 'Female Scholar representations' },
    { target: '290+', lbl: 'Govt School Syllabus upgraded CBSE-ready' },
  ];

  return (
    <div className="space-y-24 pb-16 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-emerald-950 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 p-8 text-emerald-400 bg-emerald-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-350 text-emerald-300">
            <Heart className="w-3.5 h-3.5 animate-pulse" /> SkillX Impact Foundation
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Technology, Education, and Opportunity for All
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Driving social impact through AI literacy, digital inclusion, and employability initiatives across rural frameworks.
          </p>
        </div>
      </section>

      {/* STRATEGIC COMMUNITY PARTNER (Raitamitra Social Trust) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-emerald-50/50 border border-emerald-100 p-8 rounded-3xl text-left space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-emerald-200/50 pb-4">
          <div>
            <span className="bg-emerald-600/10 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              Associated Strategic Partner
            </span>
            <h3 className="font-heading font-black text-emerald-950 text-xl sm:text-2xl mt-1.5">
              Raitamitra Social Trust (R)
            </h3>
          </div>
          <a
            href="https://raitamitrasocialtrust.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            Visit Trust Website <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed font-sans text-xs sm:text-sm text-slate-600">
          <div className="space-y-4">
            <p>
              Our impact goals are significantly accelerated through our partnership with{' '}
              <strong className="text-emerald-950">Raitamitra Social Trust (R)</strong>, acting as our primary Strategic Community Impact Partner. Based in Mandya, Karnataka, Raitamitra works at the absolute grassroots level to support farmers and rural households.
            </p>
            <p>
              By fusing technology with their community presence, we are establishing rural on-premise learning labs, facilitating farmer-benefit programs, and offering free coding handbook lessons directly.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-emerald-150/40 space-y-3 shadow-inner">
            <p className="font-bold text-emerald-950 text-xs">Joint Strategic Milestones:</p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Establishment of 2 Rural Computer & Coding centers inside Mandya district.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Over 1,200 smallholder farmer children trained on logical thinking and prompt systems.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Custom agricultural text/speech classifiers deployed to monitor crop indices.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CSR INFOGRAPHICS SECTION */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-center">
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-[#00D4FF] uppercase tracking-widest">CSR & NGO Partnerships</span>
            <h2 className="font-heading font-black text-3xl">Corporate Social Responsibility Metrics</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {csrTargetMetrics.map((met, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="font-mono text-3xl font-black text-emerald-400 mb-1">{met.target}</p>
                <p className="text-xs text-slate-350 text-slate-300 font-semibold">{met.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED IMPACT PROGRAMS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-[#0066FF] uppercase">Our Outreach Focus</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Driving Active Rural Inclusion</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Discover the six concrete programs we manage through partnered funds, NGOs, and volunteers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {impactPrograms.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 hover:border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left space-y-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-slate-800 text-sm sm:text-base">{prog.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{prog.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* IMPACT PHOTO GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans text-center">
        <div className="space-y-3">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Ground Chronicle</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Impact Gallery</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Actual snapshots of classrooms, student-mentors, and diagnostic libraries established in collaboration with our associated NGOs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto select-none">
          {[
            { tag: 'Village Lab Coding Session', url: 'https://picsum.photos/seed/ruralcs/500/350' },
            { tag: 'Rural Girls Tech Graduation', url: 'https://picsum.photos/seed/girls/500/350' },
            { tag: 'Teacher Enablement Seminar', url: 'https://picsum.photos/seed/teachers/500/350' },
          ].map((img, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md group hover:-translate-y-1 transition-transform relative">
              <img src={img.url} className="w-full h-48 object-cover" alt={img.tag} referrerPolicy="no-referrer" />
              <div className="p-3 bg-white text-left font-sans text-xs font-bold text-slate-800">
                👤 {img.tag}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillXImpact;
