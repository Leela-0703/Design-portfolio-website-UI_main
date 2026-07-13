import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import { MediaFrame } from '../components/MediaFrame';

const filterOptions = ['All', 'Product Design', 'Hackathon Prototype', 'UI / UX Concept', 'Brand Identity', 'Illustration', 'Campaign Design'];

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const handleProjectClick = () => {
    window.scrollTo(0, 0);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const supportingProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-56 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-6">
            <Filter className="w-4 h-4" />
            Browse the full portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of product design, brand identity, illustration, and campaign work presented with clear hierarchy and project context.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              { label: 'Featured', value: '3 flagship studies' },
              { label: 'Supporting', value: '3 visual series' },
              { label: 'Format', value: 'Video, UI, brand, poster' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 rounded-full text-sm transition-all border ${
                activeFilter === option
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-white/5 border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Featured</p>
                <h2 className="text-3xl md:text-4xl">Main portfolio highlights</h2>
              </div>
              <p className="text-muted-foreground max-w-xl hidden lg:block">
                These are the most complete and polished projects, placed first to establish your strongest work immediately.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Link key={project.id} to={`/project/${project.slug}`} onClick={handleProjectClick} className="group block">
                  <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-white/20 transition-all">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <MediaFrame src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black">{project.mediaType}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white border border-white/20">Featured</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm uppercase tracking-[0.3em]" style={{ color: project.color }}>{project.category}</span>
                        <span className="text-sm text-muted-foreground">{project.role}</span>
                      </div>
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="pt-2 flex items-center gap-2 text-sm font-medium" style={{ color: project.color }}>
                        Open case study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Complete collection</p>
              <h2 className="text-3xl md:text-4xl">Supporting work and series</h2>
            </div>
            <p className="text-muted-foreground max-w-xl hidden lg:block">
              Campaigns, illustration sets, and brand systems live here alongside the core product work for easy browsing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {supportingProjects.map((project) => (
              <Link key={project.id} to={`/project/${project.slug}`} onClick={handleProjectClick} className="group block">
                <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-white/20 transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <MediaFrame src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-black">{project.mediaType}</span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm uppercase tracking-[0.3em]" style={{ color: project.color }}>{project.category}</span>
                      <span className="text-sm text-muted-foreground">{project.format}</span>
                    </div>
                    <h3 className="text-2xl">{project.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="pt-2 flex items-center gap-2 text-sm font-medium" style={{ color: project.color }}>
                      Open case study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}