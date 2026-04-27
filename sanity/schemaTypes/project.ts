import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
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
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "challenge", title: "Challenge", type: "text", rows: 3 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 4 }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "results", title: "Results", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 1 }),
  ],
});
