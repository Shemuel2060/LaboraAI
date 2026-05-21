import React from 'react';
import { Icons } from '../icons';

export const WhyLaboraAI: React.FC = () => (
  <section id="why" className="py-20 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8">
            // Why us
          </span>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
            Other tools calculate. <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">We interpret.</span>
          </h2>
          <div className="space-y-8">
            {[
              { icon: <Icons.IconBrain />, title: 'Scientific Reasoning', desc: 'We contextualize the science behind numbers.' },
              { icon: <Icons.IconBook />, title: 'Guided Learning', desc: 'Step-by-step explanations connecting data to theory.' },
              { icon: <Icons.IconChart />, title: 'Intuitive Visuals', desc: 'Auto-generated curves that make abstract data click.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-6 h-6 text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-base font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 lg:p-12 bg-surface border border-white/5 rounded-[2.5rem] shadow-2xl reveal">
          <h3 className="text-2xl font-heading font-bold text-white mb-10">Intelligence Depth</h3>
          <div className="space-y-10">
            {[
              { label: 'Calculators', val: '35%', text: 'Compute' },
              { label: 'Simulators', val: '50%', text: 'Model' },
              { label: 'Labora AI', val: '95%', text: 'REASON', highlight: true }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-mono tracking-widest uppercase">
                  <span className={item.highlight ? 'text-accent font-bold' : 'text-gray-500'}>{item.label}</span>
                  <span className={item.highlight ? 'text-accent font-bold' : 'text-gray-500'}>{item.text}</span>
                </div>
                <div className="h-3 bg-bg rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_-2px_rgba(0,220,160,0.3)] ${item.highlight ? 'bg-gradient-to-r from-accent to-secondary' : 'bg-white/10'}`} 
                    style={{ width: item.val }} 
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
            <p className="text-accent text-sm font-mono text-center">
              Labora AI provides 3x more scientific depth than traditional lab software.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
