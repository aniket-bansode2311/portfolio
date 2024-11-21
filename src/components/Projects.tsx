import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Centralized Exchange (CEX)',
    description: 'Built RESTful APIs and managed Nginx server for a high-performance cryptocurrency exchange platform.',
    tech: ['Node.js', 'MongoDB', 'Nginx', 'REST API'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3'
  },
  {
    title: 'Decentralized Exchange (DEX)',
    description: 'Developed DeFi functionalities and optimized price-fetching logic for a decentralized trading platform.',
    tech: ['Solidity', 'Web3.js', 'React', 'Smart Contracts'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3'
  },
  {
    title: 'Crowdfunding App',
    description: 'Deployed smart contract on Ethereum using Truffle and Web3.js for a decentralized crowdfunding platform.',
    tech: ['Ethereum', 'Truffle', 'Web3.js', 'React'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3'
  },
  {
    title: 'NFT Minting Website',
    description: 'Deployed smart contract on Polygon using Hardhat and Ethers.js for NFT minting and marketplace.',
    tech: ['Polygon', 'Hardhat', 'Ethers.js', 'IPFS'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 group-hover:opacity-90 transition-opacity"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 space-x-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <GitBranch className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}