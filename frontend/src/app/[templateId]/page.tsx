"use client";
import { useState, useMemo, useEffect } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import FormRenderer from "@/components/FormRenderer";
import PDFExporter from "@/components/PDFExporter";
import Template from "../Template";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiHome, FiSave } from "react-icons/fi";
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

export default function TemplatePage() {
  const params = useParams();
  const templateId = params.templateId as string;
  const router = useRouter();
  const { user } = useAuth();

  const [templateData, setTemplateData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [showFullPreview, setShowFullPreview] = useState(false);

  useEffect(() => {
    api.getTemplateById(templateId)
      .then((data) => {
        setTemplateData(data);
        const obj: Record<string, string> = {};
        data.fields.forEach((f: any) => (obj[f.name] = ""));
        setValues(obj);
      })
      .catch(() => notFound())
      .finally(() => setLoading(false));
  }, [templateId]);

  const handleSaveDraft = async () => {
    if (!user) {
      alert("Please login to save drafts.");
      return;
    }
    setSaving(true);
    try {
      const doc = await api.createDocument({
        templateId,
        title: templateData.title, // User can change title later
        contentData: values
      });
      router.push(`/documents/${doc.id}`); // Redirect to document editor
    } catch (error) {
      console.error("Failed to save draft", error);
      alert("Failed to save draft");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading template...</div>;
  if (!templateData) return notFound();

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
    (f) => values[f.name]?.trim() !== ""
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
                <Link
                  href="/"
                  className="inline-flex items-center hover:underline text-blue-600"
                >
                  <FiHome className="mr-1" /> Home
                </Link>
                <span>/</span>
                <Link
                  href="/templates"
                  className="hover:underline text-blue-600"
                >
                  Templates
                </Link>
                <span>/</span>
                <span className="font-medium text-gray-700">
                  {templateData.title}
                </span>
              </div>

              <motion.div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {templateData.title}
                </h1>
                <p className="text-gray-600">{templateData.description}</p>
              </motion.div>

              <motion.div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <FormRenderer
                  fields={templateData.fields}
                  values={values}
                  onChange={setValues}
                />
              </motion.div>

              <motion.div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const obj: Record<string, string> = {};
                    templateData.fields.forEach((f: any) => (obj[f.name] = ""));
                    setValues(obj);
                  }}
                  className="flex items-center px-5 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                >
                  Reset Form
                </button>
                <button
                  onClick={handleSaveDraft}
                  disabled={saving}
                  className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium disabled:opacity-50"
                >
                  {saving ? "Saving..." : <><FiSave className="mr-2" /> Save Draft</>}
                </button>
                <CopyTextButton textToCopy={filled.replace(/<[^>]+>/g, "")} />
                <PDFExporter
                  htmlContent={filled}
                  fileName={`${templateData.title}.pdf`}
                  disabled={!allFieldsFilled}
                />
              </motion.div>
            </motion.div>

            <div className="sticky top-24 w-full max-w-xl mx-auto">
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
                    {filled ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: showFullPreview ? filled : getPreview(),
                        }}
                      />
                    ) : (
                      <div className="text-gray-400 italic h-full flex items-center justify-center">
                        Fill in the form to see your document preview
                      </div>
                    )}
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
