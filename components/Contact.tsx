"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { CONTACT_INFO } from "@/lib/constants";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false },
);

export default function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setFormState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      formEl.reset();
      setFormState("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setFormState("error");
    }
  };

  const contactItems = [
    { icon: MapPin, text: CONTACT_INFO.location, href: undefined as string | undefined },
    { icon: Phone, text: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}` },
    { icon: Mail, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  ].filter((item) => item.text);

  return (
    <section id="contact" className="py-10 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content Layout */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 isolate relative items-center pt-4">
          {/* Left Column: Form Segment */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-luxury mb-4">
                Let's Build{" "}
                <span className="text-gradient">Something Great</span>
              </h2>
              <p className="text-textMuted text-base mb-10 leading-relaxed max-w-md">
                Have a vision for a project? We're here to help you turn it into
                reality. Reach out for a free consultation or just to say hello.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full h-14 px-5 rounded-xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Go ahead, we are listening..."
                    rows={5}
                    required
                    className="w-full px-5 py-5 rounded-xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 resize-none text-slate-700 text-sm font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending" || formState === "success"}
                  className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center transition-all hover:bg-primary/90 mt-2 shadow-lg hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70"
                >
                  {(formState === "idle" || formState === "error") && "Submit"}
                  {formState === "sending" && (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {formState === "success" && "Message Sent! ✨"}
                </button>

                {formState === "error" && (
                  <p role="alert" className="text-sm font-medium text-destructive text-center">
                    {errorMsg}
                  </p>
                )}
                {formState === "success" && (
                  <p role="status" className="text-sm font-medium text-secondary text-center">
                    Thanks! We&apos;ll get back to you shortly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>

          {/* Right Column: Lottie & Info */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex-grow flex flex-col items-center lg:items-start"
            >
              {/* Lottie Animation */}
              <div className="w-full max-w-[600px] lg:max-w-none pointer-events-none scale-[1.2] md:scale-[1.7] transform-gpu origin-top lg:translate-y-[80px]">
                <DotLottieReact src="/contact_orange.json" autoplay loop />
              </div>

              {/* Contact Information Row */}
              <div className="flex flex-row justify-between items-center w-full mt-12 lg:mt-[200px] gap-4 z-10 relative">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <item.icon size={20} />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-textMuted text-sm font-medium hover:text-primary transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-textMuted text-sm font-medium">{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
