import { motion } from "framer-motion";

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
                alt="Phil Austen reviewing architectural plans on site"
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-card border border-border -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">
              Built on <span className="italic text-secondary">experience</span>.
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-sans">
              <p>
                I'm Phil Austen, an Architectural Designer based in Mount Maunganui, Bay of Plenty. With 8 years of hands-on experience in the construction industry, my approach to design is grounded in reality.
              </p>
              <p>
                As a Licensed Building Practitioner (LBP Level 2 / Category 2), I don't just draw buildings—I understand exactly how they go together. My construction background gives me a practical perspective that most designers lack, ensuring that concepts on paper translate seamlessly to the building site.
              </p>
              <p>
                I bridge the gap between creative architectural vision and pragmatic construction reality, creating beautiful, functional homes that respect the unique coastal environment of New Zealand.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-4xl font-serif text-primary mb-2">8+</p>
                <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-primary mb-2">LBP</p>
                <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Level 2 / Category 2</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}