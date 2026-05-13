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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/96 via-background/88 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex items-center py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-10 bg-secondary" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-secondary">
              Mount Maunganui, New Zealand
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-5xl md:text-7xl lg:text-[88px] font-black text-primary leading-[1.0] tracking-tight mb-4"
          >
            Solid
            <br />
            craftsmanship.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="text-5xl md:text-7xl lg:text-[88px] font-extralight text-muted-foreground leading-[1.0] tracking-tight mb-12"
          >
            Thoughtful design.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base md:text-lg text-foreground/65 max-w-lg leading-relaxed mb-12"
          >
            Dimension Space Architecture is an architectural practice based in
            Mount Maunganui. The studio focuses on residential projects, with an
            emphasis on material honesty and thoughtful spatial quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-sm font-semibold tracking-widest uppercase"
              onClick={() => scrollTo("#contact")}
              data-testid="button-hero-contact"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-sm font-semibold tracking-widest uppercase border-primary/20 hover:bg-primary/5"
              onClick={() => scrollTo("#gallery")}
              data-testid="button-hero-portfolio"
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <button
          onClick={() => scrollTo("#about")}
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-secondary transition-colors"
          data-testid="button-scroll-down"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
