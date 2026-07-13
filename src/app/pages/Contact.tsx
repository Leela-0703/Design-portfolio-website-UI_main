import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram, Download, Send, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo portfolio, so the message won\'t be sent.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'leelasriharshini@example.com',
      link: 'mailto:leelasriharshini@example.com',
      color: '#8b5cf6'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/leelasriharshini',
      link: 'https://linkedin.com',
      color: '#3b82f6'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@leelasriharshini',
      link: 'https://github.com',
      color: '#06b6d4'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@inkimagination',
      link: 'https://instagram.com',
      color: '#ec4899'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          {/* The Shared "I" */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
          </motion.div>

          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Every project begins with a single idea.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's create something meaningful together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Send a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hi—I'd love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-medium text-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, creative collaborations, or answering questions about my work.
                </p>
                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Based in India, Available Worldwide</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${method.color}20` }}
                    >
                      <method.icon className="w-6 h-6" style={{ color: method.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                        {method.title}
                      </p>
                      <p className="text-lg">{method.value}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="space-y-4 pt-8">
                <motion.a
                  href="#resume"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
                <motion.a
                  href="#portfolio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Portfolio PDF
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm uppercase tracking-wider text-green-500">Currently Available</span>
            </div>
            <h3 className="text-3xl md:text-4xl mb-4">Open for New Opportunities</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm actively seeking design internships, freelance projects, and collaborative opportunities. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <motion.button
                  className="px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
