/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Globe, 
  Rocket, 
  Users, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Music,
  Mail, 
  MessageSquare,
  Phone,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Target,
  Layers,
  Cpu,
  Sun,
  Moon
} from 'lucide-react';

// --- Components ---

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-brand-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-brand-400/5 rounded-full blur-[80px] animate-blob animation-delay-4000" />
      
      {/* SVG Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated SVG Lines */}
      <motion.svg 
        className="absolute top-0 left-0 w-full h-full opacity-10" 
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,200 Q250,100 500,200 T1000,200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M0,800 Q250,900 500,800 T1000,800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <div className="absolute top-6 right-6 z-10">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 sm:p-12 overflow-y-auto max-h-[90vh]">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Request a Quote</h3>
                <p className="text-slate-600 dark:text-slate-400">Tell us about your vision and let's build something extraordinary together.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Kamara"
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-all outline-none" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-all outline-none" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Project Category</label>
                  <select className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-all outline-none appearance-none">
                    <option>Website</option>
                    <option>Mobile App</option>
                    <option>Web & Web App Development</option>
                    <option>Digital Consulting</option>
                    <option>Web & Mobile Apps Development</option>
                    <option>Digital Solutions Consulting</option>
                    <option>Infrastructure Deployment</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Project Details</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white transition-all outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl shadow-xl shadow-brand-500/20 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Inquiry
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 mt-4">
                  By clicking send, you agree to our privacy policy. We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ isDark, setIsDark, onQuoteClick }: { isDark: boolean, setIsDark: (v: boolean) => void, onQuoteClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Global', href: '#global' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
            LibMon <span className="text-brand-500">Global</span> Technologies
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button 
            onClick={onQuoteClick}
            className="px-4 lg:px-5 py-2.5 bg-slate-900 dark:bg-brand-600 text-white rounded-full text-xs lg:text-sm font-medium hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200 dark:hover:shadow-brand-900/20 whitespace-nowrap"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className="p-2 text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden border-t border-slate-100 dark:border-slate-800"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 dark:text-slate-300 active:text-brand-600"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setIsMobileMenuOpen(false); onQuoteClick(); }}
              className="mt-4 w-full py-4 bg-brand-600 text-white rounded-xl text-center font-bold cursor-pointer"
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onQuoteClick }: { onQuoteClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FBFBFB] dark:bg-slate-950 bg-grain">
      <GeometricBackground />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-brand-200 dark:border-brand-800/50">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Global Digital Engineering
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-[1.1] lg:leading-[0.95] mb-8 tracking-tighter"
          >
            Crafting <br className="xs:hidden" />
            <span className="text-brand-600 relative inline-block">
              Digital
              <motion.svg
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 5.5C40.5 2.16667 151.7 -2.4 299 6.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg>
            </span>
            <br />
            Infrastructure.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light max-w-xl mx-auto md:mx-0"
          >
            Empowering the Liberian community and global visionaries through world-class software solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="px-7 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-600 dark:hover:bg-brand-500 hover:text-white transition-all group shadow-lg hover:scale-105 active:scale-95">
              Explore Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onQuoteClick}
              className="px-7 py-3 bg-slate-900 dark:bg-white dark:text-slate-950 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-600 dark:hover:bg-brand-500 hover:text-white transition-all group shadow-lg hover:scale-105 active:scale-95"
            >
              Get a Quote
              <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
           style={{ perspective: 1000 }}
           className="hidden md:block relative h-[600px]"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [5, -5, 5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-20"
          >
            {/* Desktop Mockup */}
            <div className="bg-slate-900 dark:bg-black border border-slate-800 rounded-3xl p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-[500px] ml-auto">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="aspect-video bg-slate-800/50 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 to-transparent" />
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                       <div className="h-4 w-32 bg-brand-500/30 rounded-full" />
                       <div className="h-2 w-20 bg-white/10 rounded-full" />
                    </div>
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-700" />)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                       <div className="h-2 w-full bg-white/10 rounded-full" />
                       <div className="h-2 w-full bg-white/10 rounded-full" />
                       <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                       <div className="pt-4">
                         <div className="h-10 w-24 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/20" />
                       </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl border border-white/10 p-4 aspect-square flex items-center justify-center relative overflow-hidden">
                       <motion.div 
                         initial={{ rotate: 0 }}
                         animate={{ rotate: 360 }}
                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                         className="w-24 h-24 border-2 border-dashed border-brand-500/30 rounded-full"
                       />
                       <Code2 className="absolute text-brand-400" size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Mobile Mockup */}
          <motion.div
            animate={{
              y: [20, -10, 20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-10 -left-10 z-30 w-48 h-96 bg-slate-900 dark:bg-slate-800 border-4 border-slate-800 rounded-[2.5rem] shadow-2xl p-4 hidden lg:block"
          >
            <div className="w-12 h-1 bg-slate-800 rounded-full mx-auto mb-6" />
            <div className="space-y-4">
              <div className="h-6 w-full bg-brand-500/20 rounded-lg flex items-center px-3">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse mr-2" />
                <div className="h-1 w-12 bg-brand-500/40 rounded-full" />
              </div>
              <div className="h-32 w-full bg-white/5 rounded-2xl p-3 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5 pt-1">
                    <div className="h-1.5 w-16 bg-white/20 rounded-full" />
                    <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <Target size={14} className="text-brand-400" />
                  </div>
                </div>
                <div className="h-12 w-full bg-brand-500/10 rounded-lg relative overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"
                   />
                </div>
              </div>
              <div className="h-24 w-full bg-white/5 rounded-2xl p-3">
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
                      <Users size={10} className="text-slate-400" />
                    </div>
                    <div className="h-1 w-20 bg-white/10 rounded-full" />
                 </div>
                 <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4].map(i => <div key={i} className="h-8 bg-white/5 rounded-lg" />)}
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Commitment = () => {
  const statements = [
    {
      title: "Our Mission",
      content: "To build a digital bridge that connects Liberian innovators across the globe, providing elite software craftsmanship that drives economic progress.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Our Vision",
      content: "To become the premier engineering hub for the African diaspora, setting the standard for technical excellence and community-focused digital transformation.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Our Values",
      content: "Precision in every line of code, transparency in every partnership, and an unwavering commitment to the growth of our people.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {statements.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:bg-brand-600 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:bg-white group-hover:text-brand-600 transition-colors">
                {s.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-white">{s.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-brand-50">
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Horizontal Scroll */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Our Ecosystem</p>
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 items-center whitespace-nowrap"
            >
              {[
                "React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", 
                "Docker", "AWS", "Google Cloud", "Firebase", "Redis",
                "Python", "GraphQL", "Tailwind CSS", "Framer Motion",
                "React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", 
                "Docker", "AWS", "Google Cloud", "Firebase", "Redis",
                "Python", "GraphQL", "Tailwind CSS", "Framer Motion"
              ].map((tech, i) => (
                <span key={i} className="text-3xl font-bold text-slate-200 dark:text-slate-800 hover:text-brand-500 transition-colors cursor-default select-none">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden relative group shadow-xl border border-white/5"
              >
                 {/* Cinematic Video Background */}
                 <video 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                   onClick={(e) => e.currentTarget.play()}
                   className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                 >
                   <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1731-large.mp4" type="video/mp4" />
                 </video>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                 
                 {/* Narrative Overlay */}
                 <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">Narrator (A Deep Professional Voice): "We are LibMon..."</p>
                    </motion.div>
                 </div>

                 {/* Play Interface */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-16 h-16 rounded-full bg-brand-600/90 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:bg-brand-500 transition-colors"
                   >
                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                   </motion.button>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                  alt="Tech in Africa" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                  alt="Code Development" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white text-[10px] font-bold uppercase tracking-widest">Global Engineering</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-brand-600 p-6 rounded-2xl text-white shadow-2xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Cpu size={20} className="text-brand-100" />
                </div>
                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-[10px] uppercase font-bold text-brand-100">Digital Execution</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em]">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              A Bridge Between Expertise <br className="hidden md:block"/>and Action.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded by a NuCamp Software Engineering alumni, LibMon Global Technologies was born from a simple mission: to provide the Liberian community—locally and in the diaspora—with world-class software engineering.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We understand the unique challenges of entrepreneurs and small businesses because we've been in the trenches with them. Today, we're scaling that experience into a global agency that builds everything from minimalist web apps to complex enterprise systems.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg">
                  <Target className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Purpose Driven</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Focused on community growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg">
                  <Layers className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Modern Stack</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">The latest in React & Node.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurTeam = () => {
  const team = [
    {
      name: "Pete Cooper",
      role: "Founder, CEO & Lead Engineer",
      image: "bg-brand-600/10",
      desc: "Visionary leader with a passion for bridging the technical gap for Liberian entrepreneurs."
    },
    {
      name: "Maurene Cooper",
      role: "COO/Health Technical Director",
      image: "bg-brand-200/10",
      desc: "Specializes in integrating healthcare technology solutions and digital health strategies."
    },
    {
      name: "Kawusu Sesay",
      role: "Health Technical Manager",
      image: "bg-brand-100/10",
      desc: "Manages technical health operations and ensures high-quality health data management."
    },
    {
      name: "Satta Flomo",
      role: "Product Designer",
      image: "bg-brand-500/10",
      desc: "Specializes in creating intuitive user experiences that resonate with a global audience."
    },
    {
      name: "Abraham Doe",
      role: "Full Stack Developer",
      image: "bg-brand-400/10",
      desc: "Expert in building scalable backend systems and high-performance web applications."
    },
    {
      name: "Blessing Johnson",
      role: "Cloud Architect",
      image: "bg-brand-300/10",
      desc: "Ensures worldwide availability and security for all LibMon Global deployments."
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.3em] mb-4">Our People</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">The Minds Behind LibMon Global.</h3>
          </motion.div>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
            A diverse group of engineers and designers dedicated to your digital success.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 group"
            >
              <div className={`aspect-square ${member.image} rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden`}>
                <Users size={64} className="text-brand-600 opacity-20" />
                <div className="absolute inset-0 bg-brand-600/0 group-hover:bg-brand-600/10 transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
              <p className="text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      icon: (
        <div className="relative">
          <Code2 className="w-8 h-8 relative z-10" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-brand-500 rounded-full blur-md"
          />
        </div>
      ),
      title: "Web Development",
      desc: "Robust full-stack applications with high-performance architectures and modern security standards."
    },
    {
      icon: (
        <div className="relative">
          <Layers className="w-8 h-8 relative z-10" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-brand-500/30 rounded-full scale-150"
          />
        </div>
      ),
      title: "Web & Mobile Apps Development",
      desc: "Responsive, platform-independent experiences designed for maximum engagement across all devices."
    },
    {
      icon: (
        <div className="relative">
          <Cpu className="w-8 h-8 relative z-10" />
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full"
          />
        </div>
      ),
      title: "Digital Solutions Consulting",
      desc: "Custom enterprise software and automation tools that streamline operations and drive results."
    },
    {
      icon: (
        <div className="relative">
          <Rocket className="w-8 h-8 relative z-10" />
          <motion.div 
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-full h-1 bg-brand-500/20 rounded-full"
          />
        </div>
      ),
      title: "Website Deployment",
      desc: "Cloud infrastructure optimization and worldwide CDN deployment for lightning-fast speeds."
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] fill-white dark:fill-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c68.4-15.61,139.73-30,210-25.2,56,3.8,111.41,11.59,111.39,21.64Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.3em] mb-4">Our Services</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">Engineered for Success.</h3>
          </motion.div>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
            Bringing elite technical expertise to every project, from Monrovia to the global stage.
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -12, backgroundColor: "rgba(16, 185, 129, 0.02)" }}
              className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-slate-800 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-8">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "FinTech for Diaspora",
      category: "Web Application",
      image_url: "https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=1200",
      desc: "A custom platform for cross-border transactions specifically for the Liberian community."
    },
    {
      title: "CommerceHub",
      category: "E-Commerce",
      image_url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200",
      desc: "Scaling a local Liberian business into the global digital marketplace."
    }
  ];

  return (
    <section id="work" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em]">Featured Work-Coming Soon</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Crafting experiences that deliver results.</h3>
          </div>
          <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            See all projects <ChevronRight />
          </button>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-3xl mb-8 relative overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-800">
                <img 
                  src={p.image_url} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="bg-white dark:bg-slate-900 dark:text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl">
                    View Project <ExternalLink size={18} />
                  </div>
                </div>
              </div>
              <p className="text-brand-600 dark:text-brand-400 font-bold text-sm tracking-widest uppercase mb-2">{p.category}</p>
              <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{p.title}</h4>
              <p className="text-lg text-slate-600 dark:text-slate-400">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  return (
    <section id="global" className="py-24 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <Globe size={800} className="absolute -right-1/4 -top-1/4 text-brand-500" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-brand-500/20 rounded-full text-brand-400 text-xs font-bold uppercase tracking-widest">
              Diaspora Focused
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Connecting <span className="text-brand-500">Monrovia</span> to the World.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              We specialize in building solutions for entrepreneurs, startups, and small businesses leveraging the Liberian community across the US, Canada, Europe, Australia, and Africa as our niche. We don't just build software; we build the digital infrastructure for our people.
            </p>
            
            <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto md:mx-0">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center md:text-left">
                <p className="text-3xl font-bold text-white mb-2">4</p>
                <p className="text-brand-500 font-bold text-sm uppercase tracking-widest">Continents</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold text-white mb-2">24/7</p>
                <p className="text-brand-500 font-bold text-sm uppercase tracking-widest">Support Policy</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            className="space-y-4 relative group"
          >
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative p-8 bg-brand-600 dark:bg-slate-900 rounded-3xl shadow-2xl border border-brand-500/20 overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <p className="relative text-2xl font-bold mb-6 italic leading-snug">
                "We are mainly targeting entrepreneurs and small businesses from all walks of life, especially our Liberian community."
              </p>
              
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-200 border border-white/40 shadow-inner flex items-center justify-center">
                  <span className="text-brand-900 font-bold">LM</span>
                </div>
                <div>
                  <p className="font-bold">Pete Cooper, Founder, CEO & Lead Engineer</p>
                  <p className="text-brand-100 dark:text-brand-400 text-sm font-medium">LibMon Global Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em]">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Let's build something <br className="hidden md:block"/>extraordinary.</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Have a project idea? Reach out to us. We love working with entrepreneurs who are ready to make a mark.
            </p>
            
            <div className="space-y-6 pt-4 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                  <Mail />
                </div>
                <p className="text-lg font-medium text-slate-800 dark:text-slate-200">cooperdev@gmail.com</p>
              </div>

              {/* USA Contact */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex-shrink-0 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1">USA Headquarters</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Fargo, North Dakota</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">6472 21St St S, Fargo 58104</p>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Phone size={14} />
                    <span className="font-medium">+1 (701) 405-2629</span>
                  </div>
                </div>
              </div>

              {/* Liberia Contact */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex-shrink-0 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1">Liberia Contact</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Paynesville, Duport Road</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">Monrovia, Liberia</p>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Phone size={14} />
                    <span className="font-medium">(+231) 880512232</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 pt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 dark:hover:bg-brand-600 hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 dark:hover:bg-brand-600 hover:text-white transition-all"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="p-10 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-brand-600 outline-none transition-all" placeholder="John Kamara" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-brand-600 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase">Project Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-brand-600 outline-none transition-all appearance-none">
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>Web Application</option>
                  <option>E-Commerce</option>
                  <option>Digital Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-brand-600 outline-none transition-all" placeholder="Tell us about your vision..." />
              </div>
              <button className="w-full py-4 bg-slate-900 dark:bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socials = [
    { name: 'Facebook', icon: <Facebook size={18} />, href: '#' },
    { name: 'TikTok', icon: <Music size={18} />, href: '#' },
    { name: 'YouTube', icon: <Youtube size={18} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'X', icon: <Twitter size={18} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: '#' },
  ];

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">LibMon Global Technologies</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all shadow-sm"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-brand-600 text-sm font-medium transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-brand-600 text-sm font-medium transition-colors">Terms</a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 dark:border-slate-900 flex justify-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} LibMon Global Technologies. All rights reserved. 
            <span className="mx-2">|</span> 
            Fargo, North Dakota, Liberia & Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

const TechStack = () => {
  const techs = [
    "TypeScript", "React", "Node.js", "Express", "PostgreSQL", 
    "Tailwind CSS", "Framer Motion", "Git", "REST APIs", "Vite"
  ];

  return (
    <div className="py-12 border-y border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Our Core Tech Stack</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-50 dark:opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {techs.map((tech) => (
            <span key={tech} className="text-xl font-bold text-slate-800 dark:text-slate-200 font-mono tracking-tighter italic">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pipeline = () => {
  const ideas = [
    {
      title: "Liberian Real Estate Connect",
      type: "Enterprise",
      status: "In Concept",
      desc: "Bridging diaspora investors with verified local properties."
    },
    {
      title: "AgroTech Monrovia",
      type: "Supply Chain",
      status: "Planning",
      desc: "A digital marketplace for local farmers to sell directly to retailers."
    },
    {
      title: "LibMonBridge Learning",
      type: "Education",
      status: "Concept",
      desc: "Mentorship platform for aspiring Liberian entreprenurs"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 uppercase tracking-[0.2em]">The Pipeline</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">What's coming next.</h3>
          </div>
          <p className="max-w-md text-slate-600 dark:text-slate-400 text-center md:text-right">
            We are always dreaming big. Here are a few projects we're currently ideating for the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-brand-600/50 transition-all group shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                 <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500">{idea.type}</div>
                 <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 transition-colors">{idea.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-medium uppercase tracking-widest">{idea.status}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{idea.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <main>
        <Hero onQuoteClick={() => setIsQuoteModalOpen(true)} />
        <Commitment />
        <TechStack />
        <About />
        <OurTeam />
        <Services />
        <Work />
        <Pipeline />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
