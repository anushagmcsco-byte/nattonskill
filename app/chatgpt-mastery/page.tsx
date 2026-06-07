'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { Logo } from '../../components/logo';
import { CheckoutModal } from '../../components/checkout-modal';
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  Star,
  BrainCircuit,
  Lock,
  ThumbsUp,
  Briefcase
} from 'lucide-react';

export default function ChatgptMasteryPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: 'Software Developer',
    experience: '3-5 years',
  });

  const proCourses = [
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
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: `${formData.profession} (Exp: ${formData.experience})`,
          message: 'Contact from ChatGPT Mastery for Professionals landing page',
          interestType: 'pro',
        }),
      });
      setLeadSubmitted(true);
    } catch {
      setLeadSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#F8FAFC]">
      <AnnouncementBar />
      <StickyHeader currentTab="" setTab={(t) => window.location.href = `/?tab=${t}`} onBookConsultation={() => {}} />

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-20 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative bg-[#0d1f33] text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 p-32 bg-indigo-500/10 blur-3xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-400/10 text-cyan-300 uppercase tracking-widest font-mono">
                💼 Peak Corporate Productivity Suite
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Master ChatGPT & <span className="text-blue-400">AI Productivity Hacks</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                Upgrade your workflow speed up to 3.5x. Automate corporate Excel sheets, formulate SQL commands, transcribe meetings, and deploy custom GPT actions under a professional certified framework.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                {[
                  'Advanced System Prompt Engineering',
                  'Dozens of Actionable No-Code Blueprints',
                  'Excel, SQL, & Slide Automation Hacks',
                  'Curated by Accomplished IISc Researchers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-205 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick lead capture */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading font-black text-lg text-[#0A2540] text-left">
                  Request Program Syllabus
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Schedule your consultation or claim immediate early-bird slots. Enter your particulars:
                </p>

                {leadSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Professional Booking Synced!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-left">
                      Thank you! Access details, corporate case-study slides, and curriculum maps have been transferred onto your mail inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">Your Complete Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Amit Roy"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">WhatsApp Mobile</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Primary Mail ID</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="amit@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Your Profession</label>
                        <input
                          required
                          type="text"
                          name="profession"
                          placeholder="Marketing Lead"
                          value={formData.profession}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Experience</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="0-2 years">0 - 2 Years</option>
                          <option value="3-5 years">3 - 5 Years</option>
                          <option value="5-10 years">5 - 10 Years</option>
                          <option value="10+ years">10+ Years</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Grab Program Syllabus</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* COHORT CURRICULUMS */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase text-blue-600 font-mono tracking-wider">Expert Curriculum</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800 font-bold">Cohorts Framework Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {proCourses.map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-mono font-bold">
                    <span className="uppercase text-blue-600">Syllabus Outline</span>
                    <span>{c.duration}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base leading-tight">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{c.tagline}</p>

                  <ul className="text-[11px] text-slate-500 font-sans space-y-1 pt-2 border-t border-slate-100/60">
                    {c.outcomes.map((out, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100/60 pt-4 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-mono">Enrollment Fee</span>
                    <span className="font-mono font-extrabold text-[#0A2540] text-lg">₹{c.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      setCheckoutOpen(true);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg shadow-sm cursor-pointer transition-all"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SATISFACTION OUTCOMES */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 text-left max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <span className="text-xs font-mono font-bold bg-[#0A2540] text-[#00D4FF] px-2 py-0.5 rounded">Proven Success Metrics</span>
            <h3 className="font-heading font-black text-2xl text-[#0A2540]">30,000+ Workplace Hours Automated</h3>
            <p className="text-xs text-slate-500 leading-relaxed leading-snug font-sans">
              Professionals from premier startups, marketing agencies, and research divisions utilize our blueprints to speed up daily summaries, email draft routines, and reports by up to 350%.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { num: '3.5x', text: 'Speed Boost in Tasks' },
              { num: '87%', text: 'Report Career Leap' },
              { num: '55k+', text: 'Blueprints Logged' },
              { num: '4.9★', text: 'Instructor Reviews' },
            ].map((o, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-xs text-center space-y-1">
                <p className="font-mono text-2xl font-black text-blue-600">{o.num}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-sans">{o.text}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#0A2540] text-slate-300 py-12 px-4 border-t border-slate-850 text-left text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo showTagline={true} size={36} />
          <p className="text-[10px] text-slate-400 font-sans">
            © 2026 Natton SkillX Pvt Ltd. All rights reserved globally. MSME ID: UDYAM-KR-03-010482
          </p>
        </div>
      </footer>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        itemName="ChatGPT Mastery & AI Productivity Professional Suite"
        itemPrice={3499}
      />
      <FloatingWhatsAppButton />
    </div>
  );
}
