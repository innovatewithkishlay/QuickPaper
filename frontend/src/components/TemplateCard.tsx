"use client";
import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  isNew?: boolean;
  viewMode?: "grid" | "list";
}

export default function TemplateCard({
  id,
  title,
  description,
  category,
  isNew = false,
  viewMode = "grid",
}: TemplateCardProps) {
  return (
    <Link href={`/${id}`} className="block">
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "0 8px 32px -8px rgba(30, 64, 175, 0.10)",
          scale: 1.025,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`
          bg-white rounded-2xl border border-neutral-100 shadow-md p-6
          ${viewMode === "list" ? "flex items-start gap-4" : ""}
        `}
      >
        <div className={`${viewMode === "list" ? "flex-shrink-0" : "mb-3"}`}>
          <span className="bg-blue-50 text-blue-600 p-2 rounded-lg inline-block">
            <FiFileText size={22} />
          </span>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
            {isNew && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                New
              </span>
            )}
          </div>

          <p className="text-sm text-neutral-500 mb-3">{description}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-xs text-neutral-500">★ 4.9</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
