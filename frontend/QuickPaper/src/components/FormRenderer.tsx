"use client";
import { useRef, useEffect, useState } from "react";
import { TemplateField } from "@/app/templates/types";

interface FormRendererProps {
  fields: TemplateField[];
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
}

export default function FormRenderer({
  fields,
  values,
  onChange,
}: FormRendererProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const fieldRefs = useRef<
    (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)[]
  >([]);

  useEffect(() => {
    const nextEmpty = fields.findIndex((f) => !values[f.name]?.trim());
    setActiveIndex(nextEmpty === -1 ? fields.length : nextEmpty);
    if (nextEmpty !== -1 && fieldRefs.current[nextEmpty]) {
      fieldRefs.current[nextEmpty]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [values, fields]);

  const visibleCount = activeIndex + 1;

  return (
    <div
      className="space-y-6 overflow-y-auto"
      style={{ maxHeight: 400, minHeight: 200, transition: "max-height 0.3s" }}
    >
      {fields.slice(0, visibleCount).map((field, idx) => (
        <div
          key={field.name}
          className={`space-y-2 transition-all duration-300 ${
            idx < activeIndex ? "opacity-60" : "opacity-100"
          }`}
        >
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              ref={(el) => {
                fieldRefs.current[idx] = el;
              }}
              value={values[field.name] || ""}
              onChange={(e) =>
                onChange({ ...values, [field.name]: e.target.value })
              }
              className="
                w-full
                border-2
                border-gray-200
                rounded-2xl
                px-4
                py-3
                focus:border-blue-500
                focus:outline-none
                transition
                duration-150
                ease-in-out
                text-lg
                placeholder-gray-400
                bg-white
                box-border
              "
              rows={4}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              onFocus={() => setActiveIndex(idx)}
            />
          ) : field.type === "select" ? (
            <select
              ref={(el) => {
                fieldRefs.current[idx] = el;
              }}
              value={values[field.name] || ""}
              onChange={(e) =>
                onChange({ ...values, [field.name]: e.target.value })
              }
              className="
                w-full
                border-2
                border-gray-200
                rounded-2xl
                px-4
                py-3
                focus:border-blue-500
                focus:outline-none
                transition
                duration-150
                ease-in-out
                text-lg
                placeholder-gray-400
                bg-white
                box-border
              "
              onFocus={() => setActiveIndex(idx)}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              ref={(el) => {
                fieldRefs.current[idx] = el;
              }}
              type={field.type}
              value={values[field.name] || ""}
              onChange={(e) =>
                onChange({ ...values, [field.name]: e.target.value })
              }
              className="
                w-full
                border-2
                border-gray-200
                rounded-2xl
                px-4
                py-3
                focus:border-blue-500
                focus:outline-none
                transition
                duration-150
                ease-in-out
                text-lg
                placeholder-gray-400
                bg-white
                box-border
              "
              placeholder={`Enter ${field.label.toLowerCase()}`}
              onFocus={() => setActiveIndex(idx)}
            />
          )}
        </div>
      ))}
      {visibleCount >= fields.length && (
        <div className="text-center text-green-600 text-sm pt-2">
          All fields completed 🎉
        </div>
      )}
    </div>
  );
}
