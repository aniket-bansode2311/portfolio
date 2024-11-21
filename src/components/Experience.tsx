import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Blockchain Developer',
    company: 'Wintree Tech Pvt Ltd',
    period: 'Nov 2023 - Present',
    responsibilities: [
      'Engineered RESTful APIs for blockchain integration',
      'Implemented MongoDB testing and validation',
      'Developed smart contracts for various blockchain platforms'
    ]
  },
  {
    title: 'Blockchain Developer',
    company: 'Vision Techno Services',
    period: 'Jul 2020 - Nov 2023',
    responsibilities: [
      'Designed smart contracts for Ethereum and Solana',
      'Optimized gas usage in smart contracts',
      'Led team coding challenges and mentored junior developers'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-blue-600"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg ml-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-400">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}