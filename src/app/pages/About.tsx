import { motion } from 'motion/react';
import { Code, Palette, Lightbulb, Users, Award, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Systems Thinking',
      description: 'I like to connect screens, components, and content into a single design system that stays coherent as the product scales.',
      color: '#8b5cf6'
    },
    {
      icon: Users,
      title: 'Audience Awareness',
      description: 'I design with a clear sense of who the work is for, how they scan it, and what they need to understand immediately.',
      color: '#3b82f6'
    },
    {
      icon: Code,
      title: 'Product Clarity',
      description: 'I think in flows, states, hierarchy, and interactions so the final interface feels practical as well as polished.',
      color: '#06b6d4'
    },
    {
      icon: Palette,
      title: 'Visual Craft',
      description: 'I care about composition, spacing, typography, and tone because those decisions determine whether the work feels premium.',
      color: '#10b981'
    },
    {
      icon: Award,
      title: 'Iterative Discipline',
      description: 'I use feedback, refinement, and repeated passes to turn a good direction into a stronger final system.',
      color: '#f59e0b'
    },
    {
      icon: Heart,
      title: 'Purposeful Design',
      description: 'I want every piece to solve a real communication problem and leave the viewer with a clear next step.',
      color: '#ef4444'
    }
  ];

  const skills = {
    'Design': ['UI/UX Design', 'Brand Identity', 'Illustration', 'Typography', 'Prototyping', 'Design Systems'],
    'Tools': ['Figma', 'Adobe Creative Suite', 'Procreate', 'Framer', 'Spline', 'Blender'],
    'Technology': ['HTML/CSS', 'JavaScript', 'React', 'Three.js', 'Motion Design', 'Webflow'],
    'Process': ['User Research', 'Wireframing', 'Usability Testing', 'Design Thinking', 'Agile', 'Collaboration']
  };

  const experiences = [
    {
      role: 'Product Design',
      company: 'AIRA',
      period: 'Featured Case Study',
      description: 'An AI-powered resume intelligence concept focused on hierarchy, feedback clarity, and a cleaner ATS decision flow.',
      color: '#8b5cf6'
    },
    {
      role: 'Hackathon Prototype',
      company: 'StudyMate Plus',
      period: 'Smart India Hackathon 2024',
      description: 'A six-hour mobile-first learning prototype built to show speed, restraint, and strong product prioritization.',
      color: '#3b82f6'
    },
    {
      role: 'Brand & Campaign Design',
      company: 'Chagal Sports Infra',
      period: '4-Month Campaign Cycle',
      description: 'A sports infrastructure identity system spanning logos, posters, social creatives, and web-facing assets.',
      color: '#10b981'
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
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">
                Designing systems, interfaces, and visual stories that feel clear, modern, and memorable.
              </h1>
              <div className="space-y-6 text-xl text-muted-foreground">
                <p>
                  I'm Leela Sri Harshini, a multidisciplinary designer working across product design, brand identity, and visual communication.
                </p>
                <p>
                  My portfolio brings together AI-driven product concepts like AIRA, a six-hour hackathon prototype for StudyMate Plus, sports branding for Chagal Sports Infra, and illustration-led series such as Seasons of My Mind.
                </p>
                <p>
                  I care about design that is visually strong, easy to navigate, and strategic in how it communicates to the audience.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/30">
                <img
                  src="public/assets/IMG_20240405_113545_432.jpg"
                  alt="Leela Sri Harshini"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Design Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how I shape products, brands, and visual systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A snapshot of the project types and workflows represented across the portfolio.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-4"
                style={{ borderLeftColor: exp.color }}
              >
                <div 
                  className="absolute left-[-8px] top-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: exp.color }}
                />
                <div className="pb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-2xl">{exp.role}</h3>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-lg text-muted-foreground">{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <p className="text-lg text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Skills & Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A toolkit shaped by both communication design and product-facing execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-16 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl mb-6">Let's Create Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always excited to collaborate on meaningful projects and explore new creative opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button
                  className="px-8 py-4 border border-foreground/20 rounded-full text-lg hover:bg-foreground/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
