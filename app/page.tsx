'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../components/global-elements';
import { HomePage } from '../components/home-page';
import { AboutUs } from '../components/about';
import { SkillXJunior } from '../components/skillx-junior';
import { SkillXPro } from '../components/skillx-pro';
import { CareerX } from '../components/careerx';
import { SchoolPartnerships } from '../components/school-partnerships';
import { SkillXImpact } from '../components/skillx-impact';
import { EventsAndWorkshops } from '../components/events';
import { BlogEngine } from '../components/blog';
import { ContactUs } from '../components/contact';
import { CheckoutModal } from '../components/checkout-modal';
import { Logo } from '../components/logo';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function AppEntrypoint() {
  const [tab, setTab] = useState<string>('home');

  // Checkout Modal triggers
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItemName, setCheckoutItemName] = useState('');
  const [checkoutItemPrice, setCheckoutItemPrice] = useState(0);

  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleEnrollTrigger = (courseName: string, price: number) => {
    setCheckoutItemName(courseName);
    setCheckoutItemPrice(price);
    setCheckoutOpen(true);
  };

  const handleBookConsultationTrigger = () => {
    setTab('contact');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  // Switch routing based on tab key
  const renderTabContent = () => {
    switch (tab) {
      case 'home':
        return (
          <HomePage
            setTab={setTab}
            onEnroll={handleEnrollTrigger}
            onBookConsultation={handleBookConsultationTrigger}
          />
        );
      case 'about':
        return <AboutUs />;
      case 'junior':
        return (
          <SkillXJunior
            onEnroll={handleEnrollTrigger}
            onBookConsultation={handleBookConsultationTrigger}
          />
        );
      case 'pro':
        return (
          <SkillXPro
            onEnroll={handleEnrollTrigger}
            onBookConsultation={handleBookConsultationTrigger}
          />
        );
      case 'careerx':
        return <CareerX onBookConsultation={handleBookConsultationTrigger} />;
      case 'partnerships':
        return <SchoolPartnerships onBookConsultation={handleBookConsultationTrigger} />;
      case 'impact':
        return <SkillXImpact />;
      case 'events':
        return <EventsAndWorkshops />;
      case 'blog':
        return <BlogEngine />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <HomePage
            setTab={setTab}
            onEnroll={handleEnrollTrigger}
            onBookConsultation={handleBookConsultationTrigger}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-blue-600/10 bg-[#F8FAFC]">
      {/* 1. Global Announcement */}
      <AnnouncementBar />

      {/* 2. Global Sticky Header */}
      <StickyHeader
        currentTab={tab}
        setTab={setTab}
        onBookConsultation={handleBookConsultationTrigger}
      />

      {/* 3. Main Route Body Container */}
      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {renderTabContent()}
      </main>

      {/* 4. Global Footer Section */}
      <footer className="w-full bg-[#0A2540] text-slate-350 border-t border-slate-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-left text-xs text-slate-300">
        <div className="absolute top-0 left-0 p-16 text-blue-500 bg-blue-500/5 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12 relative z-10">
          {/* Logo, tagline, and details (Left) */}
          <div className="md:col-span-4 space-y-6">
            <div className="text-white">
              <Logo showTagline={true} size={40} />
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400 font-sans max-w-sm">
              Empowering Students, Professionals, Educators, and Communities through future skills, AI workshops, custom diagnostics, and rural development.
            </p>
            <div className="space-y-2.5 text-[11px] text-slate-400 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Brigade Gateway, Bengaluru, KA, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@nattonskillx.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Quick links & navigation tabs (Center-Left) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col gap-2 uppercase text-[10px] font-bold font-sans">
              <button onClick={() => setTab('home')} className="hover:text-[#00D4FF] text-left">Home</button>
              <button onClick={() => setTab('about')} className="hover:text-[#00D4FF] text-left">About Us</button>
              <button onClick={() => setTab('junior')} className="hover:text-[#00D4FF] text-left">SkillX Junior</button>
              <button onClick={() => setTab('pro')} className="hover:text-[#00D4FF] text-left">SkillX Pro</button>
              <button onClick={() => setTab('careerx')} className="hover:text-[#00D4FF] text-left">CareerX</button>
            </div>
          </div>

          {/* Additional channels (Center-Right) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">Strategic Divisions</h4>
            <div className="flex flex-col gap-2 uppercase text-[10px] font-bold font-sans">
              <button onClick={() => setTab('partnerships')} className="hover:text-[#00D4FF] text-left">School Partnerships</button>
              <button onClick={() => setTab('impact')} className="hover:text-[#00D4FF] text-left">SkillX Impact & Trust</button>
              <button onClick={() => setTab('events')} className="hover:text-[#00D4FF] text-left">Events & Workshops</button>
              <button onClick={() => setTab('blog')} className="hover:text-[#00D4FF] text-left">Blog Engine</button>
              <button onClick={() => setTab('contact')} className="hover:text-[#00D4FF] text-left">Contact Us</button>
            </div>
          </div>

          {/* Monthly bulletin report newsletter signup (Right) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">Handbook Subscriptions</h4>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              Receive month-by-month AI curriculum guidelines, prompt lists, and school technology trends directly.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-cyan-950 border border-cyan-800/20 text-cyan-300 rounded-lg text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> <span>Successfully Synced Bulletin!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  required
                  type="email"
                  placeholder="name@domain.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button type="submit" className="px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Social channels tags */}
            <div className="pt-2">
              <p className="text-[10px] text-slate-500 font-semibold mb-2">Connect Channels:</p>
              <div className="flex gap-2.5 font-mono text-[10px] text-slate-400">
                <span className="hover:text-cyan-400 cursor-pointer">LinkedIn</span>
                <span>•</span>
                <span className="hover:text-cyan-400 cursor-pointer">Twitter</span>
                <span>•</span>
                <span className="hover:text-cyan-400 cursor-pointer">Instagram</span>
                <span>•</span>
                <span className="hover:text-cyan-400 cursor-pointer">YouTube</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and disclosures footer rows */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-sans relative z-10">
          <div className="flex gap-4 items-center flex-wrap justify-center text-center">
            <span>🛡️ MSME Govt India ID: UDYAM-KR-03-010482</span>
            <span>•</span>
            <span>📍 Aligned NSDC & NEP Syllabuses</span>
            <span>•</span>
            <span>🤝 Community Partner: Raitamitra Social Trust (R)</span>
          </div>
          <div className="flex gap-3 text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Refund Policy (RazorPay Aligned)</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center text-[10px] text-slate-600 mt-6 font-sans">
          © 2026 Natton SkillX Pvt Ltd. All rights reserved globally. Powered by server-side cognitive models.
        </div>
      </footer>

      {/* 5. Global Floating WhatsApp Automation */}
      <FloatingWhatsAppButton />

      {/* 6. Dynamic RazorPay Checkout Modal Dialog overlay */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        itemName={checkoutItemName}
        itemPrice={checkoutItemPrice}
      />
    </div>
  );
}
