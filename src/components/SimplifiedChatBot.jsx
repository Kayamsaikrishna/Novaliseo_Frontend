import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaTimes, FaCommentDots, FaRobot, FaUsers, FaMicrochip, FaRocket, FaUserTie } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import chatbotIcon from '../assets/icon.png';
import { useLocation } from 'react-router-dom';

// Advanced Knowledge Base with weighted keywords
const KNOWLEDGE_BASE = [
  // --- CORE IDENTITY ---
  {
    id: 'greetings',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening', 'sup', 'yo'],
    responses: [
      "Hello! 👋 I'm your intelligence guide to NOVALISEO. I can help you explore our Defence Systems, Engineering Services, Innovation Lab, or Careers. What's on your mind?",
      "Hi there! 🚀 Ready to discover how NOVALISEO is shaping the future of intelligence? Ask me about our projects, team, or latest blog updates!",
      "Greetings! 🌟 I'm fully loaded with knowledge about our entire platform. Curious about our Ultra-Low Latency drones or our Generative Intelligence solutions?"
    ],
    weight: 1
  },
  {
    id: 'identity',
    keywords: ['who are you', 'what are you', 'bot', 'real', 'human', 'ai'],
    responses: [
      "I am the NOVALISEO Intelligent Assistant, a specialized intelligence guide designed to guide you through our engineering ecosystem. 🧠 I can explain complex technical topics, guide you to specific services, or help you apply for a job.",
      "Think of me as a digital engineer who knows everything about NOVALISEO. 🛠️ I'm here to save you time and get you the exact information you need about our Sovereign Defence Tech or Enterprise Solutions."
    ],
    weight: 2
  },

  // --- DEFENCE SECTOR ---
  {
    id: 'defence_general',
    keywords: ['defence', 'defense', 'military', 'security', 'border', 'surveillance', 'army', 'navy', 'air force'],
    responses: [
      "Our Defence division builds indigenous, sovereign intelligence for critical national security missions. 🛡️ We focus on:\n\n• **GPS-Denied Navigation**: Autonomy without satellites.\n• **Attitude Control**: Uncrashable flight stability.\n• **Edge Intelligence**: Zero-latency processing on-chip.\n\nAsk me about a specific technology like 'Edge Efficiency' or 'Denied Navigation'!",
      "We are revolutionizing tactical autonomy. Our systems run advanced intelligence directly on the drone (Edge Computing), allowing for millisecond reaction times even in jammed environments. 🚁"
    ],
    weight: 4
  },
  {
    id: 'defence_denied_nav',
    keywords: ['gps', 'denied', 'navigation', 'satellite', 'jamming', 'spoofing', 'signal', 'lost'],
    responses: [
      "Our **GPS-Denied Navigation** technology allows drones to operate fully autonomously even when GPS signals are jammed or spoofed. 🛰️🚫\n\nWe use **Visual Odometry** and **SLAM** (Simultaneous Localization and Mapping) to navigate by 'seeing' the terrain, just like a human pilot would.",
    ],
    weight: 5
  },
  {
    id: 'defence_attitude',
    keywords: ['attitude', 'control', 'stability', 'crash', 'wind', 'gust', 'balance', 'pid'],
    responses: [
      "Our **Neural Attitude Control** replaces standard PID controllers with deep learning. 🧠✈️\n\nIt learns the physics of the drone in real-time, allowing it to stay stable even if a motor fails, a wing is damaged, or it hits severe wind gusts. It's effectively 'uncrashable' by environmental factors.",
    ],
    weight: 5
  },
  {
    id: 'defence_latency',
    keywords: ['latency', 'speed', 'delay', 'lag', 'processing', 'compute', 'edge', 'chip'],
    responses: [
      "Speed is survival. ⚡ Our **Ultra-Low Latency** systems process intelligence inference directly on the drone using custom NPU (Neural Processing Unit) optimizations.\n\nThis shrinks the OODA loop (Observe-Orient-Decide-Act) to milliseconds, completely removing the need for a slow link to a ground station.",
    ],
    weight: 5
  },

  // --- SERVICES & INDUSTRIES ---
  {
    id: 'services',
    keywords: ['service', 'offer', 'consulting', 'capability', 'what do you do', 'business'],
    responses: [
      "We provide end-to-end intelligence engineering services for enterprises: 💡\n\n1. **Generative Intelligence**: Custom LLMs, RAG, and automated content pipelines.\n2. **Computer Vision**: Automated inspection, surveillance, and medical imaging.\n3. **Predictive Analytics**: Forecasting for energy, finance, and supply chain.\n4. **MLOps**: Scalable model deployment and monitoring.\n\nWhich area matches your needs?",
    ],
    weight: 3
  },
  {
    id: 'industries',
    keywords: ['industry', 'sector', 'domain', 'finance', 'healthcare', 'energy', 'manufacturing'],
    responses: [
      "NOVALISEO serves a wide range of industries: 🌍\n\n• **Manufacturing**: Predictive maintenance & quality control.\n• **Healthcare**: Intelligence-assisted diagnostics.\n• **Finance**: Fraud detection & algorithmic trading.\n• **Energy**: Grid load forecasting.\n\nTell me your industry, and I'll explain how we can help!",
    ],
    weight: 3
  },
  {
    id: 'projects',
    keywords: ['project', 'case study', 'portfolio', 'work', 'example', 'client'],
    responses: [
      "We've delivered impactful projects across the globe! 🌟\n\n• **Maritime Optimization**: Intelligence for route planning and fuel saving.\n• **Renewable Forecasting**: Predicting solar/wind output for grids.\n• **CAE Simulations**: Accelerating engineering simulations with intelligence.\n\nCheck out our **Projects** page for detailed case studies.",
    ],
    weight: 3
  },

  // --- INNOVATION LAB ---
  {
    id: 'innovation',
    keywords: ['lab', 'innovation', 'research', 'r&d', 'future', 'experiment', 'prototype'],
    responses: [
      "The **NOVALISEO Innovation Lab** is where we invent the future. 🧪\n\nWe are currently researching:\n• **Neuromorphic Computing**: Chips that think like brains.\n• **Swarm Intelligence**: Coordinating massive drone fleets.\n• **Quantum Intelligence**: Preparing for the post-silicon era.\n\nIt's our playground for breakthrough technologies!",
    ],
    weight: 4
  },

  // --- COMPANY & CAREERS ---
  {
    id: 'team',
    keywords: ['team', 'people', 'founder', 'staff', 'engineer', 'culture'],
    responses: [
      "NOVALISEO is driven by a passionate team of world-class engineers and intelligence researchers! 🚀\n\nWe specialize in:\n• **Intelligence Architecture**: Designing scalable neural systems.\n• **Generative Intelligence**: Building custom LLMs and diffusion models.\n• **MLOps**: Delivering production-grade reliability.\n\nWe are a team that dreams in code and builds for impact!",
    ],
    weight: 3
  },
  {
    id: 'careers',
    keywords: ['career', 'job', 'hiring', 'intern', 'vacancy', 'apply', 'join', 'role', 'position'],
    responses: [
      "We are always growing! 📈\n\nCurrently, we are looking for:\n• **AI Research Scientists**\n• **Full Stack Engineers**\n• **Embedded Systems Specialists**\n\nVisit our **Careers** page to apply. We look for passion, curiosity, and a drive to solve hard problems.",
    ],
    weight: 4
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'address', 'office', 'reach', 'location'],
    responses: [
      "Let's connect! 🤝\n\n• **Email**: info@novaliseo.com\n• **Strategic HQ**: Hyderabad, India\n• **Global Reach**: Serving clients worldwide.\n\nYou can also use the contact form on our site for a quick response.",
    ],
    weight: 4
  },

  // --- BLOG & UPDATES ---
  {
    id: 'blog',
    keywords: ['blog', 'news', 'update', 'article', 'read', 'latest'],
    responses: [
      "Our **Blog** is the best place to stay updated. 📰\n\nWe recently published articles on:\n• *The Future of Sovereign AI*\n• *Optimizing Transformer Models for Edge Devices*\n• *The Ethics of Autonomous Systems*\n\nHead over to the Blog section to read more!",
    ],
    weight: 3
  }
];

const UniqueCompanyBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "System initialized. 🟢 I am the NOVALISEO Intelligent Assistant. \n\nI have access to our entire knowledge base—from Defence R&D to Career opportunities. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef(null);
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (scrollAreaRef.current && isOpen) {
      setTimeout(() => {
        // Fallback for custom ScrollArea or standard div
        const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') || scrollAreaRef.current;
        if (scrollElement) {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }
      }, 100);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  // Advanced Intent Matching Logic
  const determineIntent = (input) => {
    const normalized = input.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    // Direct Exact Match Bonus
    KNOWLEDGE_BASE.forEach(topic => {
      let score = 0;
      topic.keywords.forEach(word => {
        if (normalized.includes(word)) {
          // Boost score if the word is less common or matches multiple words
          score += topic.weight + (word.length > 4 ? 2 : 1);
        }
      });

      // Contextual Boosts (simple simulation of context)
      if (normalized.length > 20 && score > 0) score += 1; // Long query bonus

      if (score > maxScore) {
        maxScore = score;
        bestMatch = topic;
      }
    });

    return maxScore > 2 ? bestMatch : null; // Threshold to prevent weak matches
  };

  const generateAIResponse = (userMessage) => {
    const intent = determineIntent(userMessage);

    if (intent) {
      // Return a random response from the matched intent
      return intent.responses[Math.floor(Math.random() * intent.responses.length)];
    }

    // Fallback contextual responses that encourage more specific queries
    const fallbacks = [
      "I'm analyzing your request... 🧠 It seems interesting, but I need a bit more detail. Are you asking about our **Intelligence Services**, **Defence Tech**, or perhaps **Job Openings**?",
      "That's a broad topic! 🌐 to give you the best answer, could you specify if this is related to a **Project**, our **Innovation Lab**, or general **Company Info**?",
      "I don't have a pre-programmed answer for that specific phrase, but I can deduce you might be interested in our technology. 🚀 Try asking about **Deep Learning**, **Drones**, or **Careers**!",
      "I'm tuned to answer questions about NOVALISEO. �️ Try asking: 'What is GPS-Denied Navigation?' or 'Do you offer Internships?'"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  const [inputValue, setInputValue] = useState('');

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Dynamic thinking time based on query complexity simulation
    const thinkingTime = 1000 + Math.random() * 1000;

    setTimeout(() => {
      const responseText = generateAIResponse(userMessage.text);
      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, thinkingTime);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Optional: Auto-send for smoother UX
    // handleSend(); 
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-end space-x-2">
              <img
                src={chatbotIcon}
                alt="NOVALISEO Icon"
                className="w-16 h-16 object-contain cursor-pointer drop-shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap border border-slate-700 mb-2 shadow-lg"
              >
                Intelligent Assistant Online
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-900"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden ring-1 ring-slate-800"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={chatbotIcon} alt="Bot" className="w-10 h-10 object-contain" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-950 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">NOVALISEO Intelligence</h3>
                  <p className="text-xs text-slate-400">Powered by Neural Cores</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <FaTimes className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div ref={scrollAreaRef} className="flex-1 p-4 overflow-y-auto bg-slate-900/50 scroll-smooth">
              <div className="space-y-6">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-3 shadow-md ${message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                        }`}
                    >
                      <div className="flex items-start space-x-3">
                        {message.sender === 'bot' && (
                          <FaRobot className="h-5 w-5 mt-1 text-blue-400 flex-shrink-0" />
                        )}
                        <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                          {message.text}
                        </div>
                        {message.sender === 'user' && (
                          <FaUserTie className="h-4 w-4 mt-1 text-blue-200 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-[10px] opacity-50 mt-2 text-right font-mono">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-800 border border-slate-700 text-slate-400 rounded-2xl rounded-bl-none px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <FaRobot className="h-4 w-4 text-blue-400" />
                        <span className="text-xs font-mono animate-pulse">Processing Query...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800">
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("Tell me about the Team")}
                  className="text-xs whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                >
                  <FaUsers className="h-3 w-3 mr-1.5" /> Team
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("What are your Services?")}
                  className="text-xs whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                >
                  <FaMicrochip className="h-3 w-3 mr-1.5" /> Services
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("Defence Capabilities")}
                  className="text-xs whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white"
                >
                  <FaRocket className="h-3 w-3 mr-1.5" /> Defence
                </Button>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-950 border-t border-slate-800">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask NOVALISEO Intelligence..."
                  className="flex-1 bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
                  size="icon"
                >
                  <FaPaperPlane className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UniqueCompanyBot;