"use client";
import Header from "@/components/Header";
import { FiMail, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RequestTemplatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 w-full px-4 py-12 max-w-5xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-4 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <FiZap size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Need a specific template?
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                We&#39;re expanding our library weekly. Request any document
                template you need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                    <FiZap className="text-blue-600" />
                    How it works
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Describe your needed template</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>We&#39;ll review and create it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Get notified when it&#39;s added</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    Popular requests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      Legal Documents
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      Academic Certificates
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      Business Proposals
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      Loan Applications
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Get it added
                  </h3>
                  <p className="text-gray-600">
                    Just send us a quick email describing the template you need.
                    Our team reviews requests daily and prioritizes popular
                    templates.
                  </p>
                  <p className="text-gray-600">
                    We typically add new templates every Tuesday and Friday.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="mailto:kkishlay502@gmail.com?subject=Template%20Request%20for%20QuickPaper"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg"
                  >
                    <FiMail size={24} />
                    Mail Your Request
                  </a>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    We&#39;ll respond within 48 hours
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 border-t border-gray-100 rounded-2xl p-6 text-center mt-10"
            >
              <p className="text-gray-500 text-sm">
                Your request helps us improve QuickPaper for professionals and
                students worldwide.
              </p>
              <Link
                href="/templates"
                className="inline-block text-blue-600 hover:underline mt-2"
              >
                Browse existing templates
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
