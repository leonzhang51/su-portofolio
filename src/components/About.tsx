'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Code2, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Mathematical Foundation',
    description: 'B.Sc. in Math provides algorithmic efficiency and data analysis expertise',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    title: 'AI Specialization',
    description: 'Google AI Essentials Course formalized technical knowledge in LLM and RAG',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Customer Empathy',
    description: 'Years in management translate user pain points into functional solutions',
    color: 'from-orange-500 to-red-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Background & Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About & Value Proposition
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-8 sm:p-12 border border-gray-700 mb-12"
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              I am a <span className="text-cyan-400 font-semibold">Full-Stack AI Integration Engineer</span> built on a foundation of{' '}
              <span className="text-cyan-400 font-semibold">mathematical rigor</span> and direct customer empathy.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              My <span className="text-cyan-400 font-semibold">B.Sc. in Math</span> is the core of my approach, enabling me to focus on{' '}
              <span className="text-cyan-400 font-semibold">algorithmic efficiency</span> and the data analysis critical for effective{' '}
              <span className="text-cyan-400 font-semibold">RAG</span> and{' '}
              <span className="text-cyan-400 font-semibold">LLM Fine-Tuning</span>. Completing the{' '}
              <span className="text-cyan-400 font-semibold">Google AI Essentials Course</span> formalized my technical knowledge.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Years in <span className="text-cyan-400 font-semibold">management and customer service</span> gives me the unique ability to translate complex user pain points into clear, functional, and intelligent software solutions.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${highlight.color} mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-400 mb-6">
              Ready to bring AI-powered solutions to your team
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

