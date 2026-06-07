'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { SkillXImpact } from '../../components/skillx-impact';
import { Logo } from '../../components/logo';
import { CheckCircle2, Heart, ArrowRight, ShieldCheck, Mail, Sparkles, Building } from 'lucide-react';

export default function CsrNgoPartnershipsPage() {
  const [formData, setFormData] = useState({
    corporateName: '',
    trusteeName: '',
    email: '',
    phone: '',
    csrInterest: 'Digital Literacy',
    estimatedBudget: 'Under ₹5 Lakhs',
  });

  const [leadSubmitted, setLeadSubmitted] = useState(false);

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
          name: formData.trusteeName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.corporateName,
          message: `CSR Partnership request. Interest: ${formData.csrInterest}. Budget: ${formData.estimatedBudget}`,
          interestType: 'csr-ngo',
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

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16 pb-16">
        
        {/* REUSE THE IMPACT LAYOUT HIGHLIGHTS */}
        <SkillXImpact />

        {/* CSR DEDICATED PARTNERSHIP FORM */}
        <section className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto text-left space-y-6">
          <div className="text-center space-y-2">
            <Heart className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
            <h2 className="font-heading font-black text-2xl text-slate-800">Coordinate CSR / Foundation Pilots</h2>
            <p className="text-xs text-slate-400">Collaborate with Natton SkillX &amp; Raitamitra Social Trust. Elevate digital literacy in grassroot segments.</p>
          </div>

          {leadSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-3 text-emerald-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-sm">CSR Proposal Synced!</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Thank you! Our community development dean has received your corporate coordinates and will draft co-funding briefs within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3 animate-fade-in text-left">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Corporate Name / Foundation</label>
                  <input
                    required
                    type="text"
                    name="corporateName"
                    placeholder="e.g. Tata Trusts"
                    value={formData.corporateName}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Trustee / Spokeperson Name</label>
                  <input
                    required
                    type="text"
                    name="trusteeName"
                    placeholder="Dr. Anand Sen"
                    value={formData.trusteeName}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Primary Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="anand@foundation.org"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">WhatsApp Mobile Contact</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Primary Focus Area</label>
                  <select
                    name="csrInterest"
                    value={formData.csrInterest}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-550 focus:outline-none"
                  >
                    <option value="Digital Literacy">Digital Literacy Labs</option>
                    <option value="AI Awareness">K-12 School AI Pilots</option>
                    <option value="Women Empowerment">Women Financial Skills</option>
                    <option value="Teacher Enablement">Rural Teacher Training</option>
                    <option value="Community Innovation">Physical Community Labs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Estimated Budget</label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border border-slate-200 bg-white rounded-lg text-xs focus:ring-1 focus:ring-blue-550 focus:outline-none"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs</option>
                    <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹50 Lakhs">₹15 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50 Lakhs+">₹50 Lakhs+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#0A2540] text-slate-350 py-12 px-4 border-t border-slate-850 text-left text-xs text-xs">
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
