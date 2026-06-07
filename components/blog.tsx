'use client';

import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowUpRight, Search, Sparkles } from 'lucide-react';

interface BlogNode {
  title: string;
  category: string;
  desc: string;
  date: string;
  author: string;
}

export const BlogEngine: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogCategories = ['All', 'AI and Education', 'Future of Work', 'Student Spotlights', 'School Innovation'];

  const blogPosts: BlogNode[] = [
    {
      title: 'Transforming CBSE Syllabus with Prompt Engineering',
      category: 'AI and Education',
      desc: 'Discover how NEP-aligned generative models can optimize school work schedules, lesson planner templates, and classroom testing.',
      date: 'June 5, 2026',
      author: 'Anusha Kumar',
    },
    {
      title: 'Navigating AI Disruption in Professional Marketing',
      category: 'Future of Work',
      desc: 'An in-depth handbook detailing how automated visual software, prompt variables, and content pipelines streamline copywriter tasks.',
      date: 'May 28, 2026',
      author: 'Rohan Deshmukh',
    },
    {
      title: 'How Grade 9 Amit Built Crop Classifier AI',
      category: 'Student Spotlights',
      desc: 'Deep dive into how Amit used block-to-Python loops to design is crop classifier, spotting leaf blights via mobile camera feeds.',
      date: 'May 15, 2026',
      author: 'Dr. Anand Raman',
    },
    {
      title: 'Why School Lab Networks Must Upgrade Relational Databases',
      category: 'School Innovation',
      desc: 'Exploring computer hardware setups, local model structures, and internet latency parameters essential inside modern schools.',
      date: 'April 20, 2026',
      author: 'Neha Sen',
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 pb-16 font-sans text-left">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0A2540] to-slate-900 text-white py-20 px-4 text-center rounded-3xl relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 p-8 text-cyan-400 bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00D4FF]/10 text-[#00D4FF]">
            <BookOpen className="w-3.5 h-3.5 animate-pulse" /> The SkillX Editorial & Handbook Reports
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl leading-tight">
            Latest Future-Skilling Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stay ahead of digital disruption. Read our verified curriculum logs, mentor guides, and student project showcases.
          </p>
        </div>
      </section>

      {/* FILTER & CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-5xl mx-auto">
          {/* Categories select tabs */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-slate-100 hover:bg-slate-50 text-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search field */}
          <div className="w-full md:w-64 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline text-[10px] uppercase font-mono font-bold text-slate-400">
                    <span className="text-blue-600 font-extrabold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-heading font-black text-slate-800 text-sm sm:text-base leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{post.desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[10px] text-slate-400">
                  <span>Author: <strong>{post.author}</strong></span>
                  <span className="text-blue-600 font-bold hover:underline flex items-center gap-0.5 cursor-pointer">
                    Read Report <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-slate-400 py-12 text-xs">
              No articles registered in this specific category search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogEngine;
