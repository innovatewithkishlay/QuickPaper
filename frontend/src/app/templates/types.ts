export type TemplateField = {
  name: string;
  label: string;
  type: "text" | "textarea" | "date" | "number" | "select";
  options?: string[];
};

export type Template = {
  id: string;
  title: string;
  description: string;
  category: string;
  popularity: number;
  isNew: boolean;
  glimpse: string;
  fields: TemplateField[];
  template: string;
};
