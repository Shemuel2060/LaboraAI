import React from 'react';
import { Icons } from '../icons';

export const Roadmap: React.FC = () => (
  <section id="roadmap" className="py-20 lg:py-32 bg-surface/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
          // Roadmap
        </span>
        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
          Our Vision
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Icons.Check />, period: 'Q1 2026', title: 'Chemistry Core', desc: 'Acid-base module with titration analysis and auto-generated curves.', active: true },
          { icon: <Icons.Soon />, period: 'Q3 2026', title: 'Physics & Bio', desc: 'Expanding reasoning models to mechanics and cellular biology interpretation.', active: false },
          { icon: <Icons.Future />, period: '2027', title: 'Universal Lab AI', desc: 'Integration with digital lab sensors for real-time analysis.', active: false },
        ].map((item, i) => (
          <div 
            key={i} 
            className={`p-8 bg-surface border rounded-[2rem] shadow-xl reveal transition-all duration-300 hover:bg-surface-hover hover:-translate-y-2 ${
              item.active ? 'border-accent/30 bg-accent/[0.02]' : 'border-white/5'
            }`}
          >
            <div className="flex justify-between items-start mb-8">
              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                item.active ? 'text-accent' : 'text-gray-500'
              }`}>
                {item.period}
              </span>
              <div className={`p-2 rounded-lg ${
                item.active ? 'bg-accent/10 text-accent' : 'bg-white/5 text-gray-500'
              }`}>
                {item.icon}
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 text-base font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
