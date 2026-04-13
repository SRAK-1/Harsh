"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Harsh has an incredible eye for detail. He captured our wedding in the most beautiful, candid way. Every photo tells a story.",
    author: "Riya & Ankit",
    role: "Wedding Client",
    initial: "R",
  },
  {
    quote:
      "Professional, reliable, and immensely talented. The product photos he delivered exceeded all our expectations for the campaign.",
    author: "Suraj Mehra",
    role: "Brand Owner",
    initial: "S",
  },
  {
    quote:
      "His documentary work powerfully captured the spirit of our initiatives. Authentic visuals that moved people and drove awareness.",
    author: "Priya Singh",
    role: "NGO Director",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-40 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="w-16 h-[1px] bg-gold-muted/30" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">
              Testimonials
            </span>
            <div className="w-16 h-[1px] bg-gold-muted/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1.5 }}
            className="font-serif text-5xl md:text-7xl text-charcoal-soft leading-[0.9] tracking-tighter"
          >
            What Clients Say About <br />
            <span className="text-gold-muted italic font-light">My Work</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-12 bg-beige/30 border border-gold-muted/10 rounded-3xl flex flex-col justify-between hover:bg-white hover:border-gold-muted/30 hover:shadow-2xl transition-all duration-700"
            >
              <div>
                <div className="text-gold-muted/20 mb-10 font-serif text-6xl group-hover:text-gold-muted/40 transition-colors duration-700">
                  &quot;
                </div>
                <p className="text-charcoal-soft/70 font-light leading-relaxed mb-12 italic text-lg group-hover:text-charcoal-soft transition-colors duration-500">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-gold-muted/20 flex items-center justify-center font-serif text-xl text-gold-muted group-hover:bg-gold-muted group-hover:text-ivory transition-all duration-700">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-charcoal-soft font-serif text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-gold-muted text-[9px] font-bold tracking-[0.2em] uppercase mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
