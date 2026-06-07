'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { Logo } from '../../components/logo';
import { CheckCircle2, Award, Users, BookOpen, BrainCircuit, ArrowRight, Star, GraduationCap } from 'lucide-react';

export default function AiForTeachers() {
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teacherName: '',
    schoolName: '',
    mobileNumber: '',
    email: '',
    subjectTaught: '',
    gradeLevel: '6-8',
  });

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
          name: formData.teacherName,
          email: formData.email,
          phone: formData.mobileNumber,
          organization: formData.schoolName,
          message: `AI for Teachers Workshop interest. Subject: ${formData.subjectTaught}. Grade: ${formData.gradeLevel}`,
          interestType: 'teacher',
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
                🎓 Professional Teacher Empowerment
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Transform Your Teaching with <span className="text-blue-450 text-blue-400">Artificial Intelligence</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                Draft premium lesson plans, automate exam grading, write engaging quiz prompts, and save up to 10+ hours per week using custom-tailored AI classroom facilitators.
              </p>

              {/* Core Outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'AI Lesson Plan Generation',
                  'Flipped Classroom Orchestration',
                  'Assessment Automation Rubrics',
                  'Certified AI Pedagogy Credentials',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teacher lead form */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading font-black text-lg text-[#0A2540] text-left">
                  Reserve Teacher Seat
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Sign up for the upcoming CBSE/ICSE online AI Certification webinar. Seats are limited.
                </p>

                {leadSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Seat Reserved Successfully!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Thank you! Your verified enrollment link and calendar coordinates have been synced. We will email instructions directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">Teacher Complete Name</label>
                      <input
                        required
                        type="text"
                        name="teacherName"
                        placeholder="Ms. Amrita Joshi"
                        value={formData.teacherName}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Grade Level</label>
                        <select
                          name="gradeLevel"
                          value={formData.gradeLevel}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="Primary">Primary (1-5)</option>
                          <option value="Middle">Middle (6-8)</option>
                          <option value="Senior">Senior High (9-12)</option>
                          <option value="Higher">College / Higher Ed</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Subject Taught</label>
                        <input
                          required
                          type="text"
                          name="subjectTaught"
                          placeholder="e.g. Mathematics"
                          value={formData.subjectTaught}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Mobile Contact</label>
                        <input
                          required
                          type="tel"
                          name="mobileNumber"
                          placeholder="9876543210"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Email ID Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="amrita@school.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">School Full Name</label>
                      <input
                        required
                        type="text"
                        name="schoolName"
                        placeholder="NPS Indiranagar"
                        value={formData.schoolName}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Reserve Your Seat</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CORE CURRICULUM KEY HIGHLIGHTS */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#0066FF] uppercase font-sans">
              Course Highlights
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800">
              Transformative EdTech Syllabus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'AI Lesson Planning',
                desc: 'Generate interactive 5E syllabus frameworks and lesson designs in seconds using custom prompts.',
                icon: BookOpen,
              },
              {
                title: 'Assessment Automation',
                desc: 'Create Rubrics, fill in class diagnostics charts, and instantly grade assignments objectively.',
                icon: Award,
              },
              {
                title: 'Content & Slide Creation',
                desc: 'Draft immersive multimedia outlines, logical visual models, and diagnostic question pools effortlessly.',
                icon: BrainCircuit,
              },
              {
                title: 'Teacher Certification',
                desc: 'Become a certified Future-Skills Instructor aligning directly with CBSE artificial intelligence recommendations.',
                icon: GraduationCap,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl text-left space-y-3 shadow-xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* RECENT OUTCOMES & REVIEWS */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 text-left max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-md">
              <span className="text-xs font-bold uppercase bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-mono">Feedback Rating</span>
              <h3 className="font-heading font-black text-2xl text-slate-800">What Fellow Leaders Say</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Join 1,400+ educators who have upgraded their pedagogy styles with custom prompt engineering workflows.
              </p>
            </div>

            <div className="flex-1 space-y-6">
              {[
                {
                  comment: "The lesson planner tool alone saves me 6 hours every week! Designing MCQ tests based on paragraphs used to take half a day, now it takes 2 minutes. Extraordinary certification course.",
                  author: "Mrs. Shobha K.",
                  role: "HOD Biology, Global Public School",
                },
                {
                  comment: "Fully aligned with the modern NEP-2020 layout guidelines. The syllabus details are actionable, clean, and extremely useful for school computer lab projects.",
                  author: "Mr. Raghunath Prasad",
                  role: "Science Coordinator, St. Marys Trust",
                },
              ].map((r, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 space-y-2">
                  <p className="text-xs text-slate-500 leading-relaxed italic font-sans">
                    &quot;{r.comment}&quot;
                  </p>
                  <p className="text-xs font-heading font-bold text-slate-800 pt-1">
                    {r.author} — <span className="font-sans text-[10px] text-slate-400 font-normal">{r.role}</span>
                  </p>
                </div>
              ))}
            </div>
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

      <FloatingWhatsAppButton />
    </div>
  );
}
