'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Database, Award } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    icon: Brain,
    title: 'Advanced AI/LLM Tools',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      'RAG (Retrieval-Augmented Generation)',
      'LLM Fine-Tuning',
      'LangChain',
      'LangGraph',
      'Prompt Engineering',
      'MCP',
      'Vercel AI SDK',
    ],
  },
  {
    id: 2,
    icon: Code,
    title: 'Full-Stack Core',
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Next.js',
      'React',
      'Python (FastAPI)',
      'Java',
      'HTML5',
      'CSS3',
      'JavaScript/TypeScript',
    ],
  },
  {
    id: 3,
    icon: Database,
    title: 'Data & DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      'PostgreSQL',
      'GraphQL',
      'SQL',
      'GitHub Actions (CI/CD)',
      'Git',
      'Docker',
    ],
  },
  {
    id: 4,
    icon: Award,
    title: 'Fundamentals & Certifications',
    color: 'from-green-500 to-teal-500',
    skills: [
      'Google AI Essentials Course',
      'Mathematical Logic',
      'Data Analysis',
      'Agile/Scrum',
      'Problem-Solving',
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set prioritized by AI/LLM tools and full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Continuously learning and adapting to emerging technologies in AI and software development
          </p>
        </motion.div>
      </div>
    </section>
  );
}

