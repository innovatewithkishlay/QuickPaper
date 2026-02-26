"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-medium text-neutral-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 mb-8">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
          Try generating documents instead with QuickPaper.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition-all"
          >
            Go to Homepage
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-xl border border-blue-600 shadow-sm hover:bg-blue-50 transition-all"
          >
            About QuickPaper
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
