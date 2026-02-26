"use client";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

export default function PDFExporter({
  htmlContent,
  fileName = "document.pdf",
  disabled,
}: {
  htmlContent: string;
  fileName?: string;
  disabled: boolean;
}) {
  function handleDownload() {
    if (disabled) return;

    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;
    Object.assign(temp.style, {
      width: "210mm",
      minHeight: "297mm",
      padding: "20mm",
      fontFamily: "serif",
      fontSize: "14px",
      lineHeight: "1.8",
      background: "white",
    });

    document.body.appendChild(temp);

    html2pdf()
      .set({
        margin: 0,
        filename: fileName,
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(temp)
      .save();

    setTimeout(() => {
      document.body.removeChild(temp);
    }, 500);
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.04 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      onClick={handleDownload}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium shadow-md transition-all ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      <FiDownload size={18} />
      Download PDF
    </motion.button>
  );
}
