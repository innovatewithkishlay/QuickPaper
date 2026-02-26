"use client";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

export default function TemplatePreview({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-xl rounded-2xl shadow-xl border border-slate-100 overflow-hidden bg-white/80 backdrop-blur-lg"
      style={{
        minHeight: 340,
      }}
    >
      <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white/80 to-slate-50/80">
        <FiEye className="text-blue-500" />
        <span className="font-semibold text-gray-800 text-base tracking-wide">
          Live Preview
        </span>
      </div>
      <div className="p-8 whitespace-pre-line font-sans text-base text-neutral-800 leading-relaxed min-h-[220px]">
        {content ? (
          content
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-neutral-400 italic">
            <span className="mb-2">
              Fill in the form to see your document preview here.
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
