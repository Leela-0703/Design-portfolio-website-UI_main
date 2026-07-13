import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import { MediaFrame } from './MediaFrame';

export function ProjectShowcase() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  const handleProjectClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">Selected Portfolio</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated set of product, brand, and illustration work presented in the order that best reflects your practice.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-28">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <Link
                to={`/project/${project.slug}`}
                onClick={handleProjectClick}
                className={`group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-black/10 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <MediaFrame
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black">
                    {project.mediaType}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white border border-white/20">
                    {project.format}
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
                {/* Accent Border */}
                <div 
                  className="absolute inset-0 border-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: project.color }}
                />
              </Link>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span 
                      className="text-sm uppercase tracking-[0.3em] font-medium"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <div className="h-px flex-1 bg-border min-w-16" />
                    <span className="text-sm text-muted-foreground">{project.role}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl mb-4">{project.name}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mt-4">
                    {project.duration}
                  </p>
                </div>

                <div 
                  className="p-6 rounded-xl border-l-4"
                  style={{ 
                    borderLeftColor: project.color,
                    backgroundColor: 'rgba(255,255,255,0.02)'
                  }}
                >
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Key Outcome
                  </p>
                  <p className="text-lg">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/project/${project.slug}`}>
                  <motion.button
                    className="group flex items-center gap-3 text-lg font-medium mt-4"
                    whileHover={{ x: 10 }}
                    style={{ color: project.color }}
                  >
                    Explore Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Additional Work</p>
              <h3 className="text-3xl md:text-4xl">Branding, illustration, and campus campaigns</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              These projects support the portfolio with visual range while keeping the strongest product work at the front.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportingProjects.map((project) => (
              <Link key={project.id} to={`/project/${project.slug}`} onClick={handleProjectClick} className="group block">
                <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-5 p-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all h-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <MediaFrame
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black">
                      {project.mediaType}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-5 py-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm uppercase tracking-[0.25em]" style={{ color: project.color }}>
                          {project.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{project.format}</span>
                      </div>
                      <h4 className="text-2xl mb-3">{project.name}</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-wider text-muted-foreground">Outcome</p>
                      <p className="text-base text-foreground/85">{project.outcome}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: project.color }}>
                        Open case study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link to="/work">
            <motion.button
              className="px-8 py-4 border border-foreground/20 rounded-full font-medium text-lg hover:bg-foreground/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
