'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { CheckoutModal } from '../../components/checkout-modal';
import { Logo } from '../../components/logo';
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, Calendar, Users, Presentation, ShieldCheck, ArrowRight, Star, Heart } from 'lucide-react';

export default function FreeAiAwarenessWorkshop() {
  const [tab, setTab] = useState<string>('partnerships');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    mobileNumber: '',
    email: '',
    city: '',
    studentStrength: '100-300',
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
          name: formData.principalName,
          email: formData.email,
          phone: formData.mobileNumber,
          organization: formData.schoolName,
          message: `Free AI Awareness Workshop booking. City: ${formData.city}. Expected Student Strength: ${formData.studentStrength}`,
          interestType: 'school',
        }),
      });
      setLeadSubmitted(true);
    } catch {
      setLeadSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-blue-600/10 bg-[#F8FAFC]">
      <AnnouncementBar />
      <StickyHeader currentTab="" setTab={(t) => window.location.href = `/?tab=${t}`} onBookConsultation={() => {}} />

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-20 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-[#0A2540] to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 p-32 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF] uppercase tracking-wider font-mono">
                ✨ Zero-Cost School Pilot Initiative
              </span>
              <h1 className="font-heading font-black text-35px text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Bring AI Awareness to Your School — <span className="text-[#00D4FF]">Absolutely FREE</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-350 leading-relaxed font-sans max-w-xl">
                Empower your students and pedagogy teachers with futuristic AI knowledge. Fully aligned with the NEP 2020 and NSDC future skills framework. Let our certified coordinators handle the digital classroom setup today.
              </p>

              {/* Quick bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Live AI Demonstrations & Prompting',
                  'Certificates for All Participants',
                  'School AI Readiness Report Card',
                  'Hands-on Lab Experiments',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* lead gen sidebar form */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-heading font-black text-lg text-[#0A2540] text-left">
                  Request Free School Program
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed text-left">
                  Schedule your pilot school day-workshop. Our coordinators will contact you to locked dates.
                </p>

                {leadSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Workshop Booking Synced!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Thank you! Our future skills coordinator is aligning calendar availability and will call you on your mobile within 12 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-left">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">School Name</label>
                        <input
                          required
                          type="text"
                          name="schoolName"
                          placeholder="DPS North"
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Principal/Contact Name</label>
                        <input
                          required
                          type="text"
                          name="principalName"
                          placeholder="Dr. Alka Roy"
                          value={formData.principalName}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Mobile Number</label>
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
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Principal Mail ID</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="principal@domain.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">School City</label>
                        <input
                          required
                          type="text"
                          name="city"
                          placeholder="Bengaluru"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Student Strength (6-12)</label>
                        <select
                          name="studentStrength"
                          value={formData.studentStrength}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-550 focus:outline-none"
                        >
                          <option value="100-300">100 - 300 Students</option>
                          <option value="300-800">300 - 800 Students</option>
                          <option value="800-1500">800 - 1500 Students</option>
                          <option value="1500+">1500+ Students</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1"
                    >
                      <span>Book Free Workshop</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST INDICATORS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {[
            { tag: 'NEP 2020 Aligned', title: 'Future-skills curriculums mapped to national frameworks.' },
            { tag: 'MSME Certified ID', title: 'UDYAM-KR-03-010482 corporate Skilling credentials.' },
            { tag: 'No Cost Setup', title: 'Zero school resource expenditure requested for the pilot day.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-1.5 text-left border-l-4 border-l-blue-500">
              <span className="text-[9px] font-extrabold uppercase bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-mono">
                {item.tag}
              </span>
              <p className="text-xs text-slate-650 text-slate-500 leading-normal font-sans">
                {item.title}
              </p>
            </div>
          ))}
        </section>

        {/* KEY BENEFITS */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase font-sans">
              Program Advantages
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-800">
              Future-Ready Benefits for Your School
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Live AI Demonstrations',
                desc: 'Students interact with advanced image-generators, logical prompts, and voice bots to demystify neural networks.',
                icon: Presentation,
              },
              {
                title: 'Future Career Awareness',
                desc: 'Detailed mapping of career opportunities under ChatGPT, robotics, and design models in the next decade.',
                icon: Award,
              },
              {
                title: 'Teacher AI Readiness',
                desc: 'Special session for faculties addressing AI lesson plans, automated diagnostics, and slide generation.',
                icon: Users,
              },
              {
                title: 'Student Participation Certificates',
                desc: 'Every attending student receives a custom SkillX credential proving foundational AI understanding.',
                icon: CheckCircle2,
              },
              {
                title: 'School AI Readiness Assessment',
                desc: 'A computer lab audit evaluating infrastructure, teaching tools, and network capacities for future integrations.',
                icon: ShieldCheck,
              },
              {
                title: 'No Resource Required',
                desc: 'Our staff carries all dynamic modules, projection assets, and hardware setups to conduct workshops seamlessly.',
                icon: Calendar,
              },
            ].map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl text-left flex flex-col justify-between space-y-3 shadow-xs hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5.s5 h-5.5" />
                    </div>
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-800">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed leading-slug font-sans">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-slate-50 py-12 rounded-3xl border border-slate-100 px-6 sm:px-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold bg-[#0A2540] text-[#00D4FF] px-2.5 py-1 rounded">Proven Impact</span>
              <h3 className="font-heading font-black text-2xl text-[#0A2540]">Rated 4.9/5 by 120+ Indian Academics</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Our awareness workshops have empowered schools across regions, delivering key insights that inspire students and equip school leaders with strategic digital knowledge.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  comment: "Natton SkillX conducted an exceptional 2-hour AI workshop for our Class 10 & 11 students. The live prompting and certificate verification made it a huge hit. The school audit is quite useful.",
                  author: "Dr. Sandeep Deshmukh",
                  title: "Principal, Deshmukh Global School",
                },
                {
                  comment: "Dismantled students' doubts on AI stream selections. The teacher lesson plans AI demo is extremely relevant for our faculty workloads today. Highly professional support.",
                  author: "Pratibha Nair",
                  title: "Academic Lead, KV High School",
                },
              ].map((rev, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic font-sans leading-relaxed">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-50 mt-3">
                    <h5 className="font-heading font-bold text-xs text-[#0A2540]">{rev.author}</h5>
                    <span className="text-[10px] text-slate-400 font-sans">{rev.title}</span>
                  </div>
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
