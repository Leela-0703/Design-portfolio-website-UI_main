import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Work', to: '/work' },
    { name: 'About', to: '/about' },
    { name: 'Process', to: '/process' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative group">
              <div className="flex items-center gap-3">
                {/* 3D Blue Diamond */}
                <motion.svg
                  width="32"
                  height="38"
                  viewBox="0 0 32 38"
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <defs>
                    <linearGradient id="nav-diamond-top" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="nav-diamond-bot" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1e3a8a" stopOpacity="1" />
                    </linearGradient>
                    <filter id="nav-glow">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  {/* Crown */}
                  <polygon points="16,1 4,14 28,14" fill="url(#nav-diamond-top)" filter="url(#nav-glow)" />
                  {/* Pavilion */}
                  <polygon points="4,16 28,16 16,37" fill="url(#nav-diamond-bot)" filter="url(#nav-glow)" />
                  {/* Girdle */}
                  <rect x="4" y="14" width="24" height="2" fill="#60a5fa" />
                  {/* Highlight */}
                  <polygon points="16,3 8,12 16,9" fill="white" opacity="0.35" />
                  {/* Sparkle */}
                  <motion.circle cx="10" cy="8" r="1.2" fill="white" opacity="0.9"
                    animate={{ opacity: [0.9, 0.2, 0.9] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.svg>
                <span className="text-xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                  INK<span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">&amp;</span>IMAGINATION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="relative group"
                >
                  <span className="text-foreground/70 hover:text-foreground transition-colors">
                    {link.name}
                  </span>
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                    />
                  )}
                </Link>
              ))}
              <a 
                href="#resume"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`text-xl ${
                      location.pathname === link.to
                        ? 'text-foreground font-medium'
                        : 'text-foreground/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="#resume"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-medium w-fit"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
