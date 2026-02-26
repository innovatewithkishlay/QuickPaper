import { motion } from "framer-motion";
import { FiMail, FiRefreshCw } from "react-icons/fi";

export default function NoResultsFound({ searchTerm }: { searchTerm: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 max-w-md mx-auto"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        No templates found for &quot;{searchTerm}&quot;
      </h3>

      <p className="text-gray-600 mb-8">
        Don&apos;t worry! We&apos;re constantly adding new templates.
      </p>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          >
            <FiRefreshCw className="mr-2" />
            Clear Search
          </button>

          <a
            href="mailto:kkishlay502@gmail.com?subject=Request%20for%20New%20Template&body=Hi%20QuickPaper%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20new%20template%20for%3A%20"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            <FiMail className="mr-2" />
            Request Template
          </a>
        </div>

        <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
          ✨ New templates added every Tuesday & Friday
        </div>
      </div>
    </motion.div>
  );
}
