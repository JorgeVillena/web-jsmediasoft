import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "taglineEs", title: "Tagline (ES)", type: "string" }),
    defineField({ name: "taglineEn", title: "Tagline (EN)", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
  ],
});
