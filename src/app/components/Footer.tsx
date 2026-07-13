import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-border overflow-hidden">
      {/* Diamond Animation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-lg rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 405],
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* The Shared "I" Returns */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Every project begins with a single idea.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's create something meaningful together.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href="mailto:leelasriharshini@example.com"
                className="flex items-center gap-2 text-lg hover:text-purple-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg hover:text-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>

            {/* Download Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.a
                href="#resume"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <motion.a
                href="#portfolio"
                className="px-6 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio PDF
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-16 pb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Work
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/process" className="hover:text-foreground transition-colors">
              Process
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>© {currentYear} INK & IMAGINATION. Designed & Built by Leela Sri Harshini.</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
