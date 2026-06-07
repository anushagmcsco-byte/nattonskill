'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, GraduationCap, Briefcase, School, Group, ChevronRight, Play, Heart, Star, Award, LucideIcon, BookOpenCheck, Compass, Layers, Cpu, TrendingUp, Target } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  setTab: (tab: string) => void;
  onEnroll: (courseName: string, price: number) => void;
  onBookConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setTab, onEnroll, onBookConsultation }) => {
  // Infographic 1: Interactive Learning Lifecycle stage state
  const [activeLifecycleStage, setActiveLifecycleStage] = useState(0);

  // Infographic 2: Future Skills Growth Simulator state
  const [simProfile, setSimProfile] = useState<'junior' | 'professional' | 'rural' | 'educator'>('junior');
  const [simAdvantage, setSimAdvantage] = useState<boolean>(true);

  // Counters State
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    professionals: 0,
    schools: 0,
    assessments: 0,
    ngo: 0,
  });

  const lifecycleStages = [
    {
      title: 'Phase 1: Diagnostic Assessment',
      shortTitle: 'Diagnostic',
      subtitle: 'Interests & Skills Diagnostic Mapping',
      desc: 'Scientific stream matching using parent-child consultation and cognitive aptitude evaluations, aligning learners with optimal future-skills pathways.',
      metrics: [
        { label: 'Diagnostic Success Rate', value: '98.5%' },
        { label: 'Stream-matching Precision', value: '96%' },
      ],
      highlights: [
        'Identifies logical aptitude and digital literacy',
        'Matches skills with optimal future job markets',
        'Parent-child dual alignment diagnostic grid',
      ],
      color: 'emerald',
      accentClass: 'bg-emerald-500 text-emerald-500 border-emerald-500',
      hoverBg: 'hover:bg-emerald-50/20',
    },
    {
      title: 'Phase 2: Curriculum Deep Dive',
      shortTitle: 'Curriculum',
      subtitle: 'NEP 2020 and NSDC Aligned Syllabus',
      desc: 'Structured, turn-key curriculum containing modules on Prompt Engineering, AI Chatbot Orchestration, Creative Branding, and Coding Principles.',
      metrics: [
        { label: 'Syllabus Coverage', value: '100% NEP' },
        { label: 'Interactive Labs', value: '45+ Modules' },
      ],
      highlights: [
        'Tailored modules for school Grades 6-12',
        'Advanced executive workflows for professionals',
        'Teacher enablement kits & action guides',
      ],
      color: 'blue',
      accentClass: 'bg-blue-600 text-blue-600 border-blue-600',
      hoverBg: 'hover:bg-blue-50/20',
    },
    {
      title: 'Phase 3: Prototype & Build Labs',
      shortTitle: 'Prototype',
      subtitle: 'Tangible Creative Engineering',
      desc: 'Learners apply logic to design physical IoT models, construct autonomous chat systems, orchestrate smart bots, or draft commercial branding assets.',
      metrics: [
        { label: 'Built Prototypes', value: '15,000+' },
        { label: 'Guided Hackathons', value: '12+ Yearly' },
      ],
      highlights: [
        'Hands-on sandbox labs with Gemini APIs',
        'Robotics kits, microcontrollers & IoT parts',
        'Startup-ready project incubator guidance',
      ],
      color: 'cyan',
      accentClass: 'bg-cyan-500 text-cyan-500 border-cyan-500',
      hoverBg: 'hover:bg-cyan-50/20',
    },
    {
      title: 'Phase 4: Collaborative Impact Hubs',
      shortTitle: 'Collaborate',
      subtitle: 'Inclusion, Parity, & Peer Networks',
      desc: 'Active skill-sharing circles connecting tier-1 school students, upskilling working executives, and rural participants via CSR community partnerships.',
      metrics: [
        { label: 'Rural Beneficiaries', value: '5,300+' },
        { label: 'District Labs Set Up', value: '18+' },
      ],
      highlights: [
        'Knowledge-sharing circles and active workshops',
        'Collabs with Raitamitra Social Trust in villages',
        'Dismantling socio-economic digital divides',
      ],
      color: 'violet',
      accentClass: 'bg-violet-600 text-violet-600 border-violet-600',
      hoverBg: 'hover:bg-violet-50/20',
    },
    {
      title: 'Phase 5: Evaluation & Certification',
      shortTitle: 'Certify',
      subtitle: 'Government & Partner Credentials',
      desc: 'Robust evaluations, capstone presentations, and certifications aligned with MSME, NSDC, and industry standards, unlocking internships and placements.',
      metrics: [
        { label: 'Certified Alumni', value: '30,000+' },
        { label: 'Active Internships', value: '820+' },
      ],
      highlights: [
        'Verified corporate and legal credentials',
        'Portfolio-enriching GitHub & web showcases',
        'Industry career mentoring & referral nets',
      ],
      color: 'indigo',
      accentClass: 'bg-indigo-600 text-indigo-600 border-indigo-600',
      hoverBg: 'hover:bg-indigo-50/20',
    },
  ];

  const simulatorData = {
    junior: {
      without_skillx: {
        marketReadiness: 15,
        pathway: 'Traditional IT Theory Route Only',
        desc: 'Elementary rote-memorization of office software and basics. Insufficient readiness for early computer logic or modern web structures.',
        skills: {
          ai: 8,
          logic: 22,
          robotics: 5,
          branding: 12,
        },
      },
      with_skillx: {
        marketReadiness: 85,
        pathway: 'NEP-Aligned Advanced AI Track',
        desc: 'Supercharged computing proficiency. Able to direct AI tools, create logical prototypes, write clean scripts, and assemble smart workflows.',
        skills: {
          ai: 92,
          logic: 84,
          robotics: 75,
          branding: 88,
        },
      },
    },
    professional: {
      without_skillx: {
        marketReadiness: 35,
        pathway: 'Siloed Conventional Role Profile',
        desc: 'Manual repetitive workflows. High susceptibility to generative workflow disruptions and stagnant income trajectory.',
        skills: {
          ai: 18,
          logic: 40,
          robotics: 10,
          branding: 30,
        },
      },
      with_skillx: {
        marketReadiness: 94,
        pathway: 'AI-Leveraged Technical Leader',
        desc: 'Fluent command of LLMs, automatic scrapers, visual generators, and custom agents. Multiplying productivity ten-fold.',
        skills: {
          ai: 98,
          logic: 90,
          robotics: 60,
          branding: 95,
        },
      },
    },
    rural: {
      without_skillx: {
        marketReadiness: 10,
        pathway: 'Manual Labor / Entry-Level Clerical',
        desc: 'Lack of tech access and career roadmaps. High geographic dependency on entry-level rural labor or low-skill vocations.',
        skills: {
          ai: 5,
          logic: 15,
          robotics: 2,
          branding: 8,
        },
      },
      with_skillx: {
        marketReadiness: 78,
        pathway: 'Digital Economy & Remote Career Enabled',
        desc: 'Equipped with practical internet tool fluency, fundamental computer coding skills, and basic logical automation, opening remote doors.',
        skills: {
          ai: 82,
          logic: 72,
          robotics: 68,
          branding: 70,
        },
      },
    },
    educator: {
      without_skillx: {
        marketReadiness: 25,
        pathway: 'Standard Chalkboard Pedagogy',
        desc: 'Familiar with standard textbook guidelines but lacks the concrete, hands-on future-skills curriculum context for mentoring prompt logic.',
        skills: {
          ai: 12,
          logic: 30,
          robotics: 8,
          branding: 15,
        },
      },
      with_skillx: {
        marketReadiness: 92,
        pathway: 'AI-Certified Innovative Facilitator',
        desc: 'Able to integrate smart prompts into quizzes, teach prompt engineering labs effortlessly, and manage active futuristic code classrooms.',
        skills: {
          ai: 95,
          logic: 88,
          robotics: 80,
          branding: 85,
        },
      },
    },
  };

  useEffect(() => {
    // Animate stats numerical value on mounting
    const duration = 1500; // ms
    const startTime = performance.now();

    const finalStats = {
      students: 25480,
      teachers: 1240,
      professionals: 8430,
      schools: 92,
      assessments: 16290,
      ngo: 5310,
    };

    let animationFrame: number;

    const updateStats = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quadratic
      const easeProgress = progress * (2 - progress);

      setStats({
        students: Math.floor(easeProgress * finalStats.students),
        teachers: Math.floor(easeProgress * finalStats.teachers),
        professionals: Math.floor(easeProgress * finalStats.professionals),
        schools: Math.floor(easeProgress * finalStats.schools),
        assessments: Math.floor(easeProgress * finalStats.assessments),
        ngo: Math.floor(easeProgress * finalStats.ngo),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateStats);
      }
    };

    animationFrame = requestAnimationFrame(updateStats);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Interactive Business Verticals roadmap state
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);

  const roadmapSteps = [
    {
      id: 'junior',
      title: 'SkillX Junior',
      subtitle: 'Schools and Kids K-12',
      badge: 'Grades 6-12',
      desc: 'Nurturing future AI champions early through logical thinking, prompt engineering, digital creativity, and robotics.',
      tab: 'junior',
      accentColor: 'bg-cyan-500',
    },
    {
      id: 'pro',
      title: 'SkillX Pro',
      subtitle: 'AI Skilling For Career Acceleration',
      badge: 'Professionals & Educators',
      desc: 'Mastering ChatGPT, automation tools, data analytics, and generative branding to secure career transformation.',
      tab: 'pro',
      accentColor: 'bg-blue-600',
    },
    {
      id: 'careerx',
      title: 'CareerX Diagnostic',
      subtitle: 'Pathways and Assessments',
      badge: 'AI Recommendations',
      desc: 'Scientific stream, college, and field matching utilizing smart diagnostics and parent-child consulting.',
      tab: 'careerx',
      accentColor: 'bg-indigo-600',
    },
    {
      id: 'partnerships',
      title: 'School Partnerships',
      subtitle: 'Syllabus Integration & Labs',
      badge: 'ICSE & CBSE AI Labs',
      desc: 'Turnkey future-skills training, syllabus modernization, teacher enablement hubs, and yearly action grids.',
      tab: 'partnerships',
      accentColor: 'bg-violet-600',
    },
    {
      id: 'impact',
      title: 'SkillX Impact',
      subtitle: 'Rural and Underprivileged Inclusion',
      badge: 'CSR & Communities',
      desc: 'Bringing technology, AI parity, and employment tools to villages in collab with Raitamitra Social Trust.',
      tab: 'impact',
      accentColor: 'bg-emerald-500',
    },
  ];

  // Video Testimonial State (simulates a playing modal)
  const [videoPlayUrl, setVideoPlayUrl] = useState<string | null>(null);

  const clientReviews = [
    {
      name: 'Pooja Hegde',
      role: 'Principal, Greenfield Academy',
      avatar: 'https://picsum.photos/seed/pooja/150/150',
      comment: 'Natton SkillX transformed our whole school syllabus! The Teacher AI training gave our faculty absolute confidence in tutoring coding and prompt engineering.',
      rating: 5,
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Data Engineer, Upskilled Professional',
      avatar: 'https://picsum.photos/seed/rohan/150/150',
      comment: 'SkillX Pro was the game-changer for my career. I mastered data analytics and AI workflows, leading to an immediate promotion inside my tech team.',
      rating: 5,
    },
    {
      name: 'Suhas Gowda',
      role: 'CSR Beneficiary, Mandya Rural Hub',
      avatar: 'https://picsum.photos/seed/suhas/150/150',
      comment: 'Through the SkillX Impact and Raitamitra trust, I learned essential coding tasks. It secured me an internship in Mysuru city which transformed my family.',
      rating: 5,
    },
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                Empowering the Next Gen AI Workforce
              </span>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.1] !important">
                Future Skills for{' '}
                <span className="text-gradient-neon">Students, Professionals</span>,{' '}
                <span className="text-blue-600">Educators & Communities</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Learn Practical AI. Build Powerful Future Skills. Map Career Pathways. Transform Your Life through Socially Impactful Tech Inclusion.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setTab('junior')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTab('careerx')}
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-bold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Free Career Session
                </button>
              </div>

              {/* Dynamic Key Pillars badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-100/80 max-w-md mx-auto lg:mx-0 text-center">
                <div className="p-2 space-y-1">
                  <p className="text-xs font-extrabold text-[#0A2540] uppercase">Future-Proof</p>
                  <p className="text-[10px] text-slate-400">CBSE/ICSE Aligned</p>
                </div>
                <div className="p-2 border-l border-r border-slate-100 space-y-1">
                  <p className="text-xs font-extrabold text-[#0A2540] uppercase">AI Powered</p>
                  <p className="text-[10px] text-slate-400">Gemini Grounding</p>
                </div>
                <div className="p-2 space-y-1">
                  <p className="text-xs font-extrabold text-blue-600 uppercase">Impact Driven</p>
                  <p className="text-[10px] text-slate-400">Rural Empowered</p>
                </div>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-5 relative">
              {/* Neon circles representing circuit nodes */}
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-300 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-200 rounded-full blur-3xl opacity-30" />

              {/* Interactive Vector Bento Dashboard Mock */}
              <div className="relative glass-card border border-white rounded-2xl p-6 shadow-2xl space-y-6 glow-cyan">
                {/* Dashboard Header decoration */}
                <div className="flex items-center justify-between border-b border-slate-150 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">natton_skillx_dashboard.ai</span>
                </div>

                {/* Main Dashboard graphic representations */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Student Card */}
                  <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between h-36 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="absolute top-0 right-0 p-6 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full" />
                    <GraduationCap className="w-7 h-7 text-cyan-300" />
                    <div>
                      <p className="font-mono text-[9px] text-cyan-300 uppercase tracking-widest">K-12 Skills</p>
                      <h4 className="font-heading font-extrabold text-sm mt-0.5">SkillX Junior</h4>
                    </div>
                  </div>

                  {/* Professional Card */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between h-36 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <Briefcase className="w-7 h-7 text-blue-600" />
                      <span className="bg-blue-100 text-blue-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded">NEW</span>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] text-blue-600 uppercase tracking-widest font-semibold">Career Acceleration</p>
                      <h4 className="font-heading font-extrabold text-sm text-[#0A2540] mt-0.5">SkillX Pro</h4>
                    </div>
                  </div>
                </div>

                {/* Bottom Graphic element: Live Assessment Stream */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                      AI
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-xs text-slate-800 font-heading">AI Career Assessment</p>
                      <p className="text-[10px] text-slate-500">Generate 3-Month Action Grid</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setTab('careerx')}
                    className="p-1 px-3 py-1 text-[10px] font-extrabold bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center gap-1 transition-all cursor-pointer"
                  >
                    Launch <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Static illustration caption matching requested user illustration prompt */}
                <div className="text-center">
                  <p className="text-[11px] text-slate-400 leading-snug font-sans italic">
                    &quot;AI learning hubs connecting students, schools, communities &amp; CSR impact partners.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT COUNTER SECTION (infographic counters) */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Futuristic circuit grid backdrop (decorative) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00D4FF_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#00D4FF] uppercase">Our Legacy In Numbers</span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl">National Footprint & Societal Impact</h2>
            <div className="h-1 w-20 bg-[#00D4FF] mx-auto rounded" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { id: 'students', label: 'Students Trained', val: stats.students, suffix: '+' },
              { id: 'teachers', label: 'Teachers Empowered', val: stats.teachers, suffix: '+' },
              { id: 'professionals', label: 'Professionals Upskilled', val: stats.professionals, suffix: '+' },
              { id: 'schools', label: 'Schools Partnered', val: stats.schools, suffix: '' },
              { id: 'assessments', label: 'Career Assessments', val: stats.assessments, suffix: '+' },
              { id: 'ngo', label: 'NGO Beneficiaries', val: stats.ngo, suffix: '+' },
            ].map((metric) => (
              <div
                key={metric.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-center items-center select-none"
              >
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#00D4FF]">
                  {metric.val.toLocaleString('en-IN')}
                  {metric.suffix}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-semibold tracking-wide text-center mt-2">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP (4 cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Target Ecosystem</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Who We Empower</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Supporting learners and institutions across all strata to master future skills and conquer the job marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Students',
              desc: 'Equipping kids and graduates with AI tools, logical coding basics, and career assessments to discover their passion early.',
              icon: GraduationCap,
              tab: 'junior',
              actionText: 'Build K-12 Skills',
              color: 'border-cyan-500',
              bg: 'bg-cyan-50/50',
            },
            {
              title: 'Professionals',
              desc: 'Upskilling executives, marketers, and developers on commercial and generative AI models to scale salary potential.',
              icon: Briefcase,
              tab: 'pro',
              actionText: 'Advance Careers',
              color: 'border-blue-500',
              bg: 'bg-blue-50/50',
            },
            {
              title: 'Schools',
              desc: 'Seamless ICSE/CBSE integrated courses, syllabus transformation, teacher training programs, and local computer labs.',
              icon: School,
              tab: 'partnerships',
              actionText: 'Modernize Syllabus',
              color: 'border-violet-500',
              bg: 'bg-violet-50/50',
            },
            {
              title: 'NGOs & Communities',
              desc: 'Bridging digital disparities through completely free AI literacy and workshops in rural schools and districts.',
              icon: Group,
              tab: 'impact',
              actionText: 'See Social Impact',
              color: 'border-emerald-500',
              bg: 'bg-emerald-50/30',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between p-6 bg-white border-l-4 rounded-r-2xl shadow-md border-t border-b border-r border-slate-100 hover:shadow-lg transition-shadow duration-300 ${card.color}`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bg}`}>
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-slate-800">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
                <button
                  onClick={() => setTab(card.tab)}
                  className="mt-6 text-xs font-bold text-blue-600 flex items-center gap-1.5 hover:text-blue-800 transition-colors cursor-pointer justify-start"
                >
                  {card.actionText} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* INFOGRAPHIC 1: INTERACTIVE TECH-LEARNING LIFECYCLE LOOP */}
      <section className="bg-white py-20 border-y border-slate-100 relative overflow-hidden">
        {/* Subtle mesh background vectors */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 text-left">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#0066FF] uppercase font-sans">
              Dynamic Learning Ecosystem
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-800">
              Interactive Learning Lifecycle
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Click individual steps below to monitor how our digital transformation roadmap guides learners from basic curiosity to certified AI competence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Nav Timeline Panel */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-3 md:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-1 gap-3 w-full">
                {lifecycleStages.map((stage, idx) => {
                  const isActive = activeLifecycleStage === idx;
                  const IconComponent = [Compass, Layers, Cpu, Group, Award][idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveLifecycleStage(idx)}
                      className={`w-full text-left p-4 rounded-2xl border flex items-center gap-4 transition-all duration-300 relative overflow-hidden cursor-pointer ${
                        isActive
                          ? 'border-blue-500 bg-[#F8FAFC] shadow-md shadow-blue-500/5'
                          : 'border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      {/* Left glowing border on active selection */}
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                      )}
                      
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-500 hover:bg-white'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                            Step 0{idx + 1}
                          </span>
                          {isActive && (
                            <span className="flex h-2 w-2 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                          )}
                        </div>
                        <h4 className="font-heading font-black text-[14px] text-slate-800 tracking-tight leading-snug">
                          {stage.shortTitle}
                        </h4>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform hidden xl:block ${isActive ? 'text-blue-600 translate-x-1' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Detailed Infographic Stage Card */}
            <div className="lg:col-span-12 xl:col-span-7 md:col-span-7">
              <motion.div
                key={activeLifecycleStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden text-left"
              >
                {/* Visual background vector circle */}
                <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full border-12 border-blue-500/5 pointer-events-none" />

                <div className="space-y-6">
                  {/* Phase header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-150 pb-5">
                    <div className="text-left space-y-1">
                      <span className="text-[10px] font-extrabold tracking-widest text-blue-600 uppercase font-mono bg-blue-50 px-2.5 py-1 rounded-full">
                        Curriculum Process
                      </span>
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-800">
                        {lifecycleStages[activeLifecycleStage].title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-sans italic">
                        {lifecycleStages[activeLifecycleStage].subtitle}
                      </p>
                    </div>

                    {/* Fun miniature live chart node visual representation */}
                    <div className="flex items-center gap-2 bg-[#F8FAFC] border border-slate-100 p-2.5 rounded-xl self-start sm:self-center">
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        {/* Circle path animating around inside */}
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <rect cx="1" cy="1" width="10" height="10" className="opacity-0" />
                          <path
                            className="text-slate-150"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <motion.path
                            className="text-blue-605 text-blue-600"
                            strokeWidth="3.5"
                            strokeDasharray={`${(activeLifecycleStage + 1) * 20}, 100`}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute font-mono text-[10px] font-bold text-blue-605 text-blue-600">
                          {Math.floor((activeLifecycleStage + 1) * 20)}%
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase leading-none">Process Level</p>
                        <p className="text-[11px] font-heading font-bold text-slate-700 mt-1">Validated Flow</p>
                      </div>
                    </div>
                  </div>

                  {/* Core Content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                    <div className="md:col-span-7 space-y-4 text-left">
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {lifecycleStages[activeLifecycleStage].desc}
                      </p>

                      <div className="space-y-2">
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-left">
                          Key Benchmarks
                        </p>
                        <div className="space-y-1.5 text-left">
                          {lifecycleStages[activeLifecycleStage].highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 justify-start">
                              <span className="text-blue-500 font-bold self-start select-none">✓</span>
                              <span className="leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 space-y-4">
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-left">
                        Performance Metrics
                      </p>
                      
                      <div className="grid grid-cols-1 gap-2.5">
                        {lifecycleStages[activeLifecycleStage].metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-left hover:bg-slate-100/50 transition-all duration-300">
                            <h5 className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider leading-none">
                              {metric.label}
                            </h5>
                            <p className="text-lg font-heading font-black text-[#0A2540] mt-1.5 leading-none">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Certification seal visual decoration */}
                      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-center gap-2 text-emerald-700">
                        <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-[9px] font-bold font-sans tracking-tight uppercase">
                          Aligned with NEP-2020 Framework
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-150 pt-5 mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="flex gap-2 text-[10px] text-slate-400 font-mono">
                    <span>Ecosystem Tracker</span>
                    <span>•</span>
                    <span className="text-blue-600 font-semibold uppercase">Natton-Validated</span>
                  </div>
                  <button
                    onClick={() => setActiveLifecycleStage((prev) => (prev + 1) % lifecycleStages.length)}
                    className="px-4 py-2 hover:bg-slate-50 text-slate-700 bg-white border border-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer self-stretch sm:self-auto justify-center"
                  >
                    <span>Next Lifecycle Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VERTICALS (interactive infographic roadmap) */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#0066FF] uppercase font-sans">Business Roadmaps</span>
            <h2 className="font-heading font-black text-3xl text-slate-800">Our Strategic Divisions</h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Select any of our primary verticals to explore detailed roadmaps and capabilities designed for different demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left Roadmap selector: standard vertical roadmap layout */}
            <div className="lg:col-span-5 space-y-3">
              {roadmapSteps.map((step, idx) => {
                const isActive = activeRoadmapIndex === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveRoadmapIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all cursor-pointer ${
                      isActive
                        ? 'border-blue-600 bg-white shadow-md'
                        : 'border-slate-200/60 bg-transparent hover:bg-white/40'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xs ${
                        isActive ? step.accentColor : 'bg-slate-300'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[13px] leading-tight text-[#0A2540]">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{step.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Card detail container */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-md h-full min-h-[320px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 text-[10px] font-extrabold rounded-full text-white ${roadmapSteps[activeRoadmapIndex].accentColor}`}>
                    {roadmapSteps[activeRoadmapIndex].badge}
                  </span>
                  <BookOpenCheck className="w-5 h-5 text-blue-600" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0A2540]">
                    {roadmapSteps[activeRoadmapIndex].title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {roadmapSteps[activeRoadmapIndex].desc}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6 flex justify-between items-center">
                <span className="text-xs text-slate-400">Path: Home &gt; {roadmapSteps[activeRoadmapIndex].title}</span>
                <button
                  onClick={() => setTab(roadmapSteps[activeRoadmapIndex].tab)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Explore Division <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFOGRAPHIC 2: FUTURE SKILLS GROWTH & READINESS SIMULATOR */}
      <section className="bg-[#0A2540] text-white py-20 relative overflow-hidden">
        {/* Subtle glowing orbs representing future technologies */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-600/15 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-left">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#00D4FF] uppercase font-sans">
              Market Acceleration Simulator
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
              Future-Skilling Pathway Index
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Use this simulation control panel to verify how traditional curriculums compare against Natton SkillX curriculum upgrades across standard cohorts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Left Control Column */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-4 uppercase">
                <p className="text-[10px] font-extrabold text-[#00D4FF] tracking-widest font-mono">
                  1. Select Demography Profile
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'junior', label: 'School Kids' },
                    { id: 'professional', label: 'Executives' },
                    { id: 'rural', label: 'Rural Youth' },
                    { id: 'educator', label: 'School Teacher' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSimProfile(p.id as any)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        simProfile === p.id
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                          : 'border-white/10 bg-transparent hover:bg-white/5 text-slate-300'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-5">
                <p className="text-[10px] font-extrabold text-[#00D4FF] tracking-widest uppercase font-mono">
                  2. Choose Training Track
                </p>
                <div className="flex bg-slate-900 border border-white/15 p-1 rounded-xl">
                  <button
                    onClick={() => setSimAdvantage(false)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                      !simAdvantage
                        ? 'bg-rose-600/30 text-rose-300 border border-rose-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Old Syllabus
                  </button>
                  <button
                    onClick={() => setSimAdvantage(true)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                      simAdvantage
                        ? 'bg-blue-600 text-white border border-blue-500/30 shadow-lg'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    SkillX Advantage
                  </button>
                </div>
              </div>

              {/* Dynamic Summary Card */}
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 space-y-2 text-left">
                <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-wider font-mono">
                  Expected Outlook Pathway
                </p>
                <h4 className="font-heading font-black text-[14px] text-white">
                  {simulatorData[simProfile][simAdvantage ? 'with_skillx' : 'without_skillx'].pathway}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans mt-1">
                  {simulatorData[simProfile][simAdvantage ? 'with_skillx' : 'without_skillx'].desc}
                </p>
              </div>
            </div>

            {/* Right Interactive Presentation Panels (Bento Infographic) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
              
              {/* Dynamic Readiness Quotient Dial (Col-span-5) */}
              <div className="md:col-span-5 flex flex-col justify-between items-center p-4 bg-slate-950/40 rounded-2xl border border-white/5 text-center min-h-[220px]">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-[#00D4FF] tracking-widest uppercase">
                    Readiness Score
                  </span>
                  <h4 className="font-heading font-extrabold text-xs text-slate-300">
                    Market Employability
                  </h4>
                </div>

                {/* Animated Radial SVG Circle dial */}
                <div className="relative w-36 h-36 flex items-center justify-center py-2">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <rect cx="1" cy="1" width="10" height="10" className="opacity-0" />
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-white/5"
                      strokeWidth="7"
                      stroke="currentColor"
                      fill="none"
                    />
                    {/* Animated foreground value path */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      className={`${simAdvantage ? 'text-[#00D4FF]' : 'text-rose-500'}`}
                      strokeWidth="7"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{
                        strokeDashoffset: 251.2 - (251.2 * simulatorData[simProfile][simAdvantage ? 'with_skillx' : 'without_skillx'].marketReadiness) / 100,
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      key={`${simProfile}-${simAdvantage}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-mono font-black text-white"
                    >
                      {simulatorData[simProfile][simAdvantage ? 'with_skillx' : 'without_skillx'].marketReadiness}%
                    </motion.span>
                    <span className="text-[8px] uppercase tracking-widest font-mono text-slate-400">
                      Score Card
                    </span>
                  </div>
                </div>

                <div className={`p-1.5 px-3 rounded-full text-[9px] font-bold ${simAdvantage ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 active-state' : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'}`}>
                  {simAdvantage ? '● Future Competence' : '● Stagnant Level'}
                </div>
              </div>

              {/* Dynamic Skills Parameter Bars (Col-span-7) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-1 pb-1">
                  <h4 className="font-heading font-black text-sm text-white text-left leading-none">
                    Core Skilling Indicators
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed text-left font-sans mt-2">
                    Quantified benchmarking based on MSME/NSDC assessment parameters.
                  </p>
                </div>

                <div className="space-y-4 flex-grow flex flex-col justify-around">
                  {[
                    { key: 'ai', name: 'GenAI & Prompting Literacy', color: simAdvantage ? 'bg-gradient-to-r from-blue-500 to-[#00D4FF]' : 'bg-rose-500' },
                    { key: 'logic', name: 'Logic Engineering & Python', color: simAdvantage ? 'bg-gradient-to-r from-teal-500 to-cyan-400' : 'bg-rose-500' },
                    { key: 'robotics', name: 'Applied Robotics & IoT Lab', color: simAdvantage ? 'bg-gradient-to-r from-violet-500 to-indigo-400' : 'bg-rose-500' },
                    { key: 'branding', name: 'UI/UX & Creator Branding', color: simAdvantage ? 'bg-gradient-to-r from-purple-500 to-pink-400' : 'bg-rose-500' },
                  ].map((skill) => {
                    const skillValue = simulatorData[simProfile][simAdvantage ? 'with_skillx' : 'without_skillx'].skills[skill.key as 'ai' | 'logic' | 'robotics' | 'branding'];
                    return (
                      <div key={skill.key} className="space-y-1">
                        <div className="flex justify-between items-center text-[10px] text-slate-300 font-bold">
                          <span>{skill.name}</span>
                          <span className="font-mono">{skillValue}%</span>
                        </div>
                        <div className="h-2 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skillValue}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className={`h-full ${skill.color}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] text-slate-400 font-mono">
                  <span>Target Competence Level: 75%+</span>
                  <span className="text-[#00D4FF]">Grounded Engine v2026</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
 
      {/* SUCCESS STORIES (carousel / reviews) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">Impact Chronicles</span>
          <h2 className="font-heading font-black text-3xl text-slate-800">Success Stories From the Field</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Witness how we are equipping thousands of diverse beneficiaries with state-of-the-art capability sets.
          </p>
        </div>

        {/* Video Testimonials Showcase inside website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Static premium graphic playing mockup for "video testimonial" trigger */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-950 group">
            {videoPlayUrl === null ? (
              <>
                <img
                  src="https://picsum.photos/seed/k12ai/800/450"
                  alt="Rural Students AI Workshop"
                  className="w-full h-full object-cover opacity-60 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                  <button
                    onClick={() => setVideoPlayUrl('https://example.com/demo.mp4')}
                    className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00D4FF] hover:scale-110 active:scale-95 transition-all shadow-lg shadow-blue-500/25"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>
                  <div className="space-y-1">
                    <h4 className="font-heading font-extrabold text-sm sm:text-base">Rural AI Literacy Drive & Student Outcomes</h4>
                    <p className="text-[10px] text-slate-300">Mandya, Karnataka • 4 mins video duration</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                <span className="text-xs font-mono bg-blue-600/30 text-cyan-300 border border-blue-500/20 px-2 py-0.5 rounded">Simulating Video Testimonial...</span>
                <p className="text-xs text-slate-300 max-w-xs leading-relaxed font-sans">
                  &quot;Presenting a documentary of over 100 high-school students mastering Chatbot orchestration to simplify crop and soil evaluations in villages.&quot;
                </p>
                <button
                  onClick={() => setVideoPlayUrl(null)}
                  className="px-4 py-1.5 bg-white text-slate-800 rounded font-semibold text-xs hover:bg-slate-100 transition-colors"
                >
                  Close Video Preview
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {clientReviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-slate-100 hover:border-slate-200 rounded-xl p-5 shadow-sm space-y-3 hover:translate-x-1 transition-transform">
                <div className="flex gap-1.5 text-yellow-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic font-sans leading-relaxed">
                  &quot;{rev.comment}&quot;
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <img src={rev.avatar} className="w-8 h-8 rounded-full border border-slate-200" alt={rev.name} referrerPolicy="no-referrer" />
                  <div className="text-left leading-none">
                    <h5 className="font-heading font-extrabold text-[#0A2540] text-xs">{rev.name}</h5>
                    <span className="text-[10px] text-slate-400">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS & COLLABORATORS */}
      <section className="bg-slate-50 border-t border-b border-slate-100/80 py-16 text-center space-y-8 select-none">
        <h3 className="font-heading font-extrabold text-sm uppercase text-slate-400 tracking-widest">
          Trusted Partners & Collaborators
        </h3>
        <div className="max-w-5xl mx-auto px-4 overflow-hidden relative">
          <div className="flex gap-8 items-center justify-around flex-wrap grayscale contrast-125 opacity-60">
            {[
              { name: 'Raitamitra Social Trust', logo: '🌾' },
              { name: 'FutureWorks India', logo: '🛠️' },
              { name: 'Intellect Labs', logo: '🧪' },
              { name: 'Skill India Alliance', logo: '🇮🇳' },
              { name: 'EduCore CBSE Services', logo: '🏫' },
            ].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 font-heading font-black text-slate-700 tracking-tight py-2">
                <span className="text-lg">{partner.logo}</span>
                <span className="text-sm font-sans">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITIONS & CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
        <h3 className="font-heading font-extrabold text-sm uppercase text-slate-400 tracking-widest">
          Recognitions & Certifications
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { tag: 'MSME Registered', detail: 'Ministry of MSME, Govt of India', bg: 'bg-orange-50 text-orange-600', icon: Award },
            { tag: 'NSDC Curriculum', detail: 'Skill India Aligned Courses', bg: 'bg-blue-50 text-blue-600', icon: Award },
            { tag: 'CBSE / ICSE Ready', detail: 'School Curriculum Syllabus Aligned', bg: 'bg-cyan-50 text-cyan-600', icon: Award },
            { tag: 'Trust Partnered', detail: 'Authorized Rural Impact Center', bg: 'bg-emerald-50 text-emerald-600', icon: Award },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center space-y-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-slate-800">{item.tag}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="bg-gradient-to-r from-[#0A2540] to-blue-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-12 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 bg-[#00D4FF]/10 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading font-black text-3xl sm:text-4xl leading-tight">
            Build a Future-Ready Tomorrow with Natton SkillX
          </h2>
          <p className="text-sm text-slate-300 font-sans max-w-lg mx-auto">
            Book a consultation for your school, register for K-12 AI training, or upscale your business skills. Discover how technology turns into opportunity.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => setTab('contact')}
              className="px-6 py-3.5 border border-slate-600 hover:border-slate-500 rounded-xl font-bold text-xs hover:bg-white/5 transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
