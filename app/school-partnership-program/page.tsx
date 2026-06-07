'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyHeader, FloatingWhatsAppButton } from '../../components/global-elements';
import { SchoolPartnerships } from '../../components/school-partnerships';
import { Logo } from '../../components/logo';

export default function SchoolPartnershipProgramPage() {
  const [partnerLog, setPartnerLog] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#F8FAFC]">
      <AnnouncementBar />
      <StickyHeader currentTab="" setTab={(t) => window.location.href = `/?tab=${t}`} onBookConsultation={() => {}} />

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16 pb-16">
        <SchoolPartnerships onBookConsultation={() => {
          const formSec = document.getElementById('quiz-anchor');
          if (formSec) {
            formSec.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#0A2540] text-slate-350 py-12 px-4 border-t border-slate-850 text-left text-xs">
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
