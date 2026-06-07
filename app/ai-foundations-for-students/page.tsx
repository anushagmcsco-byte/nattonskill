'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { Logo } from '../../components/logo';
import { CheckoutModal } from '../../components/checkout-modal';
import {
  Rocket,
  CheckCircle,
  Award,
  BookOpenCheck,
  Code,
  GraduationCap,
  Play,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AiFoundationsForStudents() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState({ name: '', price: 0 });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const [leadField, setLeadField] = useState({
    name: '',
    email: '',
    school: '',
    phone: '',
    grade: '8',
  });

  const juniorCourses = [
    {
      title: 'AI Foundations',
      description: 'An interactive handbook introducing the building blocks of Artificial Intelligence, neural nets, and AI ethics.',
      duration: '4 Weeks',
      price: 2499,
      grade: 'Class 6-9',
      curriculum: ['What is AI & Machine Learning?', 'Neural Networks Demystified', 'Generative AI vs Discriminative AI', 'Responsible AI & Ethics'],
    },
    {
      title: 'Prompt Engineering for Students',
      description: 'Unlocking model-interaction tools. Learn how to write structured cues to draft homework answers, study structures, and summarize articles.',
      duration: '4 Weeks',
      price: 1999,
      grade: 'Class 6-12',
      curriculum: ['Prompting Essentials (Cues & Roleplay)', 'Context Windows & System Instructions', 'AI as an Interactive Personal Tutor', 'Creative Storyboarding with ChatGPT'],
    },
    {
      title: 'Digital Creativity',
      description: 'Transforming texts into masterpieces. Command high-resolution generative image tools responsibly to model graphic assets.',
      duration: '6 Weeks',
      price: 3499,
      grade: 'Class 7-12',
      curriculum: ['AI Image Crafting (Midjourney/DallE theory)', 'Text-to-Art prompt logic', 'AI Speech & Video synth techniques', 'Designing digital presentations with AI'],
    },
    {
      title: 'Coding Fundamentals',
      description: 'The roots of computer architecture. Construct interactive coding tasks using block-based visuals and primitive Python rules.',
      duration: '8 Weeks',
      price: 4999,
      grade: 'Class 6-10',
      curriculum: ['Logical reasoning & sequence loops', 'Scratch/Block coding models', 'Python variables, arrays, and tuples', 'Build your first Text Adventure Game'],
    },
    {
      title: 'Public Speaking',
      description: 'Harness presentation leadership, voice control, and posture diagnostics to deliver magnificent, persuasive school pitches.',
      duration: '06 Weeks',
      price: 2999,
      grade: 'Class 8-12',
      curriculum: ['Debating structure and pitch rules', 'Overcoming stage-fright strategies', 'Syllabus presentation layouts', 'TEDx-style storytelling techniques'],
    },
    {
      title: 'Entrepreneurship',
      description: 'Bring designs to reality. Synthesize customer archetypes, draft dynamic budget charts, and present business templates to school mentors.',
      duration: '8 Weeks',
      price: 3999,
      grade: 'Class 9-12',
      curriculum: ['Design Thinking & Problem Ideation', 'Building a Lean Canvas proposal', 'Mock funding pitch & unit economics', 'Launching local student startups'],
    },
  ];

  const handleEnrollClick = (name: string, price: number) => {
    setCheckoutItem({ name, price });
    setCheckoutOpen(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadField.name,
          email: leadField.email,
          phone: leadField.phone,
          organization: leadField.school,
          role: `Student / Grade: ${leadField.grade}`,
          message: 'Brochure request from AI Foundations For Students landing page',
          interestType: 'junior',
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
        <section className="relative bg-gradient-to-b from-[#0A2540] to-indigo-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF] uppercase tracking-wider font-mono">
                🚀 Build Future Skills Early
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Build Future Skills with <span className="text-[#00D4FF]">Artificial Intelligence</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                Hands-on AI Foundations, structured Prompt Engineering, Python game-coding, and creative text-to-art generation classes. Prepare Grade 6-12 kids to think logically in the modern era.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-xs">
                {['NEP 2020 Recommended', 'Microsoft Co-aligned Syllabuses', 'Live Hand-on Projects', 'Verified Credentials'].map((pill, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-slate-200">
                    ✓ {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick brochure form */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading font-black text-lg text-[#0A2540] text-left">
                  Request Class Syllabus
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Download the comprehensive K-12 Logical Handbook and claim a free trial slot today.
                </p>

                {leadSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Brochure Request Logged!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Syllabus PDF guides and verified certificates info have been sent to your inbox. Speak soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">Student / Parent Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Ms. Rashmi Gowda"
                        value={leadField.name}
                        onChange={(e) => setLeadField({ ...leadField, name: e.target.value })}
                        className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">WhatsApp mobile</label>
                        <input
                          required
                          type="tel"
                          placeholder="9876543210"
                          value={leadField.phone}
                          onChange={(e) => setLeadField({ ...leadField, phone: e.target.value })}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="rashmi@domain.com"
                          value={leadField.email}
                          onChange={(e) => setLeadField({ ...leadField, email: e.target.value })}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">School Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Greenwood High"
                          value={leadField.school}
                          onChange={(e) => setLeadField({ ...leadField, school: e.target.value })}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Student Class</label>
                        <select
                          value={leadField.grade}
                          onChange={(e) => setLeadField({ ...leadField, grade: e.target.value })}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="6">Class 6</option>
                          <option value="7">Class 7</option>
                          <option value="8">Class 8</option>
                          <option value="9">Class 9</option>
                          <option value="10">Class 10</option>
                          <option value="11">Class 11</option>
                          <option value="12">Class 12</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Claim Free Course Syllabus</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* STUDY TRAK PROGRAM BLOCKS */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Course Syllabus</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800">Choose Your Learning Vector</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {juniorCourses.map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg text-xs text-slate-500 font-mono">
                    <span className="font-bold text-[#0A2540]">{c.grade}</span>
                    <span>{c.duration}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{c.description}</p>
                  
                  {/* Bullet modules */}
                  <ul className="text-[11px] text-slate-500 font-sans space-y-1 pt-2 border-t border-slate-100">
                    {c.curriculum.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-slate-400 block uppercase font-mono">One-Time Tuition</span>
                    <span className="font-mono font-extrabold text-lg text-blue-600">₹{c.price}</span>
                  </div>
                  <button
                    onClick={() => handleEnrollClick(c.title, c.price)}
                    className="px-4 py-2 bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPOTLIGHT GALLERY AND PROJECT GRID */}
        <section className="bg-slate-50 py-16 rounded-3xl border border-slate-100 px-6 sm:px-12 text-left">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase text-emerald-600 font-mono">Real-world Prototypes</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800">Student Showcase Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Crop Health Classifier AI',
                student: 'Amit R. (Class 9)',
                tags: ['AI Foundations', 'Python'],
                desc: 'Amit coded a lightweight visual analyzer that identifies tomato leaf blight using mobile pictures.',
              },
              {
                title: 'Interactive Homework Buddy GPT',
                student: 'Priya K. (Class 7)',
                tags: ['Prompt Eng', 'NoCode'],
                desc: 'Priya calibrated a customized GTP bot designed specifically to teach geometric theorem proofs step-by-step.',
              },
              {
                title: 'Eco-Story Generative Reel',
                student: 'Sahil S. (Class 10)',
                tags: ['Digital Creativity'],
                desc: 'Sahil formulated a 2-minute stylized animated movie with complete narration using AI-generated story sketches.',
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4">
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-50 text-blue-600 text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-extrabold text-[#0A2540] text-xs sm:text-sm">{p.title}</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Created by: {p.student}</p>
                </div>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{p.desc}</p>
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
        itemName={checkoutItem.name}
        itemPrice={checkoutItem.price}
      />
      <FloatingWhatsAppButton />
    </div>
  );
}
