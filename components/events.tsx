'use client';

import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';

export const EventsAndWorkshops: React.FC = () => {
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpEvent, setRsvpEvent] = useState('AI National Webinar');

  const upcomingEvents = [
    {
      title: 'Free National AI Awareness Webinar & Q&A',
      desc: 'Discover critical prompt parameters and study hacks for middle school, high school students, parents, and educators.',
      date: 'Saturday, June 20, 2026',
      time: '04:00 PM - 05:30 PM (IST)',
      venue: 'Online Interactive Stream (Zoom)',
      price: 'FREE',
    },
    {
      title: 'Future Skills Boot Camp for Class 6-12',
      desc: 'Immersive logical thinking and scratch blocks training co-ordinated with our strategic curriculum guides.',
      date: 'June 25 - June 28, 2026',
      time: 'Daily 10:00 AM - 12:30 PM (IST)',
      venue: 'Physical Hub Center (Mandya Hub)',
      price: '₹1,499 per Student',
    },
  ];

  const pastEvents = [
    { title: 'Teacher AI Training Cohort Mandya Group', date: 'May 2026', attendees: '140 Teachers', desc: 'Equipped government computer instructors to compose differentiated worksheets and NEP syllabus metrics.' },
    { title: 'K-12 Robotic & Logic Exhibition Bengaluru', date: 'April 2026', attendees: '450+ Students', desc: 'Showcasing 45 school-student coding inventions ranging from tomato classifiers to ecostory books.' },
  ];

  const speakers = [
    { name: 'Dr. Anand Raman', role: 'Language Processing Expert, IISc/IIT Researcher' },
    { name: 'Anusha Kumar', role: 'Academic Dean & Chief Coach, Natton SkillX' },
  ];

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;

    // Simulate RSVP
    setRsvpSuccess(true);
  };

  return (
    <div className="space-y-24 pb-16 font-sans text-left">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-slate-900 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Calendar className="w-3.5 h-3.5" /> Synchronized Webinars & Ground Hub Workshops
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Upcoming Events & Workshops
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Register for upcoming free webinars, check out our past regional activities, and evaluate logical outcomes.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENTS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase">Live Ecosystem</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Lock Your Slots</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Book passes for our student webinars and teacher enablement bootcamps directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((evt, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-md text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">{evt.date}</span>
                  <span className="bg-blue-50 text-blue-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full">{evt.price}</span>
                </div>
                <h3 className="font-heading font-black text-slate-800 text-sm sm:text-base leading-snug">{evt.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{evt.desc}</p>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl text-xs text-slate-600 font-sans border border-slate-100/60">
                <p>🕒 <strong>Time:</strong> {evt.time}</p>
                <p>📍 <strong>Venue:</strong> {evt.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONLINE EVENT REGISTRATION */}
      <section className="max-w-md mx-auto bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 text-left">
        <h3 className="font-heading font-black text-lg text-[#0A2540] text-center">RSVP Event Registrations</h3>

        {rsvpSuccess ? (
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-center space-y-2 text-xs">
            <p className="font-extrabold">🎉 Registration Confirmed!</p>
            <p className="text-slate-500">We have logged your slot record for <strong>{rsvpEvent}</strong>. Slot details, calendars, and links have been dispatched.</p>
          </div>
        ) : (
          <form onSubmit={handleRsvp} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Select Chosen Event</label>
              <select
                className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg focus:outline-none"
                value={rsvpEvent}
                onChange={(e) => setRsvpEvent(e.target.value)}
              >
                <option value="AI National Webinar">Free AI Awareness Webinar (Online)</option>
                <option value="Mandya Coding Bootcamp">Rural Coding Bootcamp (Mandya Hub)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Your Full Name</label>
              <input
                required
                type="text"
                placeholder="Rajesh Kumar"
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Your Email Address</label>
              <input
                required
                type="email"
                placeholder="rajesh@domain.com"
                value={rsvpEmail}
                onChange={(e) => setRsvpEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none"
              />
            </div>

            <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cursor-pointer">
              Book Webinar Slot (Free)
            </button>
          </form>
        )}
      </section>

      {/* PAST EVENTS GALLERY */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-heading font-black text-2xl text-slate-800">Our Past Landmark Events</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Inspect historical student participations and regional educational upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {pastEvents.map((pe, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-5 rounded-xl space-y-3 shadow-sm rounded-2xl">
                <div className="flex justify-between text-[10px] uppercase font-mono font-bold text-slate-400">
                  <span>{pe.date}</span>
                  <span>{pe.attendees}</span>
                </div>
                <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base leading-snug">{pe.title}</h4>
                <p className="text-xs text-slate-550 text-slate-500 leading-relaxed font-sans">{pe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER PROFILES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center font-sans">
        <h3 className="font-heading font-black text-2xl text-slate-800">Key Speakers / Technical Leads</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {speakers.map((sp, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] px-4 py-6 rounded-xl hover:shadow shadow-sm flex flex-col items-center justify-center space-y-1 font-sans">
              <h5 className="font-heading font-extrabold text-[#0A2540] text-sm leading-tight">{sp.name}</h5>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{sp.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsAndWorkshops;
