import React from 'react';

interface Step {
  step: string;
  emoji: string;
  title: string;
  description: string;
  features: string[];
}

const STEPS: readonly Step[] = [
  {
    step: 'STEP 01',
    emoji: '⌨️',
    title: 'Input Your Lab Data',
    description: 'Enter raw measurements from your experiment — pH, volume, concentration, temperature, or observations.',
    features: ['pH values & titrant volumes', 'Reactant concentrations', 'Qualitative observations']
  },
  {
    step: 'STEP 02',
    emoji: '🤖',
    title: 'Intelligent Analysis',
    description: 'Labora AI interprets your data using scientific reasoning, pattern recognition, and chemical knowledge.',
    features: ['Reaction type identified', 'Equivalence point computed', 'Anomalies flagged & explained']
  },
  {
    step: 'STEP 03',
    emoji: '💡',
    title: 'See & Understand',
    description: 'Receive clear explanations, identified reactions, and auto-generated visualizations that make science click.',
    features: ['Plain-language explanation', 'Titration curve rendered', 'Theory connection provided']
  }
] as const;

const StepCard: React.FC<{ step: Step }> = ({ step }) => (
  <div className="group p-8 lg:p-10 bg-[#080c17] border border-white/5 rounded-[2.5rem] hover:border-accent/20 transition-all duration-500 reveal shadow-2xl flex flex-col h-full">
    {/* Step Number */}
    <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-8">
      {step.step}
    </span>

    {/* Icon Container */}
    <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center text-3xl mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500">
      {step.emoji}
    </div>

    {/* Content */}
    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6 leading-tight group-hover:text-accent transition-colors">
      {step.title}
    </h3>
    <p className="text-gray-400 text-base leading-relaxed font-light mb-10">
      {step.description}
    </p>

    {/* Features List */}
    <ul className="mt-auto space-y-4">
      {step.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-light">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,220,160,0.6)]" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const HowItWorks: React.FC = () => (
  <section id="how" className="py-24 lg:py-40 bg-bg relative overflow-hidden">
    {/* Subtle grid pattern background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      {/* Header */}
      <div className="text-center mb-24 reveal">
        <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
          Three steps from data <br className="hidden sm:block" /> to deep understanding
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {STEPS.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </div>
  </section>
);