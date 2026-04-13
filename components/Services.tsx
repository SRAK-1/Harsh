"use client";

import { motion } from "motion/react";
import { Camera, Image as ImageIcon, Video, Users, User, Film, MapPin } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Candid & traditional coverage of your most special day, from pre-wedding to reception, preserving every ritual and genuine emotion.",
    features: ["Full Timeline Coverage", "Candid Storytelling", "Album Design"],
  },
  {
    icon: ImageIcon,
    title: "Product, Lifestyle & Fashion",
    description:
      "Studio & on-location shoots for brands, creators, and e-commerce, delivering social-ready assets with consistent color grading.",
    features: [
      "Studio & Natural Light",
      "Social Media Ready",
      "Brand Identity",
    ],
  },
  {
    icon: Users,
    title: "Documentary & NGO",
    description:
      "Long-form visual narratives for government, NGO, and awareness projects. Field-optimized photography across diverse conditions.",
    features: ["Field Documentation", "Report-Ready Imagery", "Multi-Location"],
  },
  {
    icon: Video,
    title: "Events & Corporate",
    description:
      "Live performance, corporate events, and conferences captured with precision — from stage action to behind-the-scenes moments.",
    features: ["Live Event Coverage", "Corporate Headshots", "Stage & Concert"],
  },
  {
    icon: User,
    title: "Portrait Photography",
    description:
      "Soulful and expressive portraits capturing the true essence of the subject in natural and studio environments.",
    features: ["Editorial Style", "Natural Lighting", "Creative Direction"],
  },
  {
    icon: Film,
    title: "Cinematography",
    description:
      "Cinematic video production for brands, weddings, and documentaries, focusing on narrative storytelling and high-end visuals.",
    features: ["4K Video Production", "Color Grading", "Narrative Storytelling"],
  },
  {
    icon: MapPin,
    title: "Street Photography",
    description:
      "Capturing the raw, unscripted moments of everyday life in urban environments with an artistic and documentary approach.",
    features: ["Candid Moments", "Urban Exploration", "Visual Storytelling"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-40 bg-ivory relative border-t border-gold-muted/10 overflow-hidden"
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
              Expertise
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
            Photography Services to <br />
            <span className="text-gold-muted italic font-light">Elevate Your Brand</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-beige/30 border border-gold-muted/10 hover:border-gold-muted/30 hover:bg-white transition-all duration-700 rounded-3xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 mb-10 text-gold-muted/40 group-hover:text-gold-muted transition-all duration-700">
                <service.icon strokeWidth={1} size={56} />
              </div>
              <h3 className="font-serif text-2xl text-charcoal-soft mb-6 group-hover:text-gold-muted transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-charcoal-soft/60 text-base font-light leading-relaxed mb-10">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-charcoal-soft/40 uppercase"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-muted/20 group-hover:bg-gold-muted transition-all duration-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
