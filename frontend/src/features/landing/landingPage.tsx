import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import {
  TitrationCurveSection,
  HowItWorks,
  WhoItsFor,
  WhyLaboraAI,
  Roadmap,
  InvestSection,
  SubscribeSection
} from './components/sections/index';
import { Footer } from './components/footer';
import { DemoModal, InvestModal } from './components/formModal';
import type { FormState, InvestFormState } from './types/types';
import { sendViaResend } from './api/sendEmail';

export const LaboraAILanding: React.FC = () => {
  // Modal states
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState({ text: '', type: '' });
  const [isEmailSending, setIsEmailSending] = useState(false);

  const [demoForm, setDemoForm] = useState<FormState>({
    name: '',
    email: '',
    institution: '',
    role: '',
    note: '',
  });
  const [demoMsg, setDemoMsg] = useState({ text: '', type: '' });

  const [investForm, setInvestForm] = useState<InvestFormState>({
    name: '',
    email: '',
    fund: '',
    stage: '',
    note: '',
  });
  const [investMsg, setInvestMsg] = useState({ text: '', type: '' });

  // Scroll reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close modals on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDemoModalOpen(false);
        setIsInvestModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleEmailSubmit = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailMsg({ text: '↳ Please enter a valid email address.', type: 'error' });
      return;
    }
    setIsEmailSending(true);
    try {
      await sendViaResend({
        subject: '🧪 New Labora AI Waitlist Signup',
        html: `<h2>New Waitlist Signup</h2><p><strong>Email:</strong> ${email}</p>`,
      });
      setEmailMsg({ text: "✓ You're on the list! We'll be in touch soon.", type: 'success' });
      setEmail('');
    } catch {
      setEmailMsg({ text: '✗ Something went wrong. Email us at hello@labora.ai', type: 'error' });
    } finally {
      setIsEmailSending(false);
    }
  };

  const handleDemoSubmit = async () => {
    if (!demoForm.name || !demoForm.email || !demoForm.role) {
      setDemoMsg({ text: 'Please fill in Name, Email and Role.', type: 'error' });
      return;
    }
    try {
      await sendViaResend({
        subject: `🎓 Demo Request — ${demoForm.name}`,
        html: `<h2>Demo Request</h2>
               <p><strong>Name:</strong> ${demoForm.name}</p>
               <p><strong>Email:</strong> ${demoForm.email}</p>
               <p><strong>Institution:</strong> ${demoForm.institution}</p>
               <p><strong>Role:</strong> ${demoForm.role}</p>
               <p><strong>Note:</strong> ${demoForm.note}</p>`,
      });
      setDemoMsg({ text: "✓ Demo request sent! We'll reach out within 24 hours.", type: 'success' });
      setTimeout(() => setIsDemoModalOpen(false), 2000);
    } catch {
      setDemoMsg({ text: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  const handleInvestSubmit = async () => {
    if (!investForm.name || !investForm.email) {
      setInvestMsg({ text: 'Please fill in Name and Email.', type: 'error' });
      return;
    }
    try {
      await sendViaResend({
        subject: `📈 Investor Inquiry — ${investForm.name}`,
        html: `<h2>Investor Inquiry</h2>
               <p><strong>Name:</strong> ${investForm.name}</p>
               <p><strong>Email:</strong> ${investForm.email}</p>
               <p><strong>Fund:</strong> ${investForm.fund}</p>
               <p><strong>Stage:</strong> ${investForm.stage}</p>
               <p><strong>Message:</strong> ${investForm.note}</p>`,
      });
      setInvestMsg({ text: '✓ Thank you! Our pitch deck is on its way to your inbox.', type: 'success' });
      setTimeout(() => setIsInvestModalOpen(false), 2000);
    } catch {
      setInvestMsg({ text: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="bg-bg text-white min-h-screen font-body relative overflow-x-hidden selection:bg-accent/30 selection:text-white">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(0,220,160,0.07)_0%,rgba(0,220,160,0)_60%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(0,184,217,0.05)_0%,rgba(0,184,217,0)_60%)] blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.03)_0%,rgba(168,85,247,0)_60%)] blur-[100px]" />
      </div>
      
      <Navbar onDemoClick={() => setIsDemoModalOpen(true)} />

      <main className="relative z-10">
        <Hero onGetStarted={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })} />
        <TitrationCurveSection />
        <HowItWorks />
        <WhoItsFor />
        <WhyLaboraAI />
        <Roadmap />
        <InvestSection onInvestClick={() => setIsInvestModalOpen(true)} onDemoClick={() => setIsDemoModalOpen(true)} />
        <SubscribeSection
          email={email}
          setEmail={setEmail}
          onSubmit={handleEmailSubmit}
          isSending={isEmailSending}
          message={emailMsg}
          onTeacherDemo={() => setIsDemoModalOpen(true)}
          onInvestorInfo={() => setIsInvestModalOpen(true)}
        />
      </main>

      <Footer />

      {/* Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        formData={demoForm}
        setFormData={setDemoForm}
        onSubmit={handleDemoSubmit}
        message={demoMsg}
      />
      <InvestModal
        isOpen={isInvestModalOpen}
        onClose={() => setIsInvestModalOpen(false)}
        formData={investForm}
        setFormData={setInvestForm}
        onSubmit={handleInvestSubmit}
        message={investMsg}
      />
    </div>
  );
};

export default LaboraAILanding;