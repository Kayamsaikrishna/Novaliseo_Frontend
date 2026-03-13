"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { ShadowOverlay } from '../components/ShadowOverlay';
import emailjs from '@emailjs/browser';
import {
  X,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2
} from "lucide-react";
import { cn } from '../lib/utils';

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
}

const socialLinks: SocialLink[] = [
  { id: '1', name: 'X', icon: <X className="h-4 w-4" />, href: 'https://x.com/NOVALISEO' },
  { id: '2', name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: 'https://www.instagram.com/novaliseo/' },
  { id: '3', name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/company/novaliseo' },
];

export default function PartnerPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: [] as string[],
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // EmailJS Configuration - User to replace these or add to .env
  const EMAILJS_SERVICE_ID = "service_zpuhuzb"; // Replace with your Service ID
  const EMAILJS_TEMPLATE_ID = "template_ma2orlp"; // Replace with your Template ID
  const EMAILJS_PUBLIC_KEY = "imhdlehfW-DXAyJW7"; // Replace with your Public Key

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Map form data to the user's EmailJS template placeholders
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        industry: formData.industry || "Not provided",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        project_type: formData.projectType.join(", ") || "None selected",
        subject: `Partnership Inquiry: ${formData.name}`,
        message: formData.message
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        console.log("Email sent successfully!");
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went right wrong. Please try again later or email us directly at info@novaliseo.com.");
    } finally {
      setLoading(false);
    }
  };

  const projectTypeOptions = [
    'AI Solutions', 'Web App', 'Secure Platform', 'Strategic Partnership',
    'Defense Tech', 'Healthcare AI', 'Other'
  ];

  const budgetOptions = ['< ₹5 Lakhs', '₹5 Lakhs - ₹25 Lakhs', '₹25 Lakhs - ₹1 Crore', '₹1 Crore+'];
  const timelineOptions = ['As soon as possible', '1-3 Months', '3-6 Months', '6+ Months'];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white">
      {/* ── BACKGROUND LAYER ── */}
      <div className="fixed inset-0 z-0">
        {/* Background Image / Deep Blue Shades */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0, 100, 255, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1742273330004-ef9c9d228530?auto=format&fit=crop&q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Animated Bubbles from User's Code - Blue Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-500/10 rounded-full animate-bubble"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                opacity: 0,
                filter: 'blur(10px)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-6 py-32">

        {/* Main Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-start">

          {/* Left Side: Title & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 lg:sticky lg:top-32"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
              We can turn your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 animate-gradient-x">
                dream project
              </span> <br />
              into reality
            </h1>

            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              Novaliseo helps enterprises and defense organizations secure their cognitive assets
              with absolute transparency and sovereign control.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-4">Direct Contact</p>
              <a href="mailto:info@novaliseo.com" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">info@novaliseo.com</a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-3xl"
          >
            {/* Glossy Top Edge */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50" />

            {!submitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-black mb-2">Partner with Us! 👋</h2>
                  <p className="text-slate-400">Tell us about your mission and let's build the future together.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Personal Info */}
                  <div className="space-y-6">
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Personal Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-slate-300">Your name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-slate-300">Work Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <Label htmlFor="phone" className="text-slate-300">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Contact number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-xl h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Company Info */}
                  <div className="space-y-6">
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Organization Context</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-slate-300">Company / Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Enter organization"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="industry" className="text-slate-300">Industry</Label>
                        <Input
                          id="industry"
                          name="industry"
                          placeholder="e.g. Defense, AI, Healthcare"
                          value={formData.industry}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-xl h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Project Info */}
                  <div className="space-y-6">
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Project Scope</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="budget" className="text-slate-300">Anticipated Budget</Label>
                        <select
                          name="budget"
                          id="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:border-cyan-500/50 outline-none transition-all"
                        >
                          <option value="" disabled className="bg-slate-900 text-slate-400">Select Range</option>
                          {budgetOptions.map(opt => <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>)}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="timeline" className="text-slate-300">Expected Timeline</Label>
                        <select
                          name="timeline"
                          id="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:border-cyan-500/50 outline-none transition-all"
                        >
                          <option value="" disabled className="bg-slate-900 text-slate-400">Select Timeline</option>
                          {timelineOptions.map(opt => <option key={opt} value={opt} className="bg-slate-900 text-white">{opt}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-slate-300">Project Mission & Objectives</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Outline your project's mission and how Novaliseo can accelerate your goals..."
                      className="min-h-[140px] bg-white/5 border-white/10 focus:border-cyan-500/50 transition-all rounded-2xl p-4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-slate-300 font-medium tracking-tight">Proposed Strategic Focus</p>
                    <div className="grid grid-cols-2 gap-4">
                      {projectTypeOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3 group/opt">
                          <Checkbox
                            id={option.replace(/\s/g, '-').toLowerCase()}
                            checked={formData.projectType.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked)}
                            className="h-5 w-5 rounded-md border-white/20 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                          />
                          <Label
                            htmlFor={option.replace(/\s/g, '-').toLowerCase()}
                            className="text-sm font-normal text-slate-400 group-hover/opt:text-white cursor-pointer transition-colors"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-2xl bg-white text-black font-black text-lg hover:bg-cyan-400 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send a message"}
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="mb-8 rounded-full bg-cyan-500/20 p-6 ring-1 ring-cyan-500/30">
                  <CheckCircle2 className="h-16 w-16 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-black mb-4">Message Sent!</h2>
                <p className="text-slate-400 max-w-xs mb-10">
                  Thank you for reaching out. Our team will review your project and get back to you shortly.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-xl border-white/10 bg-white/5 px-8 h-12"
                >
                  Send another message
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      {/* CSS for bubble animation */}
      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-20vh) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble 15s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
