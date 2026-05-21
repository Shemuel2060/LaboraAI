import React from 'react';
import { Icons } from './icons';

interface NavbarProps {
    onDemoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDemoClick }) => (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20 lg:h-24">
                {/* Logo */}
                <a href="#" className="flex items-center gap-4 group">
                    <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-accent to-secondary text-bg shadow-[0_0_20px_rgba(0,220,160,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <img src="/logo1.png" alt="Labora AI" className="w-6 h-6" />
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-2xl lg:text-3xl font-heading font-bold text-white tracking-tight">
                        Labora<span className="text-accent">AI</span>
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-12">
                    {['How It Works', 'For Whom', 'Roadmap', 'Investors'].map((label, idx) => (
                        <a
                            key={idx}
                            href={`#${label.toLowerCase().replace(/\s+/g, '')}`}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] relative group/link"
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={onDemoClick}
                    className="relative group px-8 py-3 text-sm font-bold text-bg bg-accent rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,220,160,0.4)] active:scale-95"
                >
                    <span className="relative z-10">Request Demo</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </div>
        </div>
    </nav>
);