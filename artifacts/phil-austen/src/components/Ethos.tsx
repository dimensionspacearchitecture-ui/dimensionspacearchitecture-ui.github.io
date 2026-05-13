import { motion } from "framer-motion";
import { Compass, Anchor, LayoutGrid } from "lucide-react";

const ETHOS_ITEMS = [
  {
    icon: LayoutGrid,
    title: "Practicality First",
    description:
      "Complexity made simple. Every design is not only architecturally considered but structurally sound and efficient to build — because good design has to work on site.",
  },
  {
    icon: Compass,
    title: "Site-Responsive",
    description:
      "Every site has a story. The studio designs specifically for the Bay of Plenty environment — optimising for sun, wind, views, and the natural contour of the land.",
  },
  {
    icon: Anchor,
    title: "Client-Led Process",
    description:
      "Your home, your vision. The studio guides clients through each stage with transparency, respecting budget constraints while maximising architectural quality.",
  },
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
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
            Design Ethos
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-2 leading-tight tracking-tight">
            Designing for the New Zealand landscape
          </h2>
          <h2 className="text-3xl md:text-5xl font-extralight mb-6 leading-tight tracking-tight opacity-70">
            with uncompromising precision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {ETHOS_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 border border-primary-foreground/20 flex items-center justify-center mb-8 group-hover:border-secondary/60 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-tight uppercase text-primary-foreground">{item.title}</h3>
              <p className="text-primary-foreground/65 font-sans leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
