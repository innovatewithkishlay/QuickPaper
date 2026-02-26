"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "../Template";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Template>
        <main className="flex-1 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center mb-14"
            >
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900"
              >
                About QuickPaper
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                className="w-20 h-1 bg-blue-600 mx-auto mb-8"
              />
              <motion.p
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
                className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              >
                QuickPaper streamlines document creation for students and
                professionals. Our minimalist, intuitive platform helps you
                create formal documents instantly—without distractions or
                clutter.
              </motion.p>
            </motion.div>

            {/* Why Choose */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            >
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
                  className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6"
                >
                  Why Choose QuickPaper?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
                  className="text-base md:text-lg text-neutral-700 leading-relaxed"
                >
                  QuickPaper revolutionizes the way you create formal documents.
                  Whether you need a leave application, resignation letter, or
                  any official document, our platform provides beautiful,
                  professional templates you can customize instantly.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="text-base md:text-lg text-neutral-700 leading-relaxed"
                >
                  Built with modern web technologies, QuickPaper offers a
                  seamless experience across all devices. No registration
                  required, no hidden fees—just pure productivity.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <li className="text-blue-600 font-medium text-sm">
                    ⚡ Instant generation
                  </li>
                  <li className="text-neutral-500 font-medium text-sm">
                    📱 Mobile responsive
                  </li>
                  <li className="text-neutral-500 font-medium text-sm">
                    🔒 Privacy first
                  </li>
                </motion.ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "20+",
                    label: "Templates",
                  },
                  {
                    value: "0",
                    label: "Sign-up Required",
                  },
                  {
                    value: "100%",
                    label: "Free to Use",
                  },
                  {
                    value: "⚡",
                    label: "Lightning Fast",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.34 + i * 0.06,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.04 }}
                    className="p-6 rounded-xl border border-gray-100 bg-white text-center"
                  >
                    <div className="text-2xl font-bold text-neutral-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
              className="rounded-2xl bg-neutral-50 p-8 mb-20"
            >
              <motion.h3
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
                className="text-xl md:text-2xl font-semibold text-neutral-900 mb-8 text-center"
              >
                How QuickPaper Works
              </motion.h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: 1,
                    title: "Choose Template",
                    desc: "Browse our collection and select the template you need.",
                  },
                  {
                    step: 2,
                    title: "Fill Details",
                    desc: "Complete the simple form and see live preview updates.",
                  },
                  {
                    step: 3,
                    title: "Download & Use",
                    desc: "Copy your document or export as PDF—ready to use.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.36 + i * 0.06,
                      ease: "easeOut",
                    }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Section */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
              className="rounded-2xl bg-neutral-50 p-8"
            >
              <motion.h3
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
                className="text-xl md:text-2xl font-semibold text-neutral-900 mb-6 text-center"
              >
                Built with Modern Technology
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-neutral-600 mb-8 max-w-2xl mx-auto text-center"
              >
                QuickPaper is crafted using the latest web technologies for
                speed, beauty, and seamless experience.
              </motion.p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(
                  (tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, filter: "blur(8px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.42 + i * 0.04,
                        ease: "easeOut",
                      }}
                      className="px-5 py-2 bg-white border border-gray-100 rounded-lg font-medium text-neutral-700 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </main>
      </Template>
      <Footer />
    </div>
  );
}
