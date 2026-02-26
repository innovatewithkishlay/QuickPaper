"use client";

const categories = ["All", "Student", "Work", "Finance"];

export default function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-xl font-medium transition-all
            ${
              selected === cat
                ? "bg-blue-600 text-white shadow"
                : "bg-neutral-100 text-neutral-700 hover:bg-blue-50 hover:text-blue-600"
            }
          `}
          type="button"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
