import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import icon from '../assets/icon.png';
import Beams from './EtherealBeams';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-background overflow-hidden">
      {/* Visual Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Beams />
      </div>

      {/* Bottom fade out to blend with rest of site */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Massive Glowing Logo on Right Edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] opacity-[0.10] mix-blend-screen pointer-events-none z-10">
        <img 
          src={icon} 
          alt="Novaliseo Graphic" 
          className="h-[750px] w-auto object-contain drop-shadow-[0_0_80px_rgba(59,130,246,0.6)]" 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pointer-events-none mt-20">
        <div className="max-w-4xl text-left pointer-events-auto">
          <h1 className="mb-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1]">
            Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">
              Intelligence
            </span>
          </h1>

          <p className="mb-10 text-xl md:text-2xl leading-relaxed text-slate-300 font-light max-w-2xl">
            Engineering next-generation software intelligence. We build autonomous, scalable platforms designed to solve the world's most complex challenges
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/platforms" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              Explore Platform <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/solutions" className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
              View Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
