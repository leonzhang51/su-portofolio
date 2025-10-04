'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ShoppingCart, Store, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: ShoppingCart,
    name: 'Smart Shopping List Module (B2B)',
    role: 'Full-Stack Developer',
    focus: 'AI-Powered Recommendation Engine with RAG',
    description:
      'Engineered a high-value, intelligent B2B module for predictive shopping lists. Implemented Retrieval-Augmented Generation (RAG) using LangChain to ground LLM responses with proprietary data (via GraphQL), significantly increasing relevance and reducing hallucinations. This project showcases proficiency in LLM Fine-Tuning, prompt engineering, and the full-stack deployment pipeline.',
    techStack: ['RAG', 'LLM Fine-Tuning', 'LangChain', 'Vercel AI SDK', 'Next.js', 'Python', 'GraphQL', 'MCP'],
    liveDemo: '#',
    github: '#',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    icon: Store,
    name: 'B2C E-commerce Application',
    role: 'Full-Stack Developer',
    focus: 'Robust Data Architecture and CI/CD',
    description:
      'Developed a complete B2C e-commerce platform from scratch. Built a scalable backend with Python/FastAPI and PostgreSQL, demonstrating strong database design and REST API development. Ensured a production-ready workflow using GitHub Actions (CI/CD). This project proves ability to handle a complete, secure, and performant full-stack application.',
    techStack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'GitHub Actions', 'CI/CD'],
    liveDemo: '#',
    github: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: Calendar,
    name: 'Restaurant Shift Plan System (SAAS)',
    role: 'Project Coordinator & Developer',
    focus: 'Agile Development & Business Logic',
    description:
      'Acted as Project Coordinator and developer for a SAAS application, specializing in team workflow and feature delivery. Led Agile planning and developed the "tips contribution" module using modern Next.js. This experience highlights strong leadership, translating complex customer service requirements into functional software, and managing feature delivery.',
    techStack: ['Next.js', 'React Context', 'Agile Methodology', 'Project Coordination'],
    liveDemo: '#',
    github: '#',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-gray-900 relative overflow-hidden">
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
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Core evidence of skills and technical depth in AI integration and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-cyan-400 font-medium mb-2">
                    {project.role}
                  </p>

                  {/* Focus */}
                  <p className="text-sm text-gray-400 font-medium mb-4">
                    Focus: {project.focus}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 font-medium mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs font-medium rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

