import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaCheckCircle } from 'react-icons/fa';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Sign up at https://www.emailjs.com/ (free - 200 emails/month)
// 1. Create a Service (connect your Gmail)
// 2. Create an Email Template
// 3. Paste your Service ID, Template ID, and Public Key below
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_CONTACT = process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT || 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_TEMPLATE_DEFENCE = process.env.REACT_APP_EMAILJS_TEMPLATE_DEFENCE || 'YOUR_DEFENCE_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const location = useLocation();
  const isDefence = location.state?.type === 'defence-partnership';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: isDefence ? 'Strategic Defence Partnership Inquiry' : '',
    message: ''
  });

  const [defenceLoading, setDefenceLoading] = useState(true);

  React.useEffect(() => {
    if (isDefence) {
      const timer = setTimeout(() => setDefenceLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isDefence]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateId = isDefence ? EMAILJS_TEMPLATE_DEFENCE : EMAILJS_TEMPLATE_CONTACT;

      const templateParams = isDefence
        ? {
          rank: formData.name,
          org_id: formData.company,
          org_type: formData.subject,
          official_email: formData.email,
          requirement: formData.message,
        }
        : {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        };

      await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, EMAILJS_PUBLIC_KEY);

      toast.success("Thank you for contacting us! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Something went wrong. Please try again or email us directly at info@novaliseo.com');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91 8217589409',
      link: 'tel:+918217589409'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@novaliseo.com',
      link: 'mailto:info@novaliseo.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: 'Bengaluru, Karnataka, India',
      link: null
    }
  ];

  /* --- Defence Mode --- */
  if (isDefence) {
    if (defenceLoading) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-900 font-sans">
          <FaShieldAlt className="text-6xl mb-6 text-blue-900 animate-pulse" />
          <h2 className="text-2xl mb-2 font-bold tracking-widest text-slate-900">ESTABLISHING SECURE CONNECTION</h2>
          <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 animate-progress"></div>
          </div>
          <p className="mt-4 text-xs text-slate-500 font-medium">ENCRYPTION: AES-256-GCM // VERIFYING CREDENTIALS</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto border border-slate-200 bg-white rounded-2xl shadow-xl relative overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-blue-400 text-xl" />
              <span className="font-bold tracking-wider text-sm">NOVALISEO DEFENCE PORTAL</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium bg-slate-800 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SECURE UPLINK ACTIVE
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-blue-50 border-b border-blue-100 p-4 text-blue-800 text-sm flex items-start gap-3">
            <FaLock className="mt-1 text-blue-600" />
            <div>
              <strong>Official Use Only:</strong> This channel is reserved for government and authorized defence partners.
              All communications are encrypted and logged for security compliance.
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Strategic Partnership Inquiry</h1>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Initiate a dialogue regarding sovereign defence capabilities. Please provide official credentials for verification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Rank / Title</label>
                  <input type="text" name="name" onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="e.g. Wing Commander / Director" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service No. / Org ID</label>
                  <input type="text" name="company" onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="Official ID / Employee Code" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Organization Type</label>
                  <select name="subject" onChange={handleChange} className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium cursor-pointer">
                    <option>Indian Army</option>
                    <option>Indian Navy</option>
                    <option>Indian Air Force</option>
                    <option>DRDO / Tech Lab</option>
                    <option>Defence PSU</option>
                    <option>Private Defence Contractor</option>
                    <option>Govt. Agency (Other)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Official Email</label>
                  <input type="email" name="email" onChange={handleChange} required className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all font-medium" placeholder="user@gov.in / user@mil" />
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><FaCheckCircle className="text-green-500" /> Must use official domain</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Requirement Brief</label>
                <textarea name="message" onChange={handleChange} rows={5} required className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none font-medium" placeholder="Describe the capability gap or operational requirement..."></textarea>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <label className="flex items-start gap-3 cursor-pointer group p-4 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                  <input type="checkbox" required className="mt-1 w-5 h-5 bg-white border-slate-300 rounded text-blue-600 focus:ring-0 cursor-pointer" />
                  <span className="text-sm text-slate-600 font-medium select-none">
                    I certify that I am authorized to initiate this inquiry on behalf of my organization and that this communication does not contain classified information at this stage.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={loading} className="w-full py-4 bg-slate-900 hover:bg-blue-900 text-white font-bold tracking-wide rounded-full transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {loading ? 'TRANSMITTING...' : <><FaPaperPlane /> SUBMIT OFFICIAL INQUIRY</>}
              </button>
            </form>
          </div>

          <div className="bg-slate-50 p-3 text-center text-xs text-slate-400 font-medium border-t border-slate-200">
            System ID: NVL-DEF-GATE-09 &bull; IP LOGGED &bull; {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Let's Build</span>
              <br />
              <span className="text-slate-900">Something Amazing</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Get in touch with our team to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
                data-testid={`contact-info-${index}`}
              >
                <info.icon className="text-4xl text-[#3b82f6] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-slate-600 hover:text-[#06b6d4] transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-slate-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      data-testid="contact-form-name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      data-testid="contact-form-email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      data-testid="contact-form-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full"
                      placeholder="e.g., +91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-600 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      data-testid="contact-form-company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input w-full"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-600 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    data-testid="contact-form-subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input w-full"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-form-message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-input w-full resize-none"
                    placeholder="Please provide details about your project, requirements, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-form-submit"
                  className="w-full px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
                >
                  {loading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent to-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Us</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Visit our headquarters in the heart of India's tech capital
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-3xl overflow-hidden border border-[#3b82f6]/30"
          >
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.2189236639!2d77.41878045!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NOVALISEO Location"
                className="rounded-3xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;