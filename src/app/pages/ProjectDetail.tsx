import { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { MediaFrame } from '../components/MediaFrame';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));

    return () => window.cancelAnimationFrame(frame);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
                Return Home
              </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { title: 'Overview', content: project.caseStudy.overview },
    { title: 'Challenge', content: project.caseStudy.challenge },
    { title: 'Research', content: project.caseStudy.research },
    { title: 'Process', content: project.caseStudy.process },
    { title: 'Design Decisions', content: project.caseStudy.designDecisions },
    { title: 'Iterations', content: project.caseStudy.iterations },
    { title: 'Final Solution', content: project.caseStudy.finalSolution },
    { title: 'Outcome', content: project.caseStudy.outcome },
    { title: 'Reflection', content: project.caseStudy.reflection },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <Link to="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span 
              className="text-sm uppercase tracking-[0.3em] font-medium"
              style={{ color: project.color }}
            >
              {project.category}
            </span>
            <div className="h-px flex-1 bg-border max-w-32" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">{project.name}</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Role', value: project.role },
              { label: 'Duration', value: project.duration },
              { label: 'Format', value: project.format },
              { label: 'Media', value: project.mediaType },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-24"
        >
          <div 
            className="absolute inset-0 border-4 rounded-2xl"
            style={{ borderColor: project.color }}
          />
          <MediaFrame
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            controls
            enableLightbox
          />
        </motion.div>

        <div className="max-w-6xl mx-auto mb-24">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Project Gallery</p>
              <h2 className="text-3xl md:text-4xl">Selected media from the case study</h2>
            </div>
            <p className="text-muted-foreground max-w-xl hidden lg:block">
              These are the actual files used in the portfolio so each project can be reviewed in context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {project.gallery.map((asset) => (
              <div key={asset} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-[4/3]">
                  <MediaFrame
                    src={asset}
                    alt={`${project.name} gallery item`}
                    className="w-full h-full object-cover"
                    controls
                    enableLightbox
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8 mb-24 max-w-6xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">Project Deliverables</p>
            <div className="flex flex-wrap gap-3">
              {project.deliverables.map((deliverable) => (
                <span key={deliverable} className="px-4 py-2 rounded-full bg-secondary text-sm">
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">Media to Show</p>
            <ul className="space-y-3 text-muted-foreground">
              {project.mediaNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="text-3xl md:text-4xl">{section.title}</h2>
              </div>
              <div 
                className="pl-6 border-l-2 py-4"
                style={{ borderLeftColor: `${project.color}20` }}
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Key Outcome Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div 
            className="p-12 rounded-2xl border-l-8 bg-gradient-to-br from-white/5 to-transparent"
            style={{ borderLeftColor: project.color }}
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Impact & Results
            </p>
            <p className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              {project.outcome}
            </p>
          </div>
        </motion.div>

        {/* Navigation to Next Project */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Explore More Projects
              </p>
              <Link to="/work" className="text-2xl hover:text-purple-500 transition-colors">
                View All Work
              </Link>
            </div>
            <div className="flex gap-4">
              <Link to="/process">
                <motion.button
                  className="px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Behind The Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Collaborate
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
