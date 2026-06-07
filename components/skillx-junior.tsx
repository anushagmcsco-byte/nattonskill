'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpenCheck, Play, Award, CheckCircle, Smartphone, Rocket, CalendarDays, HelpCircle, Code } from 'lucide-react';

interface CourseNode {
  title: string;
  description: string;
  duration: string;
  price: number;
  grade: string;
  curriculum: string[];
}

interface SkillXJuniorProps {
  onEnroll: (courseName: string, price: number) => void;
  onBookConsultation: () => void;
}

export const SkillXJunior: React.FC<SkillXJuniorProps> = ({ onEnroll, onBookConsultation }) => {
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadField, setLeadField] = useState({ name: '', email: '', school: '', phone: '', grade: '8' });

  // Specified courses list
  const juniorCourses: CourseNode[] = [
    {
      title: 'AI Foundations',
      description: 'An interactive handbook introducing the building blocks of Artificial Intelligence, neural nets, and AI ethics.',
      duration: '4 Weeks',
      price: 2499,
      grade: 'Class 6-9',
      curriculum: ['What is AI & Machine Learning?', 'Neural Networks Demystified', 'Generative AI vs Discriminative AI', 'Responsible AI & Ethics'],
    },
    {
      title: 'Prompt Engineering for Students',
      description: 'Unlocking model-interaction tools. Learn how to write structured cues to draft homework answers, study structures, and summarize articles.',
      duration: '4 Weeks',
      price: 1999,
      grade: 'Class 6-12',
      curriculum: ['Prompting Essentials (Cues & Roleplay)', 'Context Windows & System Instructions', 'AI as an Interactive Personal Tutor', 'Creative Storyboarding with ChatGPT'],
    },
    {
      title: 'Digital Creativity',
      description: 'Transforming texts into masterpieces. Command high-resolution generative image tools responsibly to model graphic assets.',
      duration: '6 Weeks',
      price: 3499,
      grade: 'Class 7-12',
      curriculum: ['AI Image Crafting (Midjourney/DallE theory)', 'Text-to-Art prompt logic', 'AI Speech & Video synth techniques', 'Designing digital presentations with AI'],
    },
    {
      title: 'Coding Fundamentals',
      description: 'The roots of computer architecture. Construct interactive coding tasks using block-based visuals and primitive Python rules.',
      duration: '8 Weeks',
      price: 4999,
      grade: 'Class 6-10',
      curriculum: ['Logical reasoning & sequence loops', 'Scratch/Block coding models', 'Python variables, arrays, and tuples', 'Build your first Text Adventure Game'],
    },
    {
      title: 'Public Speaking',
      description: 'Harness presentation leadership, voice control, and posture diagnostics to deliver magnificent, persuasive school pitches.',
      duration: '6 Weeks',
      price: 2999,
      grade: 'Class 8-12',
      curriculum: ['Debating structure and pitch rules', 'Overcoming stage-fright strategies', 'Syllabus presentation layouts', 'TEDx-style storytelling techniques'],
    },
    {
      title: 'Entrepreneurship',
      description: 'Bring designs to reality. Synthesize customer archetypes, draft dynamic budget charts, and present business templates to school mentors.',
      duration: '8 Weeks',
      price: 3999,
      grade: 'Class 9-12',
      curriculum: ['Design Thinking & Problem Ideation', 'Building a Lean Canvas proposal', 'Mock funding pitch & unit economics', 'Launching local student startups'],
    },
  ];

  // Selected course details state
  const [viewingCurriculumIndex, setViewingCurriculumIndex] = useState<number | null>(null);

  // Student Projects
  const showcaseProjects = [
    { title: 'Crop Health Classifier AI', student: 'Amit R. (Class 9)', tags: ['AI Foundations', 'Python'], desc: 'Amit coded a lightweight visual analyzer that identifies tomato leaf blight using mobile pictures.' },
    { title: 'Interactive Homework Buddy GPT', student: 'Priya K. (Class 7)', tags: ['Prompt Eng', 'NoCode'], desc: 'Priya calibrated a customized GTP bot designed specifically to teach geometric theorem proofs step-by-step.' },
    { title: 'Eco-Story Generative Reel', student: 'Sahil S. (Class 10)', tags: ['Digital Creativity'], desc: 'Sahil formulated a 2-minute stylized animated movie with complete narration using AI-generated story sketches.' },
  ];

  // Faq collapsible
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { q: "Is prior coding experience necessary for SkillX Junior?", a: "Absolutely not! Every educational milestone inside SkillX Junior begins with logical reasoning, design thinking, and simple drag-and-drop visuals before phasing into actual text coding." },
    { q: "Are courses aligned with CBSE/ICSE directives?", a: "Yes. Our computer science and future skills coursework is carefully tailored to support curriculum expansions proposed by National Education Policy (NEP) and core Indian school boards." },
    { q: "Do students get recognized certificates?", a: "Yes. Every learner receives a Microsoft-aligned and NSDC curriculum physical or digitizable certificate of completion upon graduating their selected division." },
  ];

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadField.name,
          email: leadField.email,
          phone: leadField.phone,
          organization: leadField.school,
          role: `Student / Grade ${leadField.grade}`,
          interestType: 'junior',
          message: `Interested in SkillX Junior programs. Currently in grade ${leadField.grade}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setLeadSubmitted(true);
      }
    } catch (e) {
      console.error(e);
      // Fallback
      setLeadSubmitted(true);
    }
  };

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-slate-900 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <Rocket className="w-3.5 h-3.5" /> Empowering the Next Gen K-12 Innovators
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Future Skills Programs for School Students
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Nurturing Artificial Intelligence literacy, structured thinking, professional public speaking, and entrepreneurship early in life.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 bg-[#00D4FF] hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
            >
              School Demo Booking
            </button>
            <a href="#leads" className="px-6 py-3 border border-slate-600 hover:border-slate-500 rounded-xl font-bold text-xs transition-all flex items-center justify-center">
              Request Brochure
            </a>
          </div>
        </div>
      </section>

      {/* COURSE GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase font-sans">Skills Curriculum</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Explore Our Courses</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Choose a focused training vector. Access expert-led micro-tuitions and lifetime logical handbook contents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {juniorCourses.map((course, idx) => {
            const isViewing = viewingCurriculumIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-lg h-full relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Subject badge headers */}
                  <div className="flex justify-between items-center bg-slate-50 border border-slate-100 p-2.5 rounded-xl font-sans text-xs">
                    <span className="font-bold text-[#0A2540]">{course.grade}</span>
                    <span className="text-blue-600 font-bold font-mono">{course.duration}</span>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-[#0066FF]" />
                      <h3 className="font-heading font-extrabold text-[#0A2540] text-lg leading-tight">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans min-h-[50px]">
                      {course.description}
                    </p>
                  </div>

                  {/* Syllabus / Study milestones toggles */}
                  {isViewing && (
                    <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-left">
                      <p className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">Course Modules</p>
                      <ul className="text-xs space-y-1.5 text-slate-600 font-sans">
                        {course.curriculum.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100/80 pt-4 mt-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-mono uppercase font-bold">One-Time Fee</span>
                      <span className="font-mono font-extrabold text-xl text-blue-600">₹{course.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">GST spec.</span>
                    </div>
                    <button
                      onClick={() => setViewingCurriculumIndex(isViewing ? null : idx)}
                      className="text-xs font-bold text-slate-500 hover:text-blue-650 flex transition-colors cursor-pointer"
                    >
                      {isViewing ? 'Hide Syllabus' : 'View Syllabus Layout'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onEnroll(course.title, course.price)}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg text-center cursor-pointer shadow-sm hover:shadow transition-all"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => setViewingCurriculumIndex(isViewing ? null : idx)}
                      className="w-full py-2 bg-slate-50 hover:bg-slate-105 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg text-center cursor-pointer border border-slate-150 transition-all"
                    >
                      Syllabus Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STUDENT PROJECTS & PORTFOLIO EXPOSURE */}
      <section className="bg-slate-50 py-16 border-t border-b border-zinc-150/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest leading-none">Innovations Spot</span>
            <h2 className="font-heading font-black text-3xl text-slate-800">Spotlight: Student Projects</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We don&apos;t just teach; we help students build tangible prototypes. Meet some of our young innovators!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {showcaseProjects.map((p, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative space-y-4 text-left">
                <div className="flex gap-2">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-bold uppercase">{tag}</span>
                  ))}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-heading font-extrabold text-[#0A2540] text-sm sm:text-base">{p.title}</h4>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase font-mono">By {p.student}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed leading-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SHOWCASE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center select-none font-sans">
        <div className="space-y-3">
          <span className="text-xs font-extrabold text-[#0066FF] uppercase tracking-widest block leading-none">Skill Credentials</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Recognized Certification Format</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Each graduate from SkillX Junior receives a dynamic, verifiably-registered cryptographic student credential that looks professional.
          </p>
        </div>

        {/* Certificate Card rendering graphic representation */}
        <div className="border-[12px] border-slate-900 bg-amber-50/50 rounded-xl p-8 max-w-xl mx-auto shadow-2xl relative text-left space-y-6">
          <div className="absolute top-0 right-0 p-8 text-slate-900/5 text-8xl font-serif select-none pointer-events-none">
            X
          </div>
          <div className="flex justify-between items-start border-b border-slate-200 pb-4">
            <div>
              <h5 className="font-heading font-black text-xs text-[#0A2540]">NATTON SkillX</h5>
              <p className="text-[9px] text-slate-400">Future-Proof Skill Academy Certificate</p>
            </div>
            <Award className="w-10 h-10 text-yellow-600" />
          </div>

          <div className="text-center space-y-2.5 my-4">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest font-mono">Certificate Of Completion</p>
            <p className="text-slate-500 text-xs italic font-serif">this is verify that junior scholar</p>
            <h4 className="font-heading font-black text-sky-950 text-xl tracking-tight">Kiran Gowda, Grade 9</h4>
            <p className="text-slate-500 text-xs font-sans px-8 leading-relaxed leading-snug">
              has successfully accomplished all micro-assessments, logical workshops, and final presentation benchmarks for
            </p>
            <p className="font-heading font-extrabold text-blue-600 text-sm italic">&quot;Prompt Engineering &amp; Art Creation for Kids&quot;</p>
          </div>

          <div className="flex justify-between items-end border-t border-slate-200 pt-4 text-[10px] text-slate-500 font-mono">
            <div>
              <p className="font-bold font-sans">Anusha Kumar</p>
              <p className="text-[8px] text-slate-400">Academic Dean, Natton SkillX</p>
            </div>
            <div className="text-end">
              <p>ID: NTN-ED-9482</p>
              <p>Registered: NSDC / Govt Hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left font-sans">
        <h3 className="font-heading font-black text-2xl text-[#0A2540] text-center mb-6">Frequently Asked Questions</h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden transition-shadow">
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm text-[#0A2540] hover:text-blue-600 transition-colors flex justify-between items-center cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    {faq.q}
                  </span>
                  <span className="text-xs text-slate-400">{isOpen ? '▼' : '►'}</span>
                </button>
                {isOpen && (
                  <div className="p-4 pt-1 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* LEAD CAPTURE FORM (id: leads) */}
      <section id="leads" className="max-w-lg mx-auto bg-white border border-slate-100 p-8 rounded-2xl shadow-xl space-y-6 text-left">
        <div className="text-center space-y-2">
          <h3 className="font-heading font-black text-xl text-[#0A2540]">Request Class Brochure / Trial</h3>
          <p className="text-xs text-slate-400">Drop your school or grade details. Our coordinate counselors will email or call you within 12 hours.</p>
        </div>

        {leadSubmitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-2 text-emerald-850">
            <p className="font-extrabold text-sm font-sans">📩 Brochure Request Synced!</p>
            <p className="text-xs text-slate-500">We emailed the SkillX K-12 Syllabus curriculum directly to your inbox. Speak soon!</p>
          </div>
        ) : (
          <form onSubmit={handleLeadSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Parent or Student Name</label>
              <input
                required
                type="text"
                placeholder="Rahul Kumar"
                value={leadField.name}
                onChange={(e) => setLeadField({ ...leadField, name: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Identifier</label>
                <input
                  required
                  type="email"
                  placeholder="rahul@domain.com"
                  value={leadField.email}
                  onChange={(e) => setLeadField({ ...leadField, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  placeholder="9876543210"
                  value={leadField.phone}
                  onChange={(e) => setLeadField({ ...leadField, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">School Affiliation</label>
                <input
                  required
                  type="text"
                  placeholder="Delhi Public School"
                  value={leadField.school}
                  onChange={(e) => setLeadField({ ...leadField, school: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Current Class / Grade</label>
                <select
                  value={leadField.grade}
                  onChange={(e) => setLeadField({ ...leadField, grade: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 bg-white rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-transform cursor-pointer"
            >
              Get Free Assessment & Syllabus Brocure
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default SkillXJunior;
