import React from "react";
import NoiseBlobsHero from "../components/NoiseBlobsHero";
import TrainingOfferingsShowcase from "../components/TrainingOfferingsShowcase";

export default function IndustryTrainingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 relative selection:bg-cyan-500/20 overflow-x-hidden">
      
      {/* ================= 1. FULL-SCREEN 3D NOISE BLOBS HERO (AUTOMATIC SINGLE SCREEN FIT) ================= */}
      <NoiseBlobsHero />

      {/* ================= 2. WHAT WE DO & WHAT WE OFFER SHOWCASE ================= */}
      <TrainingOfferingsShowcase />



      {/* ================= 3. TESTIMONIAL COMPONENT (HIDDEN FOR NOW) ================= */}
      {/* <TrainingTestimonial /> */}

    </div>
  );
}
