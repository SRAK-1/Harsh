"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-40 bg-ivory relative border-t border-gold-muted/10"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-10"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">
                Get In Touch
              </span>
              <div className="w-16 h-[1px] bg-gold-muted/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.5 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal-soft mb-12 leading-[0.9] tracking-tighter"
            >
              Let&apos;s Create <br />
              <span className="text-gold-muted italic font-light">
                Something Beautiful
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal-soft/60 font-light leading-relaxed text-xl mb-16 max-w-md"
            >
              Have a project in mind? I&apos;d love to hear about it. Whether
              it&apos;s a wedding, brand shoot, event, or documentary &mdash;
              let&apos;s discuss how we can bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-muted/20 flex items-center justify-center text-gold-muted shrink-0 shadow-sm">
                  <Mail size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                    Email
                  </h4>
                  <a
                    href="mailto:harshkumar89006@gmail.com"
                    className="text-charcoal-soft hover:text-gold-muted transition-colors text-xl font-serif"
                  >
                    harshkumar89006@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-muted/20 flex items-center justify-center text-gold-muted shrink-0 shadow-sm">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                    Phone
                  </h4>
                  <a
                    href="tel:+918909906051"
                    className="text-charcoal-soft hover:text-gold-muted transition-colors text-xl font-serif"
                  >
                    +91 89099 06051
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-14 h-14 rounded-full border border-gold-muted/20 flex items-center justify-center text-gold-muted shrink-0 shadow-sm">
                  <MapPin size={20} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-[9px] tracking-[0.3em] uppercase text-gold-muted font-bold mb-3">
                    Location
                  </h4>
                  <p className="text-charcoal-soft text-xl font-serif">Agra, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-beige/20 p-10 md:p-16 border border-gold-muted/10 rounded-3xl shadow-2xl backdrop-blur-sm"
          >
            {isMounted ? (
              <form onSubmit={handleSubmit} className="space-y-10" suppressHydrationWarning>
                <div className="space-y-3" suppressHydrationWarning>
                  <label
                    htmlFor="name"
                    className="text-[9px] tracking-[0.2em] uppercase text-gold-muted font-bold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-gold-muted/20 py-4 text-charcoal-soft focus:outline-none focus:border-gold-muted transition-all duration-500 font-serif text-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3" suppressHydrationWarning>
                  <label
                    htmlFor="email"
                    className="text-[9px] tracking-[0.2em] uppercase text-gold-muted font-bold"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-gold-muted/20 py-4 text-charcoal-soft focus:outline-none focus:border-gold-muted transition-all duration-500 font-serif text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-3" suppressHydrationWarning>
                  <label
                    htmlFor="service"
                    className="text-[9px] tracking-[0.2em] uppercase text-gold-muted font-bold"
                  >
                    Type of Shoot
                  </label>
                  <select
                    id="service"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-gold-muted/20 py-4 text-charcoal-soft/60 focus:outline-none focus:border-gold-muted transition-all duration-500 appearance-none font-serif text-lg"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-ivory text-charcoal-soft/40"
                    >
                      Select Service
                    </option>
                    <option value="wedding" className="bg-ivory">
                      Wedding Photography
                    </option>
                    <option value="event" className="bg-ivory">
                      Event / Concert
                    </option>
                    <option value="product" className="bg-ivory">
                      Product / Lifestyle
                    </option>
                    <option value="documentary" className="bg-ivory">
                      Documentary / NGO
                    </option>
                    <option value="other" className="bg-ivory">
                      Other
                    </option>
                  </select>
                </div>

                <div className="space-y-3" suppressHydrationWarning>
                  <label
                    htmlFor="message"
                    className="text-[9px] tracking-[0.2em] uppercase text-gold-muted font-bold"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gold-muted/20 py-4 text-charcoal-soft focus:outline-none focus:border-gold-muted transition-all duration-500 resize-none font-serif text-lg"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full py-5 bg-charcoal-soft text-ivory text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-gold-muted hover:shadow-2xl transition-all duration-700 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {formStatus === "idle" && (
                    <>
                      Send Message <ArrowRight size={14} />
                    </>
                  )}
                  {formStatus === "submitting" && "Sending..."}
                  {formStatus === "success" && "Message Sent!"}
                </button>
              </form>
            ) : (
              <div className="h-[500px] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gold-muted border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
