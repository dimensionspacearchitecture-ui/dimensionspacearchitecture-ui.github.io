import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

      {/* Main content — vertically centred in remaining space */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex items-center py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
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
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8"
          >
            Solid craftsmanship.{" "}
            <br />
            <span className="text-muted-foreground italic">
              Thoughtful design.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed mb-12 font-sans"
          >
            Dimension Space Architecture is an architectural practice based in
            Mount Maunganui. The studio focuses on residential projects, with an
            emphasis on material honesty and thoughtful spatial quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-base tracking-wide"
              onClick={() => scrollTo("#contact")}
              data-testid="button-hero-contact"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-base border-primary/25 hover:bg-primary/5 tracking-wide"
              onClick={() => scrollTo("#gallery")}
              data-testid="button-hero-portfolio"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue anchored to the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <button
          onClick={() => scrollTo("#about")}
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-secondary transition-colors group"
          data-testid="button-scroll-down"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
