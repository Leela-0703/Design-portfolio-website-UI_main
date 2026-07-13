export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  outcome: string;
  image: string;
  color: string;
  tags: string[];
  role: string;
  duration: string;
  format: string;
  featured: boolean;
  mediaType: string;
  mediaNotes: string[];
  deliverables: string[];
  gallery: string[];
  caseStudy: {
    overview: string;
    challenge: string;
    research: string;
    process: string;
    designDecisions: string;
    iterations: string;
    finalSolution: string;
    outcome: string;
    reflection: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'aira',
    name: 'AIRA',
    category: 'Product Design',
    description: 'An AI-powered resume intelligence platform that translates ATS signals into a cleaner, more confident career decision-making experience.',
    outcome: 'A sharper ATS experience that turns complex diagnostics into next-step guidance.',
    image: '/assets/aira/AIRA (2).jpeg',
    color: '#8b5cf6',
    tags: ['ATS Analysis', 'Career Tech', 'Dashboard UX'],
    role: 'UI/UX Designer',
    duration: 'Academic product concept',
    format: 'Desktop dashboard case study',
    featured: true,
    mediaType: 'Screenshots',
    mediaNotes: ['ATS score breakdown', 'Keyword analysis', 'Career recommendations', 'Visual system exploration'],
    deliverables: ['Problem framing', 'Information architecture', 'High-fidelity UI', 'Recommendation flow'],
    gallery: [
      '/assets/aira/AIRA (2).jpeg',
      '/assets/aira/AIRA (3).jpeg',
      '/assets/aira/AIRA (1).jpeg',
      '/assets/aira/AIRA (4).jpeg',
      '/assets/aira/AIRA (5).jpeg',
      '/assets/aira/AIRA (6).jpeg',
      '/assets/aira/AIRA (7).jpeg',
      '/assets/aira/AIRA (8).jpeg',
      '/assets/aira/AIRA (9).jpeg',
      '/assets/aira/AIRA (10).jpeg',
      '/assets/aira/AIRA (11).jpeg',
    ],
    caseStudy: {
      overview: 'AIRA is a product design case study for an AI-powered career platform that helps users understand resume fit, improve ATS visibility, and make more informed job decisions.',
      challenge: 'Most resume tools surface a score, but not the reasoning behind it. Users need clarity, not just data, if they are going to act on the feedback.',
      research: 'I mapped common ATS pain points, reviewed career-platform interaction patterns, and studied how users scan feedback when they are under time pressure.',
      process: 'Problem framing → information architecture → low-fidelity flows → visual direction → high-fidelity screens → refinement',
      designDecisions: 'The UI uses clear hierarchy, soft containment, and progressive disclosure so technical resume feedback feels legible, calm, and actionable.',
      iterations: 'I refined dashboard density, card spacing, and feedback ordering to make the experience easier to scan without losing analytical depth.',
      finalSolution: 'A dashboard-led experience combining ATS scoring, keyword insights, role matching, and recommendation modules in one coherent system.',
      outcome: 'A product concept that balances data density with clarity and presents resume analysis as a guided workflow.',
      reflection: 'The strongest product experiences do not just report an outcome; they show the user what that outcome means and what to do next.'
    }
  },
  {
    id: '2',
    slug: 'studymate-plus',
    name: 'StudyMate Plus',
    category: 'Hackathon Prototype',
    description: 'A fast-moving AI learning companion that turns study material into quizzes, explanations, and structured revision support.',
    outcome: 'A focused 6-hour hackathon concept that demonstrates speed, clarity, and MVP thinking.',
    image: '/assets/ui/StudyMate+.mp4',
    color: '#3b82f6',
    tags: ['EdTech', 'AI', 'Mobile MVP'],
    role: 'Product Designer',
    duration: '6-hour hackathon sprint',
    format: 'Mobile-first prototype + walkthrough video',
    featured: true,
    mediaType: 'Video',
    mediaNotes: ['Hero walkthrough video', 'PDF analysis flow', 'Quiz generator', 'Mobile learning screens'],
    deliverables: ['MVP flow', 'AI quiz loop', 'Mobile UI', 'Rapid iteration'],
    gallery: ['/assets/ui/StudyMate+.mp4'],
    caseStudy: {
      overview: 'StudyMate Plus is a hackathon-built AI learning companion that converts study material into quizzes, explanations, and guided revision support.',
      challenge: 'Students often spend more time preparing study resources than actually learning from them, which makes revision slow and repetitive.',
      research: 'I focused on the moments where learners need speed most: uploading notes, generating practice, and getting immediate feedback.',
      process: '6-hour hackathon sprint → feature prioritization → mobile-first wireframes → prototype flow → rapid refinement',
      designDecisions: 'The flow was designed around quick upload, compact cards, and a low-friction quiz loop so the MVP could feel believable within the time limit.',
      iterations: 'I trimmed extra steps, simplified decision points, and tightened the path from upload to action to keep the experience demo-ready.',
      finalSolution: 'A compact learning flow covering upload, analysis, quiz generation, and revision support in one streamlined interface.',
      outcome: 'A concise prototype that shows how product thinking can still feel polished under severe time constraints.',
      reflection: 'Hackathon design works best when every screen earns its place and the experience stays focused on one clear promise.'
    }
  },
  {
    id: '3',
    slug: 'music-recommendation-system',
    name: 'Music Recommendation System',
    category: 'UI / UX Concept',
    description: 'A personalized music discovery interface designed to make recommendation logic feel simple, expressive, and easy to trust.',
    outcome: 'A prototype that turns algorithmic recommendations into a more human browsing experience.',
    image: '/assets/ui/AI- based Music Recommendation System.mp4',
    color: '#10b981',
    tags: ['Music UX', 'Personalization', 'Discovery Flow'],
    role: 'UI/UX Designer',
    duration: 'Concept prototype',
    format: 'UI walkthrough video',
    featured: true,
    mediaType: 'Video',
    mediaNotes: ['Interaction video', 'Browse states', 'Recommendation cards', 'Favorites and queue controls'],
    deliverables: ['User flow', 'Browsing interface', 'Personalized recommendation cards', 'Interactive prototype'],
    gallery: ['/assets/ui/AI- based Music Recommendation System.mp4'],
    caseStudy: {
      overview: 'A UI/UX concept for a personalized music recommendation system designed to make discovery feel simple, intelligent, and visually controlled.',
      challenge: 'Music tools often surface too much choice at once, which makes it harder for users to browse, compare, and trust what they are seeing.',
      research: 'The design explored how people move between discovery and control, especially when they want recommendations without losing a sense of ownership.',
      process: 'User flow mapping → interface sketching → recommendation hierarchy → visual refinement → interaction walkthrough',
      designDecisions: 'The interface stays lightweight and card-led so browsing, queue actions, and favorites remain easy to understand at a glance.',
      iterations: 'I refined card prominence, control placement, and spacing to reduce cognitive load while preserving enough depth for exploration.',
      finalSolution: 'A clean interface concept that organizes listening history, recommended tracks, and category-based browsing into one clear system.',
      outcome: 'A polished prototype that presents personalization as a thoughtful product experience rather than a hidden algorithm.',
      reflection: 'Strong product design makes the logic behind the recommendation feel understandable, not invisible.'
    }
  },
  {
    id: '4',
    slug: 'chagal-sports-infra',
    name: 'Chagal Sports Infra',
    category: 'Brand Identity',
    description: 'A four-month brand and campaign system for a sports infrastructure business that needed to feel energetic, credible, and commercially clear.',
    outcome: 'A cohesive identity system spanning logos, posters, social creatives, and website visuals.',
    image: '/assets/logos/Chagal Sports logo.png',
    color: '#f59e0b',
    tags: ['Branding', 'Social Campaigns', 'Promotional Design'],
    role: 'Brand Designer',
    duration: '4-month campaign cycle',
    format: 'Brand system, social posts, posters, and website visuals',
    featured: false,
    mediaType: 'Brand system',
    mediaNotes: ['Logo evolution', 'Campaign posters', 'Social media creatives', 'Website visuals'],
    deliverables: ['Logo suite', 'Typography and palette', 'Marketing creatives', 'Campaign templates'],
    gallery: [
      '/assets/logos/Chagal Sports logo.png',
      '/assets/chagal/1.png',
      '/assets/chagal/2.png',
      '/assets/chagal/Screenshot 2026-03-12 133627.png',
      '/assets/chagal/Screenshot 2026-03-20 232146.png',
      '/assets/chagal/Post-1 Completed!.png',
      '/assets/chagal/Post2_Completed.png',
      '/assets/chagal/Post 3.png',
      '/assets/chagal/Instagram Post - Transform Your Land.png',
      '/assets/chagal/Instagram Post - Transform Your Land into Profit.png',
      '/assets/chagal/Instagram Post - How Can You Profit.png',
      '/assets/chagal/Lohri post.mp4',
      '/assets/chagal/Reel_Completed!.mp4',
      '/assets/chagal/Chagal-Sports-Infra.mp4',
    ],
    caseStudy: {
      overview: 'Chagal Sports Infra is a four-month brand and campaign design project for a sports infrastructure business that needed a more confident public-facing identity.',
      challenge: 'The identity had to balance trust, energy, and visibility while staying flexible enough to work across logos, posters, social media, and web assets.',
      research: 'I studied sports branding references, movement-driven layouts, and the visual patterns that help promotional design convert attention into action.',
      process: 'Logo exploration → moodboard development → palette testing → poster direction → website and promo visuals → system refinement',
      designDecisions: 'High contrast, disciplined typography, and sports-led imagery were used to keep the system commercial, energetic, and easy to deploy.',
      iterations: 'I refined several logo directions and campaign compositions before settling on a cleaner system that could repeat across formats.',
      finalSolution: 'A brand kit spanning logo work, campaign posters, social creatives, and website-led visual assets with a consistent visual language.',
      outcome: 'An identity that can scale across outreach, promotion, and sales communication without losing clarity.',
      reflection: 'A strong brand system is not just recognizable; it is useful across every place the business shows up.'
    }
  },
  {
    id: '5',
    slug: 'seasons-of-my-mind',
    name: 'Seasons Of My Mind',
    category: 'Illustration',
    description: 'A reflective poster series that uses seasonal imagery, rhythm, and symbolism to explore mood and memory.',
    outcome: 'A cohesive illustration series that balances emotional storytelling with visual consistency.',
    image: '/assets/seasons/Banner.png',
    color: '#06b6d4',
    tags: ['Poster Series', 'Personal Work', 'Visual Storytelling'],
    role: 'Illustrator',
    duration: 'Personal series',
    format: 'Poster series',
    featured: false,
    mediaType: 'Poster series',
    mediaNotes: ['Series cover', 'Seasonal variations', 'Color language', 'Typography treatment'],
    deliverables: ['Concept exploration', 'Poster sequence', 'Mood studies', 'Final artwork set'],
    gallery: [
      '/assets/seasons/Banner.png',
      '/assets/seasons/Spring.png',
      '/assets/seasons/Rainy.png',
      '/assets/seasons/Autumn.png',
    ],
    caseStudy: {
      overview: 'Seasons of My Mind is an illustration poster series built around seasonal metaphor, visual rhythm, and personal reflection.',
      challenge: 'The challenge was to translate emotional states into a system that felt poetic without becoming visually noisy or decorative for its own sake.',
      research: 'I explored seasonal symbolism, floral forms, and atmospheric palettes to establish a tone that felt cohesive across the entire series.',
      process: 'Concept sketching → palette studies → composition experiments → artwork creation → series curation',
      designDecisions: 'Layered forms, soft contrast, and restrained typography keep the series expressive while still easy to read as a set.',
      iterations: 'I tested different layouts and visual densities before settling on a rhythm that gave each poster enough space to breathe.',
      finalSolution: 'A poster series that feels unified at a glance but still lets each piece hold its own mood and composition.',
      outcome: 'A personal body of work that demonstrates visual storytelling, pacing, and style consistency.',
      reflection: 'Series work becomes stronger when repetition creates a language, but each frame still offers a distinct emotional note.'
    }
  },
  {
    id: '6',
    slug: 'college-campaign-posters',
    name: 'College Campaign Posters',
    category: 'Campaign Design',
    description: 'A set of campus posters for hackathons, club promotion, event invites, and student outreach designed to grab attention quickly.',
    outcome: 'A flexible communication set that shows range in promotion, hierarchy, and audience targeting.',
    image: '/assets/posters/Bid, Build & Win_campaign poster.png',
    color: '#ef4444',
    tags: ['Events', 'Recruitment', 'College Outreach'],
    role: 'Campaign Designer',
    duration: 'College campaigning period',
    format: 'Poster series',
    featured: false,
    mediaType: 'Posters',
    mediaNotes: ['Hackathon posters', 'Club recruitment creatives', 'Event promotions', 'Awareness visuals'],
    deliverables: ['Campaign posters', 'Social media creatives', 'Recruitment designs', 'Event announcements'],
    gallery: [
      '/assets/posters/Bid, Build & Win_campaign poster.png',
      '/assets/posters/Blue White Modern Coming Soon Poster Landscape.png',
      '/assets/posters/Event Poster.png',
      '/assets/posters/Flashmob Poster.jpg',
      '/assets/posters/FunGames Poster.png',
      '/assets/posters/Hackathon poster.png',
      '/assets/posters/HIRING PR TEAM.png',
      '/assets/posters/Invertex- Bid,Build&Win.png',
      '/assets/posters/Poster - Build Your Ideas.png',
    ],
    caseStudy: {
      overview: 'A collection of campaign posters created for college events, club promotion, recruitment, and student outreach.',
      challenge: 'Each poster had to stand out in a crowded campus environment, communicate fast, and still feel tailored to its audience.',
      research: 'I reviewed event-promo conventions, hierarchy patterns, and the kinds of visual treatments that earn attention on campus feeds and noticeboards.',
      process: 'Brief interpretation → layout exploration → typography testing → campaign adaptation → final exports',
      designDecisions: 'Bold headlines, high-contrast messaging, and flexible composition keep the posters direct, scannable, and promotion-ready.',
      iterations: 'I refined message placement and content density so each creative stayed clean, legible, and easy to absorb at a glance.',
      finalSolution: 'A campaign poster set covering hackathons, club hiring, event invites, and awareness posts with a consistent promotional tone.',
      outcome: 'A communication series that demonstrates adaptability across promotion, hierarchy, and audience context.',
      reflection: 'Campaign design works best when the message lands instantly and the visual system supports the call to action without distraction.'
    }
  },
];

export const disciplines = [
  {
    id: 'product',
    name: 'Product Design',
    description: 'AI-led and interaction-focused product work centered on clarity, usefulness, and flow.',
    color: '#8b5cf6',
    projects: [
      { name: 'AIRA', slug: 'aira' },
      { name: 'StudyMate Plus', slug: 'studymate-plus' },
      { name: 'Music Recommendation System', slug: 'music-recommendation-system' }
    ]
  },
  {
    id: 'brand',
    name: 'Brand Identity',
    description: 'Brand systems that connect identity, promotion, and campaign consistency.',
    color: '#3b82f6',
    projects: [
      { name: 'Chagal Sports Infra', slug: 'chagal-sports-infra' }
    ]
  },
  {
    id: 'illustration',
    name: 'Illustration & Posters',
    description: 'Expressive poster work and visual storytelling for personal and campus-based communication.',
    color: '#10b981',
    projects: [
      { name: 'Seasons Of My Mind', slug: 'seasons-of-my-mind' },
      { name: 'College Campaign Posters', slug: 'college-campaign-posters' }
    ]
  }
];
