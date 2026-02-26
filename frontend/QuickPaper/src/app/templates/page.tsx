import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "@/app/Template";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiList, FiFilter } from "react-icons/fi";
import NoResultsFound from "@/components/NoResultsFound";
import { api } from "@/lib/api";

const categories = ["All", "Student", "Work", "Finance", "Legal", "Personal"];

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getTemplates()
      .then(setTemplates)
      .catch((err) => console.error("Failed to load templates", err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let result = templates;
    if (selectedCategory !== "All") {
      result = result.filter((t) => t.category === selectedCategory);
    }
    if (search.trim()) {
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.description?.toLowerCase().includes(search.toLowerCase()) ||
          t.category.toLowerCase().includes(search.toLowerCase())
      );
    }
    return result; // Backend doesn't send popularity yet, strictly
  }, [search, selectedCategory, templates]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <Template>
        <main className="flex-1 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(14px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, type: "spring" }}
              className="text-center mb-12"
            >
              <motion.h1
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.12, type: "spring" }}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
              >
                Find Your Perfect Template
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.18, type: "spring" }}
                className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto"
              >
                {templates.length}+ modern, ready-to-use documents—search,
                filter, and create in seconds.
              </motion.p>
              {loading && <p className="text-blue-600 animate-pulse">Loading templates...</p>}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.22, type: "spring" }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium shadow-sm"
              >
                ✨ New templates every week
              </motion.div>
            </motion.div>

            {/* Search & Filters */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1 w-full">
                  <SearchBar value={search} onChange={setSearch} />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium"
                >
                  <FiFilter size={18} />
                  Filters
                </button>
                <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-full transition-all ${viewMode === "grid"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-500 hover:text-blue-700"
                      }`}
                    aria-label="Grid view"
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-full transition-all ${viewMode === "list"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-500 hover:text-blue-700"
                      }`}
                    aria-label="List view"
                  >
                    <FiList size={18} />
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {(showFilters || !showFilters) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 overflow-hidden ${showFilters ? "block" : "hidden md:block"
                      }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 rounded-full font-medium text-sm transition-all border
                            ${selectedCategory === cat
                              ? "bg-blue-600 text-white border-blue-600 shadow"
                              : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400"
                            }
                          `}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.18 }}
              className="mb-6 flex justify-between items-center"
            >
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "template" : "templates"}
              </p>
            </motion.div>

            {/* Results Section */}
            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                >
                  <NoResultsFound searchTerm={search} />
                </motion.div>
              ) : (
                <motion.div
                  key={`${viewMode}-${selectedCategory}-${search}`}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className={`grid gap-6 ${viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1"
                    }`}
                >
                  {filtered.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <TemplateCard {...template} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </Template>
    </div>
  );
}
