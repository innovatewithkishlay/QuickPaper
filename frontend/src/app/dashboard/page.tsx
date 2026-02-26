"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";
import { FiFileText, FiCalendar, FiClock, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Dashboard() {
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getUserDocuments()
            .then(setDocuments)
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Documents</h1>
                    <Link
                        href="/templates"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FiPlus className="mr-2" /> New Document
                    </Link>
                </div>

                {loading ? (
                    <p className="text-gray-500">Loading documents...</p>
                ) : documents.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <FiFileText className="mx-auto text-5xl text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No documents yet</h3>
                        <p className="text-gray-500 mb-6">Create your first document from a template.</p>
                        <Link
                            href="/templates"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Browse Templates
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc, i) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link
                                    href={`/documents/${doc.id}`}
                                    className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-200 group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <FiFileText size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {doc.template?.title || "Unknown Template"}
                                    </p>
                                    <div className="flex items-center text-xs text-gray-400 gap-4 mt-auto">
                                        <div className="flex items-center gap-1">
                                            <FiCalendar />
                                            {new Date(doc.created_at).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FiClock />
                                            {new Date(doc.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
