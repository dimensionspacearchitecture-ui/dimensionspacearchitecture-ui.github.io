import { motion } from "framer-motion";

const CAPABILITIES = [
  "New Residential Design",
  "Alterations & Additions",
  "Resource Consent Applications",
  "Building Consent Documentation",
  "Site Analysis & Feasibility",
  "Concept to Construction Drawings",
  "LBP Category 2 Scope Projects",
  "Council Navigation & Liaison",
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Services
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Capabilities &{" "}
              <br className="hidden md:block" />
              <span className="italic text-muted-foreground">Competencies</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              From initial site analysis through to full construction
              documentation, the studio delivers comprehensive architectural
              services. LBP Category 2 accreditation means the work is fully
              qualified for complex residential buildings under the New Zealand
              Building Code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 border-secondary/40" />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border bg-background">
                {CAPABILITIES.map((cap, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                    className="flex items-center gap-4 px-6 py-5 border-b border-r border-border last:border-b-0 hover:bg-card transition-colors"
                  >
                    <span className="text-xs font-bold text-secondary/60 font-mono w-5 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground font-medium text-sm md:text-base leading-snug">
                      {cap}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
