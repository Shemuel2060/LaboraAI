import React from 'react';
import { Icons } from './icons';
import type { FormState, InvestFormState } from '../types/types';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/80 backdrop-blur-sm animate-fade-in">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <div className="relative w-full max-w-lg bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-heading font-bold text-2xl text-white">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
                        >
                            <Icons.Close />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    formData: FormState;
    setFormData: (data: FormState) => void;
    onSubmit: () => void;
    message: { text: string; type: string };
}

export const DemoModal: React.FC<DemoModalProps> = ({
    isOpen, onClose, formData, setFormData, onSubmit, message
}) => (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Demo">
        <div className="space-y-4">
            <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Full Name</label>
                <input
                    type="text"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="Marie Curie"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Work Email</label>
                <input
                    type="email"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="marie@university.edu"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Institution</label>
                    <input
                        type="text"
                        className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                        placeholder="MIT"
                        value={formData.institution}
                        onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Role</label>
                    <div className="relative">
                        <select
                            className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors appearance-none text-white cursor-pointer"
                            value={formData.role}
                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="" className="bg-surface">Select role</option>
                            <option value="Teacher" className="bg-surface">Teacher / Professor</option>
                            <option value="Student" className="bg-surface">Student</option>
                            <option value="Admin" className="bg-surface">Administrator</option>
                            <option value="Researcher" className="bg-surface">Researcher</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <Icons.ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Note (Optional)</label>
                <textarea
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors h-24 resize-none text-white placeholder:text-gray-600"
                    placeholder="Tell us about your lab..."
                    value={formData.note}
                    onChange={e => setFormData({ ...formData, note: e.target.value })}
                />
            </div>
            {message.text && (
                <p className={`text-sm font-medium ${message.type === 'success' ? 'text-accent' : 'text-red-400'} animate-fade-in`}>
                    {message.text}
                </p>
            )}
            <button
                onClick={onSubmit}
                className="w-full bg-accent text-bg font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform active:scale-[0.98] mt-2"
            >
                Submit Request
            </button>
        </div>
    </Modal>
);

interface InvestModalProps {
    isOpen: boolean;
    onClose: () => void;
    formData: InvestFormState;
    setFormData: (data: InvestFormState) => void;
    onSubmit: () => void;
    message: { text: string; type: string };
}

export const InvestModal: React.FC<InvestModalProps> = ({
    isOpen, onClose, formData, setFormData, onSubmit, message
}) => (
    <Modal isOpen={isOpen} onClose={onClose} title="Investor Inquiry">
        <div className="space-y-4">
            <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Full Name</label>
                <input
                    type="text"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="Investor Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                <input
                    type="email"
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                    placeholder="investor@fund.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Fund/Firm</label>
                    <input
                        type="text"
                        className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                        placeholder="Venture Capital"
                        value={formData.fund}
                        onChange={e => setFormData({ ...formData, fund: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Stage</label>
                    <input
                        type="text"
                        className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-colors text-white placeholder:text-gray-600"
                        placeholder="Seed / Series A"
                        value={formData.stage}
                        onChange={e => setFormData({ ...formData, stage: e.target.value })}
                    />
                </div>
            </div>
            {message.text && (
                <p className={`text-sm font-medium ${message.type === 'success' ? 'text-accent' : 'text-red-400'} animate-fade-in`}>
                    {message.text}
                </p>
            )}
            <button
                onClick={onSubmit}
                className="w-full bg-accent text-bg font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform active:scale-[0.98] mt-2"
            >
                Request Pitch Deck
            </button>
        </div>
    </Modal>
);
