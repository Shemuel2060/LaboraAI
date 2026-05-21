import React from 'react';
import { Icons } from '../icons';

export const WhoItsFor: React.FC = () => (
  <section id="who" className="py-20 lg:py-32 bg-surface/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
          // Audience
        </span>
        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
          Built for every scientist
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From students to teachers, Labora AI elevates how science is learned and taught.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Icons.EmojiStudent />, title: 'Students', desc: 'Connect lab results to concepts, understand the "why" behind reactions, and build intuition.' },
          { icon: <Icons.EmojiTeacher />, title: 'Teachers', desc: 'Standardize teaching quality, get AI-assisted explanations, and save hours on analysis.' },
          { icon: <Icons.EmojiSchool />, title: 'Institutions', desc: 'Enhance lab education at scale, integrate AI into curricula, and improve comprehension.' },
        ].map((item, i) => (
          <div key={i} className="group p-10 bg-surface border border-white/5 rounded-[2rem] hover:bg-surface-hover hover:border-white/10 hover:-translate-y-2 transition-all duration-300 reveal text-center shadow-xl">
            <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-base font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
