import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CopyTextButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center px-5 py-3 rounded-xl font-medium transition-all
        ${
          copied
            ? "bg-green-50 text-green-700 border border-green-200"
            : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100"
        }
      `}
      aria-label="Copy text to clipboard"
    >
      {copied ? (
        <FiCheck className="mr-2 text-green-600 transition-all" />
      ) : (
        <FiCopy className="mr-2 transition-all" />
      )}
      <span className="transition-all">{copied ? "Copied!" : "Copy Text"}</span>
    </button>
  );
}
