"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";

const categories = [
  "All",
  "Wedding",
  "Product, Lifestyle & Fashion",
  "Documentary & NGO",
  "Events & Corporate",
  "Street",
  "Cinematography",
  "Portrait",
];

const projects = [
  {
    id: 1,
    title: "Minimalist Product Study",
    category: "Product, Lifestyle & Fashion",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    details: { camera: "Sony A7R IV", location: "Mumbai, India", date: "Jan 2024" },
    height: "h-[400px]",
  },
  {
    id: 2,
    title: "Urban Street Life",
    category: "Street",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    details: { camera: "Fujifilm X-T4", location: "Agra, India", date: "Feb 2024" },
    height: "h-[600px]",
  },
  {
    id: 3,
    title: "Editorial Fashion",
    category: "Product, Lifestyle & Fashion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    details: { camera: "Canon EOS R5", location: "Delhi, India", date: "Mar 2024" },
    height: "h-[500px]",
  },
  {
    id: 4,
    title: "Cinematic Narrative",
    category: "Cinematography",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    details: { camera: "RED Komodo", location: "Goa, India", date: "Apr 2024" },
    height: "h-[450px]",
  },
  {
    id: 5,
    title: "Soulful Portrait",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    details: { camera: "Sony A7R IV", location: "Jaipur, India", date: "May 2024" },
    height: "h-[650px]",
  },
  {
    id: 6,
    title: "Lifestyle Moments",
    category: "Product, Lifestyle & Fashion",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    details: { camera: "Canon EOS R5", location: "Bangalore, India", date: "Jun 2024" },
    height: "h-[400px]",
  },
  {
    id: 7,
    title: "Intimate Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    details: { camera: "Sony A7R IV", location: "Udaipur, India", date: "Jul 2024" },
    height: "h-[550px]",
  },
  {
    id: 8,
    title: "Rural Empowerment",
    category: "Documentary & NGO",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    details: { camera: "Fujifilm X-T4", location: "Rajasthan, India", date: "Aug 2024" },
    height: "h-[450px]",
  },
  {
    id: 9,
    title: "Tech Conference",
    category: "Events & Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    details: { camera: "Canon EOS R5", location: "Delhi, India", date: "Sep 2024" },
    height: "h-[500px]",
  },
];

function PortfolioCard({ project, onClick }: { project: typeof projects[0], onClick: (project: typeof projects[0]) => void }) {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden cursor-pointer rounded-3xl bg-beige/50 ${project.height} break-inside-avoid`}
      onClick={() => onClick(project)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-all duration-400 ease-out group-hover:scale-[1.05] group-hover:brightness-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-soft/90 via-charcoal-soft/20 to-transparent flex flex-col justify-end p-8 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-muted mb-2">
          {project.category}
        </span>
        <h3 className="font-serif text-2xl text-ivory leading-tight font-bold">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category === activeCategory,
  );

  return (
    <section id="portfolio" className="py-40 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-10"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">
                Portfolio
              </span>
              <div className="w-16 h-[1px] bg-gold-muted/30" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.5 }}
              className="font-serif text-5xl md:text-7xl text-charcoal-soft leading-[0.9] tracking-tighter"
            >
              Visual <br />
              <span className="text-gold-muted italic font-light">Narratives</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border ${
                  activeCategory === category
                    ? "bg-charcoal-soft text-ivory border-charcoal-soft shadow-xl"
                    : "bg-transparent text-charcoal-soft/40 border-gold-muted/20 hover:border-gold-muted hover:text-gold-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ivory/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-charcoal-soft/40 hover:text-charcoal-soft transition-colors p-2"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                layoutId={`card-${selectedProject.id}`}
                initial={{ scale: 0.8, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[80vh] relative"
              >
                <Image
                  src={selectedProject.image.replace("w=800", "w=1600")}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5"
              >
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted mb-6 block">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-4xl md:text-6xl text-charcoal-soft mb-10 leading-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="space-y-8 border-t border-gold-muted/10 pt-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-2">Camera</h4>
                      <p className="text-charcoal-soft font-serif">{selectedProject.details.camera}</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-2">Location</h4>
                      <p className="text-charcoal-soft font-serif">{selectedProject.details.location}</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-2">Date</h4>
                      <p className="text-charcoal-soft font-serif">{selectedProject.details.date}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-8 px-10 py-4 bg-charcoal-soft text-ivory text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-gold-muted transition-all duration-500"
                  >
                    Close View
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
