import React from 'react';

export const TitrationCurveSection: React.FC = () => (
  <section className="py-20 lg:py-32 bg-bg relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-surface border border-white/10 p-8 lg:p-12 max-w-4xl mx-auto rounded-[2rem] shadow-2xl reveal">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
          <div>
            <h3 className="text-3xl font-heading font-bold text-white">Live Visualization</h3>
            <p className="text-gray-500 text-sm font-mono mt-2 uppercase tracking-widest">Strong Acid vs Strong Base · AI Rendered</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-wider">
              pH Jump: 4 → 10
            </span>
            <span className="px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
              Eq. Point: 25.0 mL
            </span>
          </div>
        </div>

        <div className="bg-bg/50 rounded-2xl p-6 border border-white/5 shadow-inner">
          <svg className="w-full h-64 md:h-96" viewBox="0 0 700 220" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00dca0" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00dca0" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="50" y1="50" x2="690" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="50" y1="100" x2="690" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="50" y1="150" x2="690" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            
            {/* Curve */}
            <path d="M 55 185 C 80 183, 120 181, 160 178 S 220 172, 260 168 S 310 162, 340 155 S 365 140, 375 125 S 382 95, 385 85 S 390 35, 400 22 S 430 16, 470 15 S 540 16, 600 18 S 650 20, 690 22" fill="none" stroke="#00dca0" strokeWidth="3" />
            <path d="M 55 185 C 80 183, 120 181, 160 178 S 220 172, 260 168 S 310 162, 340 155 S 365 140, 375 125 S 382 95, 385 85 S 390 35, 400 22 S 430 16, 470 15 S 540 16, 600 18 S 650 20, 690 22 L 690 200 L 55 200 Z" fill="url(#curveGrad)" />
            
            <circle cx="385" cy="105" r="6" fill="#00dca0" className="animate-pulse" />
            <text x="375" y="42" fill="#00dca0" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono)">Equiv. point</text>
          </svg>
        </div>

        <div className="mt-10 p-6 bg-accent/5 rounded-2xl border-l-4 border-accent shadow-lg">
          <p className="text-gray-400 text-base italic leading-relaxed">
            "The steep pH jump between 23–27 mL indicates the equivalence point region characteristic of a strong acid–strong base reaction."
          </p>
        </div>
      </div>
    </div>
  </section>
);
