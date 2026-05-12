import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";

import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";
import gallery5 from "@/assets/images/gallery-5.png";
import gallery6 from "@/assets/images/gallery-6.png";

const PROJECTS = [
  { id: 1, title: "Papamoa Coastal Build", type: "New Build", img: gallery1, desc: "A modern coastal home utilizing timber cladding and expansive glass to maximize ocean views." },
  { id: 2, title: "Tauranga Modern", type: "New Build", img: gallery2, desc: "Cedar and corrugated iron exterior blending seamlessly with native landscaping." },
  { id: 3, title: "The Beams House", type: "Interior", img: gallery3, desc: "Exposed engineered timber beams create a warm, striking interior space." },
  { id: 4, title: "Villa Alteration", type: "Alteration", img: gallery4, desc: "Sympathetic modernization of a classic weatherboard villa." },
  { id: 5, title: "Dunes Retreat", type: "New Build", img: gallery5, desc: "Minimalist bach designed to weather gracefully in a harsh coastal environment." },
  { id: 6, title: "Mount Maunganui Facade", type: "New Build", img: gallery6, desc: "Clean lines and a sharp material palette for an urban coastal setting." },
];

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">
              Recent <span className="italic text-muted-foreground">Projects</span>.
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md">
            A selection of residential builds, alterations, and architectural concepts designed for the New Zealand environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
              data-testid={`gallery-item-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-card relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1">{project.type}</p>
                <h3 className="text-lg font-serif text-primary group-hover:text-secondary transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-secondary z-10 bg-background/50 backdrop-blur rounded-full p-2"
              onClick={() => setSelectedProject(null)}
              data-testid="button-close-lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-card overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video md:aspect-[16/9] w-full bg-muted">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                    {selectedProject.type}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed max-w-3xl">
                  {selectedProject.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}