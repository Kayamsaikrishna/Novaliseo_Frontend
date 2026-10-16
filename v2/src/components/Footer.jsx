import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const navLinks = [
    { name: "Solutions", path: "/projects" },
    { name: "Platforms", path: "/platforms" },
    { name: "Research", path: "/collaborations" },
    { name: "Trainings", path: "/trainings" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
    { name: "Partner", path: "/partner" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 text-slate-700 pt-20 pb-16 px-6 sm:px-10 lg:px-16 selection:bg-sky-500/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Clean Row: Brand Identity & Essential Navigation (Zero Dividing Lines) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start gap-1.5">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Novaliseo" className="h-[38px] object-contain" />
            </Link>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Brain Behind Intelligent Operations
            </span>
          </div>

          {/* Clean Horizontal Navigation */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Clean Row: Copyright, Contact Email, Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs text-slate-500">
          
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Novaliseo Global Tech Pvt Ltd. All rights reserved.
          </p>

          {/* Contact & Socials */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:official@novaliseo.com"
              className="hover:text-slate-950 transition-colors font-medium flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>official@novaliseo.com</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://x.com/NOVALISEO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 hover:text-black hover:border-slate-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/novaliseo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 hover:text-black hover:border-slate-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/novaliseo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 hover:text-black hover:border-slate-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
