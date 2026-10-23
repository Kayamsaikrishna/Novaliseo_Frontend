import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Youtube, Mail, CheckCircle2 } from "lucide-react";
import footerRobotSeamless from "../assets/footer_robot_seamless.jpg";
import logo from "../assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative w-full bg-[#ede9e2] text-slate-800 pt-16 sm:pt-20 pb-12 px-6 sm:px-10 lg:px-16 selection:bg-sky-500/20 overflow-hidden border-t border-stone-300/60 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid: Left Brand & Seamless 3D Character, Link Columns, Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 items-start">
          
          {/* ================= COLUMN 1 & 2: LEFT BRAND & SEAMLESS 3D ILLUSTRATION ================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Official Novaliseo Logo */}
            <Link to="/" className="inline-block mb-3.5">
              <img src={logo} alt="Novaliseo" className="h-9 sm:h-10 object-contain" />
            </Link>

            {/* Editorial Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-sm mb-4">
              For the ones who build physical systems that thrive outside clean rooms.
            </p>

            {/* 3D Clay Beanbag Character Illustration Seamlessly Combined with Background (No Box / No Border) */}
            <div className="relative w-full max-w-xs sm:max-w-sm overflow-hidden mix-blend-multiply pointer-events-none">
              <img
                src={footerRobotSeamless}
                alt="Novaliseo Engineering Collective"
                className="w-full h-auto object-contain object-left transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* ================= COLUMN 3: PLATFORMS / SYSTEMS ================= */}
          <div className="lg:col-span-2 flex flex-col items-start text-left pt-2 sm:pt-4">
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase mb-4 sm:mb-5">
              Platforms
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Autonomous Flight
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Edge Perception
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Mechatronics Lab
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Sovereign Compute
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Mission Mesh
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4: COMPANY ================= */}
          <div className="lg:col-span-2 flex flex-col items-start text-left pt-2 sm:pt-4">
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-slate-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collaborations" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Research Labs
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Trainings
                </Link>
              </li>
              <li>
                <Link to="/careers" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition-colors">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-[10px] font-mono font-bold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 5: WAKE ME FOR UPDATES (NEWSLETTER) ================= */}
          <div className="lg:col-span-3 flex flex-col items-start text-left pt-2 sm:pt-4">
            <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-1.5">
              Wake me for updates
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              Release notes, flight footage, and the occasional thought from our engineering collective.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="w-full flex items-center gap-2 mb-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white/80 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-xs"
              />
              <button
                type="submit"
                className="shrink-0 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>You're in the telemetry loop.</span>
              </div>
            )}

            {/* Social Icons Row matching the Bean Bag Nap style */}
            <div className="flex items-center gap-4 text-slate-600">
              <a
                href="https://x.com/NOVALISEO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-950 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/novaliseo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-950 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-950 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:official@novaliseo.com"
                className="hover:text-slate-950 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM BAR: COPYRIGHT & LEGAL ================= */}
        <div className="pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Novaliseo Global Tech Pvt Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-950 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-slate-950 transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="hover:text-slate-950 transition-colors">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
