import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-32 overflow-hidden bg-card">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-secondary">
              Mount Maunganui, New Zealand
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] mb-8"
          >
            Solid craftsmanship. <br />
            <span className="text-muted-foreground italic">Thoughtful design.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-10 font-sans"
          >
            I'm Phil Austen, an Architectural Designer blending hands-on construction knowledge with precise architectural thinking. LBP Category 2 accredited.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-base"
              onClick={scrollToContact}
              data-testid="button-hero-contact"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-8 py-6 text-base border-primary/20 hover:bg-primary/5"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-hero-portfolio"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}