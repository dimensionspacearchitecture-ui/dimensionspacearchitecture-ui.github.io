import { motion } from "framer-motion";
import { Compass, Anchor, LayoutGrid } from "lucide-react";

const ETHOS_ITEMS = [
  {
    icon: LayoutGrid,
    title: "Practicality First",
    description: "Making complexity feel simple. Designs that are not only aesthetically striking but structurally sound and efficient to build."
  },
  {
    icon: Compass,
    title: "Site-Responsive",
    description: "Every site has a story. I design specifically for the Bay of Plenty environment—optimizing for sun, wind, and the natural contour of the land."
  },
  {
    icon: Anchor,
    title: "Client-Led Process",
    description: "Your home, your vision. I guide you through the process with transparency, respecting your budget while maximizing architectural impact."
  }
];

export function Ethos() {
  return (
    <section id="ethos" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Design Ethos</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Designing for the New Zealand landscape with <span className="italic opacity-90">uncompromising precision</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {ETHOS_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-card/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-primary-foreground/70 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}