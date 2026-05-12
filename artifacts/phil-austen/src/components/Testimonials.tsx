import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    text: "Phil took our rough ideas and turned them into something spectacular. His understanding of the building process meant that his designs were practical and our builders loved working from his plans.",
    author: "Sarah & James T.",
    location: "Papamoa"
  },
  {
    text: "Navigating the council consent process seemed daunting, but Phil handled everything efficiently. His LBP status gave us huge peace of mind throughout the entire build.",
    author: "Mark R.",
    location: "Tauranga"
  },
  {
    text: "We wanted a modern home that felt grounded in the coastal environment. Phil nailed the brief perfectly. He's professional, approachable, and a truly skilled designer.",
    author: "Emma W.",
    location: "Mount Maunganui"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary">Client <span className="italic text-muted-foreground">Feedback</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-background p-8 border border-border flex flex-col justify-between"
            >
              <div className="mb-8">
                <span className="text-5xl font-serif text-secondary/30 leading-none block mb-4">"</span>
                <p className="text-foreground/80 italic leading-relaxed">
                  {t.text}
                </p>
              </div>
              <div>
                <p className="font-serif text-primary font-medium">{t.author}</p>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}