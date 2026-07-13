import { motion } from 'motion/react';
import { Lightbulb, Search, Pencil, Repeat, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function BehindTheWork() {
  const processSteps = [
    {
      icon: Search,
      title: 'Research & Discovery',
      description: 'Understanding the problem space through user interviews, competitive analysis, and market research.',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1623652554515-91c833e3080e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3MlMjBicmFpbnN0b3JtaW5nJTIwaWRlYXN8ZW58MXx8fHwxNzgxNzg1OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Lightbulb,
      title: 'Ideation & Concepts',
      description: 'Brainstorming solutions, creating moodboards, and exploring different creative directions.',
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb29kYm9hcmQlMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3ODE3ODU5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Pencil,
      title: 'Wireframes & Sketches',
      description: 'Rapid sketching and low-fidelity wireframes to explore layout and information architecture.',
      color: '#06b6d4',
      image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hlcyUyMHdpcmVmcmFtZXMlMjBub3RlYm9va3xlbnwxfHx8fDE3ODE3ODU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Sparkles,
      title: 'Visual Design',
      description: 'Crafting high-fidelity designs with attention to typography, color, spacing, and visual hierarchy.',
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb29kYm9hcmQlMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3ODE3ODU5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Repeat,
      title: 'Testing & Iteration',
      description: 'Gathering feedback, conducting usability tests, and refining designs based on insights.',
      color: '#f59e0b',
      image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjBpdGVyYXRpb24lMjB0ZXN0aW5nfGVufDF8fHx8MTc4MTc4NTkwOHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Reflection',
      description: 'Finalizing deliverables, documenting decisions, and reflecting on learnings for future projects.',
      color: '#ef4444',
      image: 'https://images.unsplash.com/photo-1623652554515-91c833e3080e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3MlMjBicmFpbnN0b3JtaW5nJTIwaWRlYXN8ZW58MXx8fHwxNzgxNzg1OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const principles = [
    {
      title: 'Embrace Failure',
      description: 'Every failed concept teaches something valuable. I keep a collection of rejected ideas because they often contain seeds of future solutions.',
    },
    {
      title: 'Show Your Thinking',
      description: 'The final design is just 10% of the work. The other 90% is research, iteration, and decision-making. Documenting this process demonstrates design maturity.',
    },
    {
      title: 'Design is Storytelling',
      description: 'Every project has a narrative arc—the problem, the journey, and the resolution. I structure my work to tell that story clearly.',
    },
    {
      title: 'Iterate Ruthlessly',
      description: 'The first idea is rarely the best idea. I create multiple versions, test them, and continuously refine until the solution feels right.',
    }
  ];

  const moodBoards = [
    {
      title: 'Calm Editorial',
      tag: 'Product + Presentation',
      image: '/assets/pallettes/Calm Coffee.png',
      description: 'Soft contrast and warm neutrals that make a dashboard or case study feel more composed and premium.',
    },
    {
      title: 'Active Contrast',
      tag: 'Brand + Campaign',
      image: '/assets/pallettes/Dark Forest.png',
      description: 'Darker tones and sharper contrast for sports or campaign-driven work that needs stronger presence.',
    },
    {
      title: 'Fresh UI Energy',
      tag: 'Interface Design',
      image: '/assets/pallettes/Minty Black.png',
      description: 'A balanced palette that keeps UI work lively while still feeling structured and readable.',
    },
    {
      title: 'Expressive Story',
      tag: 'Illustration + Posters',
      image: '/assets/pallettes/Pastel Plushy.png',
      description: 'Gentle, story-led color combinations that suit poster series and more personal visual narratives.',
    },
  ];

  const processSlots = [
    { title: 'Sketchbook frames', note: 'Add close-ups of your sketchbook or ideation pages here.' },
    { title: 'Desk / work-in-progress', note: 'Add a photo of your workspace, layout setup, or screen-in-progress.' },
    { title: 'Notes and refinements', note: 'Add screenshots, annotations, or whiteboard captures to show iteration.' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Process & Philosophy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">Behind The Work</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Great design isn't just about the final product—it's about the journey of exploration, iteration, and continuous learning that leads there.
          </p>
        </motion.div>

        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">My Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A flexible framework that adapts to each project's unique needs and constraints.
            </p>
          </motion.div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                    style={{ backgroundColor: step.color }}
                  />
                  <div
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4"
                    style={{ borderColor: `${step.color}50` }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-bold opacity-20">0{index + 1}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-6" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Mood Boards & Palette Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Palette direction shapes the tone of each project before the layout is even drawn. These are the visual references behind the portfolio voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {moodBoards.map((board, index) => (
              <motion.div
                key={board.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
              >
                <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-0">
                  <div className="relative aspect-[4/3]">
                    <img src={board.image} alt={board.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">{board.tag}</p>
                      <h3 className="text-2xl mb-4">{board.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{board.description}</p>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {['#0f172a', '#334155', '#64748b', '#cbd5e1', '#f8fafc'].map((swatch) => (
                        <div key={swatch} className="h-10 rounded-lg border border-white/10" style={{ backgroundColor: swatch }} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Add Your Own Process Images</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drop in original work-in-progress photos here to make the process section feel even more personal and credible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSlots.map((slot) => (
              <div key={slot.title} className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-6 min-h-[280px] flex flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Placeholder</p>
                  <h3 className="text-2xl mb-4">{slot.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{slot.note}</p>
                </div>
                <div className="mt-8 h-40 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-sm text-muted-foreground text-center px-4">
                  Your image can sit here with the same proportions you upload.
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Process Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Core beliefs that shape how I approach design challenges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
              >
                <h3 className="text-2xl mb-4">{principle.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-16 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl mb-6">Want to See the Process in Action?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore detailed case studies that walk through each step of the design journey.
            </p>
            <Link to="/work">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
