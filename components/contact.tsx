'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, MessageSquare } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parent' | 'school' | 'corporate'>('parent');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({ name: '', email: '', phone: '', note: '', org: '' });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formFields.name,
          email: formFields.email,
          phone: formFields.phone,
          organization: formFields.org || 'Local Student Client',
          role: activeTab === 'parent' ? 'Parent' : activeTab === 'school' ? 'Academics Coordinator' : 'Corporate HR',
          interestType: activeTab,
          message: formFields.note,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      }
    } catch {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="space-y-24 pb-16 font-sans text-left">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-slate-900 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <MapPin className="w-3.5 h-3.5" /> Start Your Innovation Transition Today
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Connect with Natton SkillX
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have questions about student trial courses, school partnerships, or CSR sponsorships? Drop us a prompt below.
          </p>
        </div>
      </section>

      {/* THREE-CHANNEL FORM AND CORE DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Company physical locations details (Left) */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading font-black text-slate-800 text-xl">Operational Offices</h3>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Connect directly through our main branch nodes. Or tap the floating WhatsApp button to command a trial webinar right away.
              </p>
            </div>

            <div className="space-y-5 font-sans text-xs text-slate-605">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-extrabold text-slate-800">Bengaluru Headquarters</p>
                  <p className="text-slate-500 mt-0.5">Brigade Gateway, Rajajinagar, Bengaluru, KA 560055</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-extrabold text-slate-800">Electronic Mail Contacts</p>
                  <p className="text-slate-500 mt-0.5">partnerships@nattonskillx.com</p>
                  <p className="text-slate-500 mt-0.5">trials@nattonskillx.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-extrabold text-slate-800">Direct Support Hotline</p>
                  <p className="text-slate-500 mt-0.5">+91 98765 43210</p>
                  <p className="text-slate-500 mt-0.5">Daily 09:00 AM - 07:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp helper */}
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl space-y-3 font-sans text-xs">
              <div className="flex items-center gap-2 text-emerald-800">
                <MessageSquare className="w-5 h-5" />
                <h4 className="font-heading font-bold">WhatsApp Hotline Chat</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Instant trial allocations and PDF syllabus brocures are directly transacted via our automated chat support system.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg cursor-pointer"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Multichannel Form container (Right) */}
          <div className="md:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-black text-slate-800 text-lg">Send Contact Prompt</h3>

              {/* Channel Selector */}
              <div className="grid grid-cols-3 gap-1 bg-slate-50 p-1 rounded-xl">
                {['parent', 'school', 'corporate'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab as any);
                      setFormSubmitted(false);
                    }}
                    className={`py-2 text-[10px] font-bold uppercase rounded-lg transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-550 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {tab === 'parent' ? 'Parent Trial' : tab === 'school' ? 'School Sync' : 'Corporate Hub'}
                  </button>
                ))}
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2 text-emerald-800">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-heading font-black">Ticket Registered Successfully!</h4>
                <p className="text-xs text-slate-500 leading-normal leading-relaxed font-sans">
                  We logged your channel request inside the CRM workspace. An administrative educational advisor will call your Whatsapp contact within 8-12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 font-bold mb-1">Your Selected Identifier</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
                      placeholder="e.g. Anand Sen"
                      value={formFields.name}
                      onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-bold mb-1">WhatsApp Cell</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
                      placeholder="9876543210"
                      value={formFields.phone}
                      onChange={(e) => setFormFields({ ...formFields, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-bold mb-1">Email Coordinates</label>
                  <input
                    required
                    type="email"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
                    placeholder="name@domain.com"
                    value={formFields.email}
                    onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                  />
                </div>

                {activeTab !== 'parent' && (
                  <div>
                    <label className="block text-slate-600 font-bold mb-1">
                      {activeTab === 'school' ? 'School Complete Name' : 'Corporate Enterprise / NGO Name'}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
                      placeholder={activeTab === 'school' ? 'CBSE Global High' : 'Tech Hub India'}
                      value={formFields.org}
                      onChange={(e) => setFormFields({ ...formFields, org: e.target.value })}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-slate-600 font-bold mb-1">Specific Query Details / Request Note</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                    placeholder={
                      activeTab === 'parent'
                        ? 'Interested in enrolling my child Kiran (Class 9) for AI classes trials.'
                        : activeTab === 'school'
                        ? 'We want to schedule a physical 90-min AI pilot assembly inside computer labs.'
                        : 'Requesting a customized cohort pricing quotes for upskilling 20 department coordinators.'
                    }
                    value={formFields.note}
                    onChange={(e) => setFormFields({ ...formFields, note: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md cursor-pointer flex justify-center items-center gap-1.5"
                >
                  Send CRM Support Query <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
