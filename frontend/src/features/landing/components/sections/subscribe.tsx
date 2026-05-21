import React from 'react';

interface SubscribeSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  isSending: boolean;
  message: { text: string; type: string };
  onTeacherDemo: () => void;
  onInvestorInfo: () => void;
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ({ 
  email, setEmail, onSubmit, isSending, message, onTeacherDemo, onInvestorInfo 
}) => (
  <section id="subscribe" className="py-20 lg:py-32 bg-surface/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center reveal">
        <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
          Stay informed
        </h2>
        <p className="text-gray-400 text-lg mb-12 font-light">
          Get notified when we open new seats and receive our monthly science education newsletter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-stretch group">
          <input 
            type="email" 
            placeholder="scientist@email.com" 
            className="flex-1 bg-surface border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-white placeholder:text-gray-600 shadow-inner"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button 
            onClick={onSubmit}
            disabled={isSending}
            className="px-8 py-4 bg-accent text-bg font-bold rounded-2xl shadow-lg shadow-accent/10 hover:shadow-accent/20 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
          >
            {isSending ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>

        {message.text && (
          <p className={`text-sm mt-6 font-medium animate-fade-in ${
            message.type === 'success' ? 'text-accent' : 'text-red-400'
          }`}>
            {message.text}
          </p>
        )}
        
        <div className="flex justify-center gap-10 mt-16 text-xs font-mono uppercase tracking-widest">
          <button 
            onClick={onTeacherDemo} 
            className="text-gray-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer border-b border-transparent hover:border-accent/30 pb-1"
          >
            Are you a teacher?
          </button>
          <button 
            onClick={onInvestorInfo} 
            className="text-gray-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer border-b border-transparent hover:border-accent/30 pb-1"
          >
            Investor info
          </button>
        </div>
      </div>
    </div>
  </section>
);
