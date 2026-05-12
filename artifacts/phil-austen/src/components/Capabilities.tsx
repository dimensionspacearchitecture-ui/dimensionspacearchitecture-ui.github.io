import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CAPABILITIES = [
  "New Residential Design",
  "Alterations & Additions",
  "Resource Consent Applications",
  "Building Consent Documentation",
  "Site Analysis & Feasibility",
  "Concept to Construction Drawings",
  "LBP Category 2 Scope Projects",
  "Council Navigation & Liaison"
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
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
              Capabilities & <br className="hidden md:block" />
              <span className="italic text-secondary">Competencies</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              From initial site analysis to full construction documentation, I provide comprehensive architectural services. My LBP Category 2 accreditation means I am qualified to design and document complex residential buildings, ensuring full compliance with the New Zealand Building Code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-background border border-border p-8 md:p-12 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-secondary/50 -mt-2 -mr-2" />
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {CAPABILITIES.map((cap, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}