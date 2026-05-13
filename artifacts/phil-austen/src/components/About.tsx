import { motion } from "framer-motion";

const STATS = [
  { value: "8+", label: "Years in Construction" },
  { value: "LBP", label: "Level 2 / Category 2" },
  { value: "NZ", label: "Building Code Expertise" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[3/4] bg-muted relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888062867-27b5e40e8a71?q=80&w=2070&auto=format&fit=crop"
                alt="Architectural plans and blueprints on a drafting table"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-card border border-border -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              About the Studio
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Built on{" "}
              <span className="italic text-muted-foreground">experience</span>.
            </h2>

            <div className="space-y-5 text-foreground/75 text-lg leading-relaxed font-sans">
              <p>
                Dimension Space Architecture was founded by Phil Austen, an
                Architectural Designer with over 8 years of hands-on experience
                in the New Zealand construction industry. The studio is based in
                Mount Maunganui, Bay of Plenty.
              </p>
              <p>
                As a Licensed Building Practitioner (LBP Level 2 / Category 2),
                the studio brings a rare combination of design vision and
                construction reality. Where many designers draw buildings, Phil
                understands precisely how they go together — a perspective
                earned on-site, not just in a studio.
              </p>
              <p>
                The result is architecture that is coherent from concept through
                to completion: beautiful, buildable, and grounded in the New
                Zealand environment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-serif text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
