import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
      options: { list: [{ title: "Spanish", value: "es" }, { title: "English", value: "en" }] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "details", title: "Details", type: "text", rows: 4 }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 1 }),
  ],
});
