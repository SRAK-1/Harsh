"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-40 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Harsh behind the lens"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold-muted/5 mix-blend-overlay" />
            </motion.div>

            {/* Secondary Image (Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-16 -right-8 lg:-right-16 w-56 aspect-square hidden md:block overflow-hidden rounded-2xl border-[12px] border-ivory shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80"
                alt="Camera equipment"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-12 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-6 mb-10"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">
                About Me
              </span>
              <div className="w-16 h-[1px] bg-gold-muted/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal-soft mb-12 leading-[0.9] tracking-tighter"
            >
              I Love Capturing <br />
              <span className="text-gold-muted italic font-light">Real Life Moments</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="space-y-8 text-charcoal-soft/60 font-light leading-relaxed text-xl max-w-2xl"
            >
              <p>
                I am a visual storyteller and photographer with over eight years
                of experience creating visually compelling, client-focused
                imagery across weddings, lifestyle, product, and documentary
                work.
              </p>
              <p>
                From intimate wedding ceremonies to large-scale government and
                NGO initiatives, I handle the entire process end-to-end &mdash;
                from pre-production planning and on-location shooting to
                post-processing and final delivery.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Professional Journey & Background */}
        <div className="mt-32 pt-20 border-t border-gold-muted/20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-charcoal-soft mb-16 text-center"
          >
            Professional Journey & <span className="text-gold-muted italic">Background</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 pb-16 border-b border-gold-muted/10"
          >
            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                Location
              </h4>
              <p className="text-charcoal-soft font-serif text-lg">Agra, India</p>
            </div>
            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                Experience
              </h4>
              <p className="text-charcoal-soft font-serif text-lg">8+ Years</p>
            </div>
            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                Languages
              </h4>
              <p className="text-charcoal-soft font-serif text-lg">Hindi, English</p>
            </div>
            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                Status
              </h4>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-muted animate-pulse" />
                <p className="text-charcoal-soft font-serif text-lg">Available for Booking</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-serif text-charcoal-soft mb-8 flex items-center gap-3">
                <Briefcase size={20} className="text-gold-muted" />
                Work Experience
              </h4>
              <div className="space-y-12">
                {/* Experience Item 1 */}
                <div className="relative pl-8 border-l border-gold-muted/30">
                  <div className="absolute w-3 h-3 bg-gold-muted rounded-full -left-[6.5px] top-1.5" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-2 block">2022 - 2024</span>
                  <h5 className="text-lg font-bold text-charcoal-soft mb-1">Documentary Photographer — Government Project</h5>
                  <p className="text-sm text-charcoal-soft/60 mb-4">End Poverty (Noida) Pvt. Ltd.</p>
                  <ul className="space-y-2 text-sm text-charcoal-soft/70 font-light list-disc list-inside">
                    <li>Produced documentary visuals highlighting environmental awareness and women empowerment initiatives.</li>
                    <li>Collaborated with field teams and officials to deliver impactful storytelling.</li>
                    <li>Ensured consistent visual quality across diverse outdoor shooting conditions.</li>
                  </ul>
                </div>
                {/* Experience Item 2 */}
                <div className="relative pl-8 border-l border-gold-muted/30">
                  <div className="absolute w-3 h-3 bg-gold-muted rounded-full -left-[6.5px] top-1.5" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-2 block">2021 - Present</span>
                  <h5 className="text-lg font-bold text-charcoal-soft mb-1">Freelance Photographer</h5>
                  <p className="text-sm text-charcoal-soft/60 mb-4">Self-employed</p>
                  <ul className="space-y-2 text-sm text-charcoal-soft/70 font-light list-disc list-inside">
                    <li>Executed photography projects across weddings, corporate events, and live performances.</li>
                    <li>Managed end-to-end workflow including shooting, editing, and album production.</li>
                    <li>Delivered client-focused imagery aligned with brand and event requirements.</li>
                    <li>Specialized in candid, fashion, travel, and street photography.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Education, Skills, Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-16"
            >
              {/* Education */}
              <div>
                <h4 className="text-xl font-serif text-charcoal-soft mb-8 flex items-center gap-3">
                  <GraduationCap size={20} className="text-gold-muted" />
                  Education & Skills
                </h4>
                <div className="relative pl-8 border-l border-gold-muted/30">
                  <div className="absolute w-3 h-3 bg-gold-muted rounded-full -left-[6.5px] top-1.5" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-2 block">2017 - 2019</span>
                  <h5 className="text-lg font-bold text-charcoal-soft mb-1">Intermediate (High School)</h5>
                  <p className="text-sm text-charcoal-soft/60 mb-3">Senior Secondary Education</p>
                  <p className="text-sm text-charcoal-soft/70 font-light">Built foundational knowledge while developing an early passion for visual arts and photography.</p>
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Photography (Digital & Analog)", "Wedding & Event Coverage", "Product & Lifestyle", "Studio & Natural Lighting", "Creative Direction", "Adobe Lightroom", "Adobe Photoshop", "Color Grading", "Album Design", "Videography"].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full border border-gold-muted/20 text-xs text-charcoal-soft bg-beige/30">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-4">Languages</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-full border border-gold-muted/20 text-xs text-charcoal-soft bg-beige/30">Hindi — Fluent</span>
                  <span className="px-4 py-2 rounded-full border border-gold-muted/20 text-xs text-charcoal-soft bg-beige/30">English — Working Proficiency</span>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted mb-4">Achievements</h4>
                <ul className="space-y-3 text-sm text-charcoal-soft/70 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-muted mt-1">✦</span>
                    Recognized for documentary work on environmental awareness and women empowerment.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-muted mt-1">✦</span>
                    Successfully delivered 100+ client projects across weddings, events, and brand shoots.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-muted mt-1">✦</span>
                    Consistently rated highly for reliability, communication, and visual quality.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
