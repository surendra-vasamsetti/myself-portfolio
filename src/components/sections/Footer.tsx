import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-purple-400' },
    { icon: Mail, href: 'mailto:alex.johnson@example.com', label: 'Email', color: 'hover:text-green-400' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
              Alex Johnson
            </h3>
            <p className="text-gray-400 text-sm font-mono">
              {'<'} Building the future, one line of code at a time {' />'}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full ${link.color} transition-all duration-300 hover:border-current hover:shadow-lg hover:shadow-current/25`}
                  aria-label={link.label}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-8 text-sm">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-2"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center space-x-2 mb-2">
              <span>© 2024 Alex Johnson. Crafted with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>and quantum computing.</span>
            </p>
            <p className="flex items-center justify-center space-x-2 text-xs">
              <Zap size={12} className="text-cyan-400" />
              <span>Powered by future technology</span>
              <Zap size={12} className="text-purple-400" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
