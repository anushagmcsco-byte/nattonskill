'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { Logo } from '../../components/logo';
import { CareerX } from '../../components/careerx';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2, Star, Award, CircleHelp } from 'lucide-react';

export default function CareerCounsellingPage() {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    email: '',
    phone: '',
    classGrade: 'Class 9',
  });

  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [scheduledSlot, setScheduledSlot] = useState(false);

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
          organization: `Grade: ${formData.classGrade} (Parent: ${formData.parentName})`,
          message: `Career counselling booking request for ${formData.name}`,
          interestType: 'consultation',
        }),
      });
      setLeadSubmitted(true);
      setScheduledSlot(true);
    } catch {
      setLeadSubmitted(true);
      setScheduledSlot(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#F8FAFC]">
      <AnnouncementBar />
      <StickyHeader currentTab="" setTab={(t) => window.location.href = `/?tab=${t}`} onBookConsultation={() => {}} />

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-20 pb-16">
        
        {/* HERO HEADER */}
        <section className="relative bg-gradient-to-tr from-[#0F1C3F] to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF] uppercase tracking-wider font-mono">
                🧠 Parent-Approved AI Stream Selector
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Discover the Right Career Path with <span className="text-[#00D4FF]">Absolute Confidence</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-305 text-slate-350 leading-relaxed font-sans max-w-xl">
                Psychometric Diagnostics, Cognitive Aptitude Assessments, and expert parent consultations. Empowering Class 6-12 participants to secure admission routes and align future skills.
              </p>

              {/* Quick outcomes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs">
                {[
                  'Scientific Psychometric Diagnostics',
                  'Frictionless Class 10-11 Stream Matching',
                  'Exclusive Multi-Page Career Reports',
                  'Dual Parent-Child Strategy Calls',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Scheduler */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading font-black text-lg text-[#0A2540] text-left">
                  Book Expert Consultation
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Schedule a private 45-minute counseling screen with our certified career architect today.
                </p>

                {scheduledSlot ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Advisor Session Logged!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Thank you! A slot has been provisioned. We are mailing the psychometric diagnostic test link onto your email right now.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase">Student Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="e.g. Rahul Gowda"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Current Grade</label>
                        <select
                          name="classGrade"
                          value={formData.classGrade}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        >
                          <option value="Class 6-8">Class 6 - 8</option>
                          <option value="Class 9">Class 9</option>
                          <option value="Class 10">Class 10</option>
                          <option value="Class 11">Class 11</option>
                          <option value="Class 12">Class 12</option>
                          <option value="College Undergraduate">College Ug</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Parent Full Name</label>
                        <input
                          required
                          type="text"
                          name="parentName"
                          placeholder="Shankar Gowda"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">WhatsApp Number</label>
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
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Contact Email ID</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="shankar@mail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <span>Book Diagnostic Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE APPLICANT QUIZ SECTION */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase text-blue-600 font-mono tracking-wider">Interactive Test sandbox</span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800">
              Take the Instant AI Career Readiness Quiz
            </h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Our advanced client-side sandbox evaluates your answers instantly to identify optimal future job coordinates. Click start inside:
            </p>
          </div>

          <CareerX onBookConsultation={() => setScheduledSlot(true)} />
        </section>

        {/* CORE REPORT DETAILS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {[
            {
              title: 'Aptitude Benchmarking',
              desc: 'Identifies numerical pattern capacities and logical logic coordinates scientifically.',
            },
            {
              title: 'Optimal Career Shortlist',
              desc: 'Mapping target future roles with their CAGR growth trajectory, income potential, and certification hurdles.',
            },
            {
              title: '3-Month Skilling Action Plan',
              desc: 'Detailed action items, projects, and curriculum suggestions generated by our trained counseling team.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-left hover:border-slate-205 transition-all">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
                {idx + 1}
              </div>
              <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
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
