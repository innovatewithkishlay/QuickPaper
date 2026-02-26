"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white/80 backdrop-blur border-b border-neutral-100 sticky top-0 z-30"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl tracking-tight text-neutral-900"
        >
          <span className="rounded-lg bg-neutral-100 px-2 py-1 text-blue-600">
            QP
          </span>
          QuickPaper
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/templates"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            Templates
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/request-template"
            className="text-blue-600 font-semibold hover:underline transition-colors"
          >
            Request Template
          </Link>
        </nav>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-700 rounded transition-all duration-200 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-700 rounded my-1 transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-700 rounded transition-all duration-200 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur border-t border-neutral-100 shadow-lg px-6 py-4 flex flex-col gap-4"
          >
            <Link
              href="/"
              className="text-neutral-700 hover:text-blue-600 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/templates"
              className="text-neutral-700 hover:text-blue-600 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-blue-600 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/request-template"
              className="text-blue-600 font-semibold hover:underline py-1"
              onClick={() => setOpen(false)}
            >
              Request Template
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
