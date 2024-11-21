import React from 'react';

const skills = {
  'Programming': ['JavaScript', 'Solidity'],
  'Blockchain': ['Ethereum', 'EVM chains', 'Solana', 'Smart Contracts', 'DeFi'],
  'Tools': ['Truffle', 'Hardhat', 'Web3.js', 'Ethers.js', 'The Graph', 'IPFS'],
  'Databases': ['MongoDB', 'MySQL'],
  'Others': ['Node.js', 'React.js', 'Nginx']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {Math.floor(Math.random() * 20 + 80)}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        style={{
                          width: `${Math.floor(Math.random() * 20 + 80)}%`,
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}