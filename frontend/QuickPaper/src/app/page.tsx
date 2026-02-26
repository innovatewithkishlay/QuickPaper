"use client";
import Link from "next/link";
import {
  FiArrowRight,
  FiLayers,
  FiCheckCircle,
  FiFileText,
  FiStar,
  FiEdit,
} from "react-icons/fi";
import { FiShield, FiTrendingUp, FiUsers } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const featuredNewTemplates = [
  {
    id: "bank-account-opening",
    title: "Bank Account Letter",
    isNew: true,
    description: "Open a new bank account with a formal, ready-to-use letter.",
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    isNew: true,
    description:
      "Request a bonafide certificate for academic or official purposes.",
  },
  {
    id: "character-certificate",
    title: "Character Certificate",
    isNew: true,
    description: "Get a character certificate for school, college, or work.",
  },
  {
    id: "job-offer-acceptance",
    title: "Job Offer Acceptance Letter",
    isNew: true,
    description: "Formally accept a job offer with a professional letter.",
  },
];

const sampleTemplate = {
  title: "Leave Application",
  template: `{{employeeName}}
{{designation}}, {{department}}
{{company}}

Date: {{date}}

To,
{{managerName}}
{{designation}}
{{company}}

Subject: Application for {{leaveType}} Leave

Dear {{managerName}},

I am writing to formally request a {{leaveType}} leave of absence from {{startDate}} to {{endDate}} due to {{reason}}.

During my absence, I have arranged for {{handoverDetails}} to ensure that my responsibilities are managed without disruption. Should you require any urgent assistance, I will be reachable at my email or phone.

I kindly request you to grant me leave for the mentioned period. I appreciate your understanding and support.

Thank you for your consideration.

Sincerely,
{{employeeName}}`,
};

export default function HomePage() {
  const [livePreviewValues, setLivePreviewValues] = useState({
    employeeName: "John Doe",
    designation: "Senior Developer",
    department: "Engineering",
    company: "Tech Innovations Inc.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    managerName: "Jane Smith",
    leaveType: "Annual",
    startDate: "July 15, 2025",
    endDate: "July 22, 2025",
    reason: "family vacation",
    handoverDetails: "Alex Johnson (alex@company.com) will handle my tasks",
  });

  const filledTemplate = Object.entries(livePreviewValues).reduce(
    (str, [key, value]) => str.replace(new RegExp(`{{${key}}}`, "g"), value),
    sampleTemplate.template
  );

  const isEmpty = !filledTemplate.trim();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <motion.section
          initial={{ opacity: 0, filter: "blur(16px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full max-w-6xl flex flex-col items-center text-center pt-24 pb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
          >
            <span className="block">Create Professional</span>
            <span className="block text-blue-600">Documents in Seconds</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-10 font-light max-w-3xl"
          >
            QuickPaper helps you generate, customize, and download polished
            documents with zero formatting effort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.23, ease: "easeOut" }}
          >
            <Link
              href="/templates"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-2xl text-xl shadow-xl hover:bg-blue-700 transition-all group"
            >
              <span>Browse Templates</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>

        {/* Live Preview Demo Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 bg-white rounded-2xl shadow-sm border border-gray-100 mb-14"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiEdit className="text-blue-600 text-xl" />
                <h2 className="text-base font-semibold text-gray-900">
                  Live Preview Demo
                </h2>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Fill in the details and watch your document update in real-time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(livePreviewValues).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    {key === "handoverDetails" ? (
                      <textarea
                        value={value}
                        onChange={(e) =>
                          setLivePreviewValues((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                        rows={3}
                        placeholder="Type handover details here..."
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:border-blue-500 focus:outline-none resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          setLivePreviewValues((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                        placeholder="Type here..."
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:border-blue-500 focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full"
              style={{
                borderRadius: "1rem",
                background: "#f9fafb",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="p-4 min-h-[120px] text-xs sm:text-sm text-gray-800 relative overflow-x-auto">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 m-0 bg-transparent">
                  {isEmpty ? (
                    <span className="text-gray-400">
                      Your document will appear here
                      <span className="blinking-cursor">|</span>
                    </span>
                  ) : (
                    filledTemplate
                  )}
                </pre>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* New & Trending Templates Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full flex justify-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(18px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 flex flex-col lg:flex-row items-center gap-6"
          >
            {/* Left Section */}
            <div className="w-full lg:w-auto flex flex-col justify-center items-start mb-6 lg:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-yellow-500 text-2xl" />
                <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
                  New & Trending Templates
                </h2>
              </div>
              <p className="text-gray-600 text-base mb-2">
                Discover our latest and most popular document templates.
                <br className="hidden sm:block" />
                Updated weekly for professionals, students, and businesses.
              </p>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1">
                <li>Always free to use</li>
                <li>No login required</li>
                <li>Download as PDF or copy instantly</li>
              </ul>
            </div>
            {/* Right Section */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {featuredNewTemplates.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.09,
                      ease: "easeOut",
                    }}
                    className="w-full"
                  >
                    <Link
                      href={`/${t.id}`}
                      className="group flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl shadow hover:shadow-xl transition-all hover:-translate-y-1 px-2 py-3 sm:px-3 sm:py-4 w-full min-h-[120px] sm:min-h-[150px]"
                      style={{ minHeight: 0, minWidth: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <FiFileText className="text-blue-500 text-base sm:text-lg" />
                        <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900 text-center text-xs sm:text-sm leading-tight mb-1 group-hover:text-blue-600 transition">
                        {t.title}
                      </div>
                      <div className="text-gray-500 text-xs text-center mb-2">
                        {t.description}
                      </div>
                      <span className="mt-auto text-blue-500 text-xs group-hover:underline flex items-center gap-1 font-medium">
                        Try now <FiArrowRight className="inline" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto mb-24"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiLayers className="text-blue-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curated Templates
              </h3>
              <p className="text-gray-600 text-base">
                Professionally designed templates for every need, handpicked by
                experts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiCheckCircle className="text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Results
              </h3>
              <p className="text-gray-600 text-base">
                Generate documents instantly with zero wait time and no hassle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiFileText className="text-purple-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Customization
              </h3>
              <p className="text-gray-600 text-base">
                Personalize templates effortlessly with intuitive forms and live
                preview.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiShield className="text-red-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600 text-base">
                Your data is safe with us. We prioritize privacy and security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiTrendingUp className="text-indigo-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Continuous Updates
              </h3>
              <p className="text-gray-600 text-base">
                We constantly add new templates and features to keep you ahead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiUsers className="text-pink-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600 text-base">
                Built with feedback from a vibrant community of professionals
                and students.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full max-w-2xl mx-auto mb-16 text-center"
        >
          <span className="inline-flex items-center px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-5">
            ✨ New templates added weekly
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-snug">
            Ready to create{" "}
            <span className="text-blue-600">professional documents</span>?
          </h2>
          <Link
            href="/templates"
            className="inline-flex items-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl text-base shadow hover:bg-blue-700 transition-all"
          >
            Get Started <FiArrowRight className="ml-2" />
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
