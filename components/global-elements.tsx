'use client';

import React, { useState } from 'react';
import { Sparkles, MessageCircle, Phone, ArrowUpRight, Menu, X, ArrowRight, UserCheck } from 'lucide-react';
import { Logo } from './logo';

interface GlobalElementsProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onBookConsultation: () => void;
}

/**
 * AnnouncementBar Component
 */
export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#0A2540] text-[#00D4FF] py-2.5 px-4 text-center text-xs font-semibold tracking-wide border-b border-blue-900/40 relative overflow-hidden flex items-center justify-center gap-2">
      <span className="inline-flex items-center gap-1 font-mono uppercase bg-blue-500/20 px-2 py-0.5 rounded text-[10px] text-[#29FFFF]">
        <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Free Awareness
      </span>
      <span className="text-white">
        FREE AI Awareness Workshops for Schools, Teachers, and Students are now open!
      </span>
      <button className="underline hover:text-white transition-colors cursor-pointer text-[11px] font-bold inline-flex items-center gap-0.5">
        Book Slot <ArrowUpRight className="w-3 h-3" />
      </button>
    </div>
  );
};

/**
 * StickyHeader Component: Navigates tabs smoothly
 */
export const StickyHeader: React.FC<GlobalElementsProps> = ({
  currentTab,
  setTab,
  onBookConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Core navigation items specified by the user
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'SkillX Junior', id: 'junior' },
    { label: 'SkillX Pro', id: 'pro' },
    { label: 'CareerX', id: 'careerx' },
    { label: 'School Partnerships', id: 'partnerships' },
    { label: 'SkillX Impact', id: 'impact' },
    { label: 'Events', id: 'events' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-navbar border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO POSITION: Left */}
        <div className="cursor-pointer" onClick={() => setTab('home')}>
          <Logo showTagline={true} size={42} />
        </div>

        {/* MENU POSITION: Center (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                  active
                    ? 'text-blue-600 bg-blue-50/70 font-bold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA POSITION: Right */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onBookConsultation}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            Book Free Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full border-t border-slate-100 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 fixed top-20 left-0 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 px-3 rounded-lg text-sm font-semibold text-left transition-all ${
                    active
                      ? 'text-blue-600 bg-blue-50 font-extrabold'
                      : 'text-slate-600 hover:text-[#0A2540] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="border-t border-slate-100 pt-3 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/**
 * FloatingWhatsAppButton: Opens simulated WhatsApp Automation chat modal inside client
 */
export const FloatingWhatsAppButton: React.FC = () => {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { sender: 'bot', text: "👋 Hi there! Welcome to Natton SkillX. Ready to transform your future? Let us know what you'd like to explore:" },
    { sender: 'bot', options: ['Enroll in courses', 'Book a Career Quiz', 'School Partner proposal'] },
  ]);
  const [customMsg, setCustomMsg] = useState('');

  const triggerOption = (option: string) => {
    // Add user response
    setMessages((prev) => [...prev, { sender: 'user', text: option }]);

    setTimeout(() => {
      let replyText = '';
      if (option.includes('Enroll')) {
        replyText = "💡 Amazing choice! Both our SkillX Junior (school students) and SkillX Pro (professionals/educators) enrollments are currently offering 20% discount. Click the 'Programs' menu directly to checkout!";
      } else if (option.includes('Career')) {
        replyText = "🧠 Exceptional! Our AI-powered Career Diagnostic Quiz calculates your future readiness instantly. Navigate directly to the 'CareerX' tab to start for FREE!";
      } else {
        replyText = "🏫 Excellent! Our executive coordinators will draft custom CBSE/ICSE curriculum partnerships. Shoot us a message directly via the 'School Partnerships' tab or email 'partnerships@nattonskillx.com'!";
      }
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: replyText },
        { sender: 'bot', options: ['Back to options', 'Speak to Humans'] },
      ]);
    }, 1000);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: customMsg }]);
    const sent = customMsg;
    setCustomMsg('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `📩 Thank you for writing to us: "${sent}". A Career Counselor will contact you shortly on WhatsApp within 10 minutes!` },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Absolute Chat Window */}
      {openChat && (
        <div className="absolute bottom-16 right-0 w-80 max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-50 transition-all duration-300 transform scale-100 mb-2">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white relative">
                X
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-sans">Natton SkillX Support</h4>
                <p className="text-[10px] text-emerald-100">WhatsApp Automation • Active</p>
              </div>
            </div>
            <button onClick={() => setOpenChat(false)} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Area */}
          <div className="h-72 p-4 bg-[#ECE5DD] overflow-y-auto space-y-3 flex flex-col">
            {messages.map((m, idx) => (
              <div key={idx} className="space-y-2 max-w-[85%] self-start" style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {m.text && (
                  <div
                    className={`p-2.5 rounded-xl text-xs leading-relaxed shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-[#DCF8C6] text-slate-800 rounded-tr-none ml-auto'
                        : 'bg-white text-slate-800 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                )}
                {m.options && (
                  <div className="flex flex-col gap-1.5 self-start w-full">
                    {m.options.map((opt: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (opt === 'Back to options') {
                            setMessages((prev) => [
                              ...prev,
                              { sender: 'bot', text: 'Choose from options below:' },
                              { sender: 'bot', options: ['Enroll in courses', 'Book a Career Quiz', 'School Partner proposal'] },
                            ]);
                          } else {
                            triggerOption(opt);
                          }
                        }}
                        className="text-left py-1.5 px-3 bg-white hover:bg-emerald-50 text-[#075E54] font-semibold text-[11px] rounded-lg border border-emerald-100 shadow-sm transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSendCustom} className="p-3 border-t border-slate-100 flex gap-2 bg-white">
            <input
              type="text"
              placeholder="Type message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 min-w-0 border border-slate-200 rounded-lg py-1.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button type="submit" className="px-3 bg-[#075E54] text-white text-xs font-semibold rounded-lg flex items-center justify-center">
              Send
            </button>
          </form>
        </div>
      )}

      {/* Circle Floating Button */}
      <button
        onClick={() => setOpenChat(!openChat)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all cursor-pointer group active:scale-95"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
