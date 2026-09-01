import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  MapPin, 
  User, 
  QrCode,
  Twitter,
  Youtube,
  Instagram
} from "lucide-react";
import { ShaderBackground } from "../components/ShaderBackground";
import logo from "../assets/logo.png";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-24 text-white relative selection:bg-cyan-500/30 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#020617]/70 to-[#020617]" />
      </div>

      {/* Decorative Wave/Curve Simulation at Top Left */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none overflow-hidden z-0 opacity-40">
         <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] rounded-[100%] border-[2px] border-cyan-500/10 shadow-[inset_0_0_100px_rgba(6,182,212,0.1)]" />
         <div className="absolute -top-[40%] -left-[10%] w-[120%] h-[120%] rounded-[100%] border-[1px] border-blue-500/10 shadow-[inset_0_0_100px_rgba(59,130,246,0.1)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="flex justify-center lg:justify-start"
           >
             <div className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_80px_rgba(6,182,212,0.15)] group">
                <div className="absolute inset-0 rounded-full border-t border-cyan-400/50 animate-spin" style={{ animationDuration: '15s' }}/>
                <img src={logo} alt="Novaliseo Logo" className="w-[80%] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500" />
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-center lg:text-left space-y-6"
           >
             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tighter">
               LET'S <span className="text-cyan-400">CONNECT</span>
             </h1>
             <div className="w-16 h-1 bg-cyan-500 mx-auto lg:mx-0 rounded-full" />
             <h2 className="text-2xl font-bold text-white">We'd love to hear from you.</h2>
             <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
               For partnerships, projects, collaborations, or any other inquiries, feel free to reach out to us using the details below.
             </p>
           </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
           
           {/* LEFT COLUMN: Contact Details */}
           <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
              >
                 <h3 className="text-xl font-bold text-cyan-400 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Contact Details</h3>
                 
                 <div className="space-y-8">
                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                        <PhoneCall className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-lg text-white font-medium">+91 6366969269</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                        <p className="text-lg text-white font-medium">official@novaliseo.com</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                        <Globe className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Website</p>
                        <p className="text-lg text-white font-medium">www.novaliseo.com</p>
                      </div>
                   </div>
                 </div>
              </motion.div>

              {/* Follow Us & Scan */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                 <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col justify-between">
                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Follow Us</h3>
                    <p className="text-xs text-slate-400 mb-6">Stay updated with our innovations, projects, and insights.</p>
                    <div className="flex gap-4">
                       <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"><Twitter className="w-5 h-5 text-white" /></a>
                       <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"><Youtube className="w-5 h-5 text-white" /></a>
                       <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"><Instagram className="w-5 h-5 text-white" /></a>
                    </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex flex-col justify-between items-center text-center">
                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Scan to Visit</h3>
                    <p className="text-xs text-slate-400 mb-4">Explore our solutions, projects, and latest updates.</p>
                    <div className="p-3 bg-white rounded-xl">
                      <QrCode className="w-16 h-16 text-slate-900" />
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* RIGHT COLUMN: Office & Leadership */}
           <div className="lg:col-span-7 space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group"
              >
                 <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                   <MapPin className="w-64 h-64 text-white" />
                 </div>
                 <h3 className="text-xl font-bold text-blue-400 mb-8 uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">Corporate Office</h3>
                 
                 <div className="flex gap-6 items-start relative z-10">
                    <div className="p-3 bg-blue-500 rounded-full mt-1 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Sri Paripoorna Sanathana Incubation Center</h4>
                      <p className="text-slate-300 leading-relaxed font-light text-lg">
                        No. 91, Kaivalya Sannidhanam,<br />
                        Arjunabettahalli, Kasaba Hobli,<br />
                        Railway Gollahalli Post,<br />
                        Nelamangala Taluk,<br />
                        Bengaluru Rural,<br />
                        Karnataka - 562123
                      </p>
                    </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
              >
                 <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-widest">Connect with our Leadership</h3>
                 
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                       <div className="p-4 bg-slate-800 rounded-full shrink-0">
                         <User className="w-6 h-6 text-slate-400" />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-lg">Kayam Thejaa</h4>
                         <p className="text-cyan-400 text-sm">Founder and CEO</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                       <div className="p-4 bg-slate-800 rounded-full shrink-0">
                         <User className="w-6 h-6 text-slate-400" />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-lg">Kushanthraj S N</h4>
                         <p className="text-cyan-400 text-sm">Founder and COO</p>
                       </div>
                    </div>
                 </div>
              </motion.div>

           </div>
        </div>

      </div>
    </div>
  );
}
