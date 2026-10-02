import React, { useState } from "react";
import { Mail, MapPin, Send, Check, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="min-h-screen relative py-20 px-4 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">Contact Me</h2>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto">
            Let's discuss how my test automation framework and quality assurance expertise can elevate your release cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-sm text-slate-300">
                Open to QA Automation, SDET, and Senior Testing roles in Pune and remote setups.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:maskeyogeish@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-sky-400 transition"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email Me</p>
                    <p className="text-sm font-semibold text-white">maskeyogeish@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-white">Wakad, Pune 411057, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Job Opportunity / Consultation"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition disabled:opacity-75"
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} /> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}