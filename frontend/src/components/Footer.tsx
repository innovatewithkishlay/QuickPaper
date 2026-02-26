"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiGithub,
  FiMail,
  FiTwitter,
  FiUser,
  FiExternalLink,
} from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full border-t border-gray-100 bg-white backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-neutral-600">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">QuickPaper</h3>
          <p className="text-gray-500">
            Built with{" "}
            <span className="text-blue-600 font-medium">Next.js</span> &{" "}
            <span className="text-sky-600 font-medium">Tailwind CSS</span>
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
            <FiUser /> Developer
          </h4>
          <Link
            href="https://kishlaykumar.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
          >
            Kishlay Kumar <FiExternalLink size={14} />
          </Link>
          <p className="text-gray-500 text-xs">Full-Stack Dev & Creator</p>
        </div>

        <div className="flex items-start md:justify-end gap-5">
          <Link
            href="mailto:kkishlay502@gmail.com"
            className="hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <FiMail size={20} />
          </Link>
          <Link
            href="https://github.com/innovatewithkishlay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </Link>
          <Link
            href="https://x.com/kishlay_012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Twitter"
          >
            <FiTwitter size={20} />
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-400 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} QuickPaper. All rights reserved.
      </div>
    </motion.footer>
  );
}
