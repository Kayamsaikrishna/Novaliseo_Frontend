import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, AlertCircle, Calendar, User, BookOpen, Download } from 'lucide-react';
import certificatesData from '../data/certificates.json';

interface Certificate {
  name: string;
  type: string;
  stream: string;
  date: string;
  folder: string;
  filename: string;
}

const CertificateVerifyPage = () => {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setError(false);
    setResult(null);

    // Simulate a cinematic check delay
    setTimeout(() => {
      const found = (certificatesData as Record<string, Certificate>)[certId.trim().toUpperCase()];
      if (found) {
        setResult(found);
      } else {
        setError(true);
      }
      setIsSearching(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-[#020617]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
            CERTIFICATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">VERIFICATION</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Validate the authenticity of Novaliseo professional certifications and internship credentials.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleVerify}
          className="relative max-w-2xl mx-auto mb-16"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-[#0f172a] border border-white/10 rounded-2xl p-2">
              <Search className="ml-4 text-slate-500 w-6 h-6" />
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g. NOV-XXXX-XXXX-XX)"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-4 text-lg font-medium placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={isSearching || !certId.trim()}
                className="bg-blue-600 px-8 py-4 rounded-xl text-white font-bold hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? "Verifying..." : "Verify"}
              </button>
            </div>
          </div>
        </motion.form>

        <AnimatePresence mode="wait">
          {isSearching && (
            <motion.div
              key="searching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="w-12 h-12 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-blue-400 font-mono text-sm tracking-widest animate-pulse">QUERYING BLOCKCHAIN REGISTRY...</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Invalid Certificate ID</h3>
              <p className="text-slate-400">The ID provided does not match any record in our system. Please check for typos and try again.</p>
            </motion.div>
          )}

          {result && !isSearching && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              {/* Certificate Image/Preview */}
              <div className="lg:col-span-3">
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 transition-all hover:border-blue-500/50 shadow-2xl">
                  <img
                    src={`/certificates/${result.folder}/${result.filename}`}
                    alt="Certificate"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => window.open(`/certificates/${result.folder}/${result.filename}`, '_blank')}
                      className="bg-white text-black p-4 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      <Download className="w-5 h-5" /> View Full Document
                    </button>
                  </div>
                </div>
              </div>

              {/* Metadata Display */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <div>
                    <h4 className="text-green-500 font-bold text-lg leading-none mb-1">Authenticity Verified</h4>
                    <p className="text-slate-400 text-sm">This is a legitimate Novaliseo credential issued to the individual below.</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recipient Name</p>
                    <div className="flex items-center gap-3 text-white">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className="text-xl font-bold tracking-tight">{result.name}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Program / Course</p>
                    <div className="flex items-center gap-3 text-white">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <span className="text-lg font-medium">{result.stream} ({result.type})</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Issue Date</p>
                    <div className="flex items-center gap-3 text-white">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-lg font-medium">{result.date}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-500 italic">Reference ID: {certId.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificateVerifyPage;
