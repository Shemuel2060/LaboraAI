import React from 'react';
import { Icons } from './icons';

interface HeroProps {
    onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center justify-center mb-12 animate-fade-in">
                    <div className="px-5 py-2 text-xs font-bold text-accent bg-accent/5 rounded-full border border-accent/20 uppercase tracking-[0.25em] flex items-center gap-3">
                        <Icons.Dot />
                        <span>Early Access — Chemistry Module Live</span>
                    </div>
                </div>

                {/* Hero Title */}
                <h1 className="text-6xl lg:text-[100px] font-heading font-extrabold tracking-tight mb-10 animate-fade-in-up leading-[0.95] text-white">
                    Turn Lab Data <br className="hidden sm:block" />
                    Into <span className="bg-gradient-to-r from-accent via-[#4df2c5] to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,220,160,0.2)]">Understanding</span> <br className="hidden sm:block" />
                    Instantly.
                </h1>

                {/* Subtitle */}
                <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 animate-fade-in-up delay-150 font-light leading-relaxed">
                    The bottleneck in science isn't data collection—it's <strong className="text-white font-medium">comprehension</strong>. Labora AI bridge the gap between raw measurements and scientific breakthroughs.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in-up delay-300">
                    <button
                        onClick={onGetStarted}
                        className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 text-xl font-bold text-bg bg-accent rounded-2xl shadow-[0_20px_50px_rgba(0,220,160,0.3)] hover:shadow-[0_20px_70px_rgba(0,220,160,0.5)] hover:scale-105 active:scale-95 transition-all duration-500"
                    >
                        <Icons.Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> 
                        <span>Try Labora AI Free</span>
                    </button>
                    <a
                        href="#how"
                        className="inline-flex items-center justify-center gap-4 px-12 py-5 text-xl font-bold text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-sm"
                    >
                        <span>See How It Works</span> <Icons.ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                {/* Terminal Visual */}
                <div className="mt-24 lg:mt-40 animate-fade-in-up delay-500">
                    <div className="max-w-5xl mx-auto bg-[#0c0f17] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden relative group">
                        {/* Glass Overlay for terminal */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-8 py-5 bg-white/[0.03] border-b border-white/5">
                            <div className="flex gap-3">
                                <div className="w-4 h-4 rounded-full bg-[#ff5f56]" />
                                <div className="w-4 h-4 rounded-full bg-[#ffbd2e]" />
                                <div className="w-4 h-4 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-[0.3em]">labora.ai / chemistry_analysis_v1.0</div>
                            <div className="w-20" />
                        </div>

                        {/* Terminal Body */}
                        <div className="p-10 lg:p-16 bg-bg text-left font-mono text-base lg:text-lg leading-relaxed relative">
                            {/* Inputs */}
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-6">
                                    <span className="text-accent/50 w-24">DATA_IN</span>
                                    <span className="text-white">pH: 7.02 | Vol: 25.4mL | Conc: 0.1M HCl</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-accent/50 w-24">OBSERV</span>
                                    <span className="text-gray-400 font-light italic">Solution transition from colorless to pale pink (Phenolphthalein)</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/5 my-10 relative">
                                <div className="absolute -top-3 left-10 px-4 bg-bg text-[10px] text-accent/50 uppercase tracking-widest">Processing Analysis</div>
                            </div>

                            {/* Analysis Output */}
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <span className="text-secondary/70 shrink-0">1. TYPE</span>
                                    <span className="text-white">Confirmed <strong className="text-accent">Strong Acid–Strong Base</strong> neutralization.</span>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-secondary/70 shrink-0">2. CALC</span>
                                    <span className="text-white italic text-gray-400">HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</span>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-secondary/70 shrink-0">3. RESULT</span>
                                    <span className="text-accent font-bold">Equivalence Point detected at 25.00 mL NaOH.</span>
                                </div>
                            </div>

                            {/* Status Footer */}
                            <div className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-white/5">
                                <div className="px-4 py-1.5 bg-green-500/10 rounded-lg border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Confidence: 99.8%
                                </div>
                                <div className="px-4 py-1.5 bg-accent/10 rounded-lg border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                    ✓ Model Verified
                                </div>
                                <div className="px-4 py-1.5 bg-secondary/10 rounded-lg border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                    ↳ Visuals Prepared
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};