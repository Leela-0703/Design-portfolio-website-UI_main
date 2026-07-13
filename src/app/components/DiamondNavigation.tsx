import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { disciplines } from '../data/projects';

function AnimatedDiamond({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full"
        style={{ background: `radial-gradient(circle, ${color}30 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        layoutId="diamond-glow"
      />
      {/* Rotating rings */}
      {[0, 60, 120].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute border rounded-full"
          style={{
            width: `${220 + i * 50}px`,
            height: `${220 + i * 50}px`,
            borderColor: `${color}${i === 0 ? '60' : i === 1 ? '40' : '20'}`,
            borderWidth: i === 0 ? '2px' : '1px',
          }}
          animate={{ rotate: angle + 360 }}
          transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {/* Diamond shape SVG */}
      <motion.svg
        width="200"
        height="240"
        viewBox="0 0 200 240"
        className="relative z-10 drop-shadow-2xl"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id={`dg-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="40%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Top crown */}
        <polygon
          points="100,10 30,90 170,90"
          fill={`url(#dg-${color})`}
          stroke={color}
          strokeWidth="1"
          opacity="0.95"
          filter="url(#glow)"
        />
        {/* Bottom pavilion */}
        <polygon
          points="30,100 170,100 100,230"
          fill={`url(#dg-${color})`}
          stroke={color}
          strokeWidth="1"
          opacity="0.85"
          filter="url(#glow)"
        />
        {/* Girdle line */}
        <rect x="30" y="90" width="140" height="10" fill={color} opacity="0.7" />
        {/* Facet lines */}
        <line x1="100" y1="10" x2="100" y2="230" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="90" x2="170" y2="90" stroke="white" strokeWidth="0.5" opacity="0.2" />
        <line x1="65" y1="50" x2="100" y2="230" stroke="white" strokeWidth="0.3" opacity="0.2" />
        <line x1="135" y1="50" x2="100" y2="230" stroke="white" strokeWidth="0.3" opacity="0.2" />
        {/* Sparkle dots */}
        <motion.circle cx="60" cy="60" r="2" fill="white" opacity="0.8"
          animate={{ opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle cx="140" cy="70" r="1.5" fill="white" opacity="0.7"
          animate={{ opacity: [0.7, 0.1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle cx="100" cy="45" r="2.5" fill="white" opacity="0.9"
          animate={{ opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
}

export function DiamondNavigation() {
  const [selectedDiscipline, setSelectedDiscipline] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentDiscipline = disciplines[selectedDiscipline];
  const handleProjectClick = () => {
    window.scrollTo(0, 0);
  };

  const handleSelect = (index: number) => {
    setDirection(index > selectedDiscipline ? 1 : -1);
    setSelectedDiscipline(index);
  };

  return (
    <div className="relative w-full py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Animated Diamond */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ background: `radial-gradient(circle, ${currentDiscipline.color}20 0%, transparent 70%)` }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDiscipline}
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.8, x: direction > 0 ? 56 : -56, rotate: direction > 0 ? 10 : -10 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: direction > 0 ? -56 : 56, rotate: direction > 0 ? -10 : 10 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
              >
                <AnimatedDiamond color={currentDiscipline.color} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Discipline Info */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDiscipline}
                initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
                transition={{ duration: 0.75, ease: 'easeInOut' }}
              >
                <div className="inline-block mb-4">
                  <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Work Stream {selectedDiscipline + 1}/{disciplines.length}
                  </span>
                </div>
                <h3
                  className="text-4xl lg:text-5xl mb-6"
                  style={{ color: currentDiscipline.color, fontFamily: "'Playfair Display', serif" }}
                >
                  {currentDiscipline.name}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {currentDiscipline.description}
                </p>

                {currentDiscipline.projects.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Related Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentDiscipline.projects.map((project) => (
                        <Link
                          key={project.slug}
                          to={`/project/${project.slug}`}
                          onClick={handleProjectClick}
                          className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors"
                          style={{ borderLeft: `3px solid ${currentDiscipline.color}` }}
                        >
                          {project.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex gap-3 pt-8">
              {disciplines.map((discipline, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="group relative"
                  aria-label={`View ${discipline.name}`}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: index === selectedDiscipline ? discipline.color : '#666',
                      scale: index === selectedDiscipline ? 1.3 : 1,
                      opacity: index === selectedDiscipline ? 1 : 0.4,
                    }}
                    whileHover={{ scale: 1.6 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Use the navigation dots to preview the main work streams in this portfolio
        </motion.p>
      </div>
    </div>
  );
}
