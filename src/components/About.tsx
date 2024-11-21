import React from 'react';
import { Code2, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a passionate blockchain developer with extensive experience in building decentralized applications
              and smart contracts. My journey in the blockchain space has equipped me with deep knowledge of various
              platforms and technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Code2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Smart Contract Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expertise in Solidity and blockchain platforms like Ethereum, Solana, and Polygon
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Database className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold">DeFi & Web3</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experience with DeFi protocols, NFTs, and decentralized applications
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Server className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Full Stack Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Proficient in Node.js, React.js, and database management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Blockchain Technology"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}