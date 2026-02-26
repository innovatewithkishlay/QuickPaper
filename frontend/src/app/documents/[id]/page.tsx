"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import FormRenderer from "@/components/FormRenderer";
import PDFExporter from "@/components/PDFExporter";
import Template from "@/app/Template";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiHome, FiSave, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import CopyTextButton from "@/components/CopyTextButton";
import Footer from "@/components/Footer";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

function fillTemplate(
    template: string,
    values: Record<string, string>,
    fields: { name: string; label: string }[]
) {
    return template.replace(/{{(\w+)}}/g, (_, key) => {
        const value = values[key]?.trim();
        const field = fields.find((f) => f.name === key);
        if (value) return value.replace(/\n/g, "<br/>");
        return field
            ? `<span class="placeholder-in-preview">${field.label}</span>`
            : `<span class="placeholder-in-preview">&nbsp;</span>`;
    });
}

function useDebounce(effect: () => void, dependencies: any[], delay: number) {
    const callback = useCallback(effect, dependencies);

    useEffect(() => {
        const timeout = setTimeout(callback, delay);
        return () => clearTimeout(timeout);
    }, [callback, delay]);
}

export default function DocumentEditor() {
    const params = useParams();
    const documentId = params.id as string;
    const { user } = useAuth();

    const [doc, setDoc] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [values, setValues] = useState<Record<string, string>>({});
    const [showFullPreview, setShowFullPreview] = useState(false);

    useEffect(() => {
        api.getDocumentById(documentId)
            .then((data) => {
                setDoc(data);
                setValues(data.content_data || {});
            })
            .catch(() => notFound())
            .finally(() => setLoading(false));
    }, [documentId]);

    // Auto-save logic
    useEffect(() => {
        if (!doc || loading) return;

        const timeout = setTimeout(async () => {
            // Only save if values changed from initial? 
            // For simplicity, we save diff if not saving.
            // Actually, we need to compare with previous saved state to avoid spam,
            // but let's just save on debounce for now as requested.
            setSaving(true);
            try {
                await api.updateDocument(documentId, {
                    title: doc.title,
                    contentData: values
                });
                setLastSaved(new Date());
            } catch (e) {
                console.error("Auto-save failed", e);
            } finally {
                setSaving(false);
            }
        }, 2000);

        return () => clearTimeout(timeout);
    }, [values, documentId]);
    // Warning: verifying `doc` dependency might cause loop if doc updates on save. 
    // But we only update `lastSaved`. `doc` isn't updated on save here.

    if (loading) return <div className="p-10 text-center">Loading document...</div>;
    if (!doc) return notFound();

    const templateData = doc.template;
    const filled = fillTemplate(
        templateData.template,
        values,
        templateData.fields
    );

    const previewLength = 300;
    const isLong = filled.replace(/<[^>]+>/g, "").length > previewLength;

    function getPreview() {
        const text = filled.replace(/<[^>]+>/g, "");
        if (text.length <= previewLength) return filled;
        let count = 0,
            i = 0;
        for (; i < filled.length && count < previewLength; i++) {
            if (filled[i] === "<") {
                while (filled[i] !== ">" && i < filled.length) i++;
            } else {
                count++;
            }
        }
        return filled.slice(0, i) + "...";
    }

    const allFieldsFilled = templateData.fields.every(
        (f: any) => values[f.name]?.trim() !== ""
    );

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
            <Header />
            <main className="flex-1">
                <Template>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(12px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                            className="space-y-8 w-full max-w-xl mx-auto"
                        >
                            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                                <Link href="/dashboard" className="hover:underline text-blue-600">
                                    <FiHome className="mr-1 inline" /> Dashboard
                                </Link>
                                <span>/</span>
                                <span className="font-medium text-gray-700">
                                    {doc.title}
                                </span>
                            </div>

                            <motion.div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {doc.title}
                                </h1>
                                <p className="text-sm text-gray-400">
                                    {saving ? "Saving..." : lastSaved ? `Saved ${lastSaved.toLocaleTimeString()}` : "All changes saved locally"}
                                </p>
                            </motion.div>

                            <motion.div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                                <FormRenderer
                                    fields={templateData.fields}
                                    values={values}
                                    onChange={setValues}
                                />
                            </motion.div>

                            <motion.div className="flex flex-wrap gap-3">
                                <CopyTextButton textToCopy={filled.replace(/<[^>]+>/g, "")} />
                                <PDFExporter
                                    htmlContent={filled}
                                    fileName={`${doc.title}.pdf`}
                                    disabled={!allFieldsFilled}
                                />
                            </motion.div>
                        </motion.div>

                        <div className="sticky top-24 w-full max-w-xl mx-auto">
                            {/* Preview Logic Same as Template Page */}
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white/80 to-slate-50/80">
                                    <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                                        Live Preview
                                    </h3>
                                    {isLong && (
                                        <button
                                            onClick={() => setShowFullPreview(!showFullPreview)}
                                            className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                        >
                                            {showFullPreview ? (
                                                <>
                                                    Hide Full <FiChevronUp className="ml-1" />
                                                </>
                                            ) : (
                                                <>
                                                    View Full <FiChevronDown className="ml-1" />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={showFullPreview ? "full" : "partial"}
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(8px)" }}
                                        transition={{ duration: 0.6 }}
                                        className="p-8 whitespace-pre-line font-sans text-gray-800 leading-relaxed"
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: showFullPreview ? filled : getPreview(),
                                            }}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </Template>
            </main>
            <Footer />
        </div>
    );
}
