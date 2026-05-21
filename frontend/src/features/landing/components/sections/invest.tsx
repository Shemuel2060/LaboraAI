import React from 'react';

interface InvestSectionProps {
  onInvestClick: () => void;
  onDemoClick: () => void;
}

export const InvestSection: React.FC<InvestSectionProps> = ({ onInvestClick, onDemoClick }) => (
  <section id="invest" className="py-20 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-surface border border-white/10 p-12 lg:p-24 text-center rounded-[3rem] shadow-2xl reveal relative overflow-hidden group">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none group-hover:bg-secondary/10 transition-colors duration-500" />
        
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8">
            Seed Round Closing
          </span>
          <h2 className="text-4xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
            Revolutionize learning <br className="hidden lg:block" /> with us
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join us in building the intellectual infrastructure for the next generation of scientists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onInvestClick} 
              className="px-10 py-5 bg-accent text-bg font-bold text-lg rounded-2xl shadow-xl shadow-accent/10 hover:shadow-accent/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Request Pitch Deck
            </button>
            <button 
              onClick={onDemoClick} 
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
