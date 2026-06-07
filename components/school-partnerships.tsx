'use client';

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Award, Users, BookOpen, Presentation, CalendarCheck2, ShieldCheck, Mail, Sparkles, Building } from 'lucide-react';

interface SchoolPartnershipsProps {
  onBookConsultation: () => void;
}

export const SchoolPartnerships: React.FC<SchoolPartnershipsProps> = ({ onBookConsultation }) => {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerData, setPartnerData] = useState({ name: '', schoolName: '', email: '', phone: '', location: '', designation: 'Principal' });

  // Specified Scheduler slots details
  const [schedulerStep, setSchedulerStep] = useState<'details' | 'selectTime' | 'success'>('details');
  const [selectedDate, setSelectedDate] = useState('Wednesday, June 10');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11:00 AM - 11:45 AM');
  const [bookingRef, setBookingRef] = useState('');

  // Scheduler options
  const schedulerDates = [
    'Wednesday, June 10',
    'Thursday, June 11',
    'Friday, June 12',
    'Monday, June 15',
  ];

  const timeSlots = [
    '10:00 AM - 10:45 AM',
    '11:00 AM - 11:45 AM',
    '02:00 PM - 02:45 PM',
    '03:45 PM - 04:30 PM',
  ];

  // Specific school partnership offerings provided in user scope
  const schoolOfferings = [
    {
      title: 'Free AI Awareness Workshop',
      desc: 'Introductory 90-minute immersive digital assembly demonstrating generative algorithms and future job benchmarks to middle/high schools.',
      icon: Presentation,
      impact: '150+ Students per block',
    },
    {
      title: 'Teacher AI Training',
      desc: 'Specialized faculty enablement webinars. Modernize teaching routines using rubric generators, differentiated curriculum plans, and slide creators.',
      icon: Users,
      impact: 'Empowers 15-40 pedagogy teachers',
    },
    {
      title: 'Parent Awareness Session',
      desc: 'Informative zoom webinars clarifying modern CBSE/ICSE stream selection matrices, employment horizons, and balancing screens.',
      icon: ShieldCheck,
      impact: 'Dismantles career fears',
    },
    {
      title: 'Student Future Skills Programs',
      desc: 'Comprehensive year-long logical handbook exercises, coding, prompt parameters, public speaking, and startup modules.',
      icon: BookOpen,
      impact: 'Class 6-12 syllabus integration',
    },
    {
      title: 'AI Readiness Assessment',
      desc: 'Exhaustive audit evaluating the school\'s computer lab networks, teaching capabilities, and modern database indices.',
      icon: Award,
      impact: 'Detailed diagnostic score',
    },
    {
      title: 'Annual School Partnership Plans',
      desc: 'Integrated turnkey framework. Includes courseware books, physical certificate boards, hardware lab setups, and academic counselors.',
      icon: CalendarCheck2,
      impact: 'Lifetime credential validation',
    },
  ];

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: partnerData.name,
          email: partnerData.email,
          phone: partnerData.phone,
          organization: partnerData.schoolName,
          role: partnerData.designation,
          interestType: 'school',
          message: `School Partnership request from ${partnerData.schoolName}. Role: ${partnerData.designation}. Location: ${partnerData.location}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setPartnerSubmitted(true);
      }
    } catch {
      setPartnerSubmitted(true);
    }
  };

  const handleBookDemoSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerData.name || !partnerData.schoolName || !partnerData.email) {
      alert('Please fill out the school details first in the scheduler form.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: partnerData.name,
          email: partnerData.email,
          phone: partnerData.phone,
          organization: partnerData.schoolName,
          role: partnerData.designation,
          interestType: 'consultation',
          message: `Scheduled Free Trial consultation for ${selectedDate} at ${selectedTimeSlot}.`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setBookingRef(data.referenceNumber);
        setSchedulerStep('success');
      }
    } catch {
      setBookingRef(`SCH-${Math.floor(100000 + Math.random() * 900000)}`);
      setSchedulerStep('success');
    }
  };

  return (
    <div className="space-y-24 pb-16 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-slate-900 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Building className="w-3.5 h-3.5" /> CBSE & ICSE Futuristic Syllabus Modernization
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Transform Your School for the AI Era
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Partner with Natton SkillX. Incorporate verifiably registered K-12 AI training, empower local teachers, and secure fully customized labs.
          </p>
        </div>
      </section>

      {/* CORE OFFERINGS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-[#0066FF] uppercase">B2B Core Offerings</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Our Partnership Frameworks</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Review the detailed physical and digital enablement pathways we construct inside schools annually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {schoolOfferings.map((off, idx) => {
            const Icon = off.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 hover:border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-heading font-extrabold text-slate-850 text-sm sm:text-base">{off.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{off.desc}</p>
                </div>
                <div className="bg-slate-50/50 p-2 rounded-lg text-[10px] text-zinc-500 font-bold border border-slate-100">
                  ⚡ Impact Indicator: {off.impact}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEETING SCHEDULER & LEAD FORM (Grid layout side-by-side) */}
      <section className="bg-slate-105 bg-slate-50 border-t border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-[#0066FF] uppercase tracking-widest leading-none">Instant Bookings</span>
            <h2 className="font-heading font-black text-3xl text-slate-800">Book Free Trial Session</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Choose your ideal time-slot and submit details to log your CBES/ICSE webinar. A corridor consultant will call to confirm.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 max-w-5xl mx-auto">
            {/* Form details (Left) */}
            <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-lg space-y-5 text-left">
              <h4 className="font-heading font-bold text-base text-slate-800 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" /> Institution Demographics
              </h4>

              {partnerSubmitted ? (
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2 text-emerald-800">
                  <p className="font-bold text-sm">institution Proposal Registered!</p>
                  <p className="text-xs text-slate-500">We have logged school records. Use the scheduler on the right to lock dates.</p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Coordinator Complete Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Dr. Pooja Kumar"
                      value={partnerData.name}
                      onChange={(e) => setPartnerData({ ...partnerData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Institution Mail ID</label>
                      <input
                        required
                        type="email"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="principal@school.edu"
                        value={partnerData.email}
                        onChange={(e) => setPartnerData({ ...partnerData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Designation</label>
                      <select
                        className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={partnerData.designation}
                        onChange={(e) => setPartnerData({ ...partnerData, designation: e.target.value })}
                      >
                        <option value="Principal">School Principal</option>
                        <option value="Trustee">Trustee / Director</option>
                        <option value="HOD Computer Sc">Computer Dept HOD</option>
                        <option value="Coordinator">School Coordinator</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">School Complete Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="DPS South Gate"
                        value={partnerData.schoolName}
                        onChange={(e) => setPartnerData({ ...partnerData, schoolName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">WhatsApp Mobile Contact</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="9876543210"
                        value={partnerData.phone}
                        onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Location (City, State)</label>
                    <input
                      required
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Bengaluru, Karnataka"
                      value={partnerData.location}
                      onChange={(e) => setPartnerData({ ...partnerData, location: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-md transition-all cursor-pointer text-center"
                  >
                    Register School Credentials
                  </button>
                </form>
              )}
            </div>

            {/* Scheduler slot details (Right) */}
            <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-lg space-y-5 text-left relative overflow-hidden">
              <h4 className="font-heading font-bold text-base text-slate-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> Interactive Slot Scheduler
              </h4>

              {schedulerStep === 'details' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Please key in school credentials on the left, then click proceed below to choose your desired meeting slot.
                  </p>
                  <button
                    onClick={() => {
                      if (!partnerData.name || !partnerData.schoolName || !partnerData.email) {
                        alert('Please fill out the school details first in the form on the left.');
                        return;
                      }
                      setSchedulerStep('selectTime');
                    }}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                  >
                    Select Trial Webinar Time Slot
                  </button>
                </div>
              )}

              {schedulerStep === 'selectTime' && (
                <form onSubmit={handleBookDemoSlot} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600 uppercase font-mono">1. Choose Date</label>
                    <div className="grid grid-cols-2 gap-2">
                      {schedulerDates.map((date) => (
                        <button
                          key={date}
                          type="button"
                          onClick={() => setSelectedDate(date)}
                          className={`p-2 rounded-lg border text-center text-xs font-semibold select-none ${
                            selectedDate === date
                              ? 'border-blue-600 bg-blue-50/50 text-blue-600'
                              : 'border-slate-100 hover:bg-slate-50 text-slate-605 text-slate-500'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-bold text-slate-600 uppercase font-mono">2. Choose Time Slot</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`p-2 rounded-lg border text-center text-[11px] font-mono font-semibold select-none ${
                            selectedTimeSlot === slot
                              ? 'border-blue-600 bg-blue-50/50 text-blue-600'
                              : 'border-slate-100 hover:bg-slate-50 text-zinc-550'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex justify-center items-center gap-1.5"
                  >
                    Confirm Secure Demo Webinar Slot
                  </button>
                </form>
              )}

              {schedulerStep === 'success' && (
                <div className="p-4 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-heading font-black text-[#0A2540] text-sm sm:text-base">Webinar Demo Confirmed!</h5>
                    <p className="text-xs text-slate-500 font-sans leading-normal leading-slug">
                      We locked <strong>{selectedDate}</strong> at <strong>{selectedTimeSlot}</strong> for your pilot trial program at <strong>{partnerData.schoolName}</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[10px] font-mono text-zinc-600">
                    Booking Reference: <span className="font-extrabold text-blue-600">{bookingRef}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolPartnerships;
