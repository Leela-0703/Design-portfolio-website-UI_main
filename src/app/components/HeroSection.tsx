import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router';

export function HeroSection() {
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLogoAnimationComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 10) % 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + (i % 5) * 2,
              repeat: Infinity,
              delay: (i % 5) * 1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Logo */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* INK & IMAGINATION Logo */}
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              INK
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &amp;
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              IMAGINATION
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg md:text-xl text-muted-foreground mt-8 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Product design, brand systems, and visual storytelling.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: logoAnimationComplete ? 1 : 0, y: logoAnimationComplete ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4 mb-14"
        >
          {[
            'Product design case studies built around clarity and flow.',
            'Brand systems that stay consistent across print and digital.',
            'Illustration and campaign work with a stronger visual voice.',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">Portfolio focus</p>
              <p className="text-base leading-relaxed text-foreground/85">{item}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: logoAnimationComplete ? 1 : 0, y: logoAnimationComplete ? 0 : 30 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Leela Sri Harshini
            </h1>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-lg md:text-xl text-muted-foreground mb-8">
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                UI/UX Designer
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                Brand Designer
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  Illustrator
              </span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                  Campaign Designer
              </span>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Designing work that connects clarity, creativity, and purposeful communication across digital and print media.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/#projects">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-medium text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Featured Work
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="px-8 py-4 border border-foreground/20 rounded-full font-medium text-lg hover:bg-foreground/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 border border-foreground/20 rounded-full font-medium text-lg hover:bg-foreground/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: logoAnimationComplete ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
