import React from 'react';
import { Icons } from './icons';

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg shadow-accent/20">
            <Icons.Flask />
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Labora<span className="text-accent">AI</span>
          </span>
        </div>
        <div className="text-gray-500 text-sm font-mono">
          © 2026 Labora AI Inc. Built for the future of science.
        </div>
        <div className="flex gap-8">
          {['Twitter', 'LinkedIn'].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className="text-gray-500 hover:text-accent transition-colors duration-200 text-sm font-mono"
            >
              {platform}
            </a>
          ))}
          <a 
            href="mailto:hello@labora.ai" 
            className="text-gray-500 hover:text-accent transition-colors duration-200 text-sm font-mono"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);
