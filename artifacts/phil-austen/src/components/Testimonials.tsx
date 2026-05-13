import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Phil took our rough ideas and turned them into something spectacular. His understanding of the building process meant his designs were practical — our builders loved working from his plans.",
    author: "Sarah & James T.",
    location: "Papamoa",
  },
  {
    text: "Navigating council consent seemed daunting, but the studio handled everything efficiently. Phil's LBP status gave us huge peace of mind throughout the entire build.",
    author: "Mark R.",
    location: "Tauranga",
  },
  {
    text: "We wanted a modern home that felt grounded in the coastal environment. Phil nailed the brief perfectly — professional, approachable, and a genuinely skilled designer.",
    author: "Emma W.",
    location: "Mount Maunganui",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight tracking-tight">
              Client
            </h2>
            <h2 className="text-3xl md:text-4xl font-extralight text-muted-foreground leading-tight tracking-tight">
              Feedback.
            </h2>
          </div>
          <p className="text-foreground/50 text-sm max-w-xs text-right hidden md:block">
            Real clients. Real projects. Real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-card p-8 border border-border flex flex-col justify-between group hover:border-secondary/30 transition-colors duration-300"
              data-testid={`testimonial-card-${idx}`}
            >
              <div className="mb-8">
                <span className="text-5xl font-black text-secondary/20 leading-none block mb-4">
                  &ldquo;
                </span>
                <p className="text-foreground/75 leading-relaxed text-base">
                  {t.text}
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="font-bold text-primary text-sm tracking-wide">{t.author}</p>
                <p className="text-xs font-semibold tracking-wider text-secondary uppercase mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
