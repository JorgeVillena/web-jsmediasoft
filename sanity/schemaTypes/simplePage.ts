import { defineField, defineType } from "sanity";

function buildSimplePage(name: string, title: string) {
  return defineType({
    name,
    title,
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
      defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
      defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
    ],
  });
}

export const homePage = buildSimplePage("homePage", "Home Page");  // This is the home page for the website
export const aboutPage = buildSimplePage("aboutPage", "About Page"); // This is the about page for the website
export const contactPage = buildSimplePage("contactPage", "Contact Page"); // This is the contact page for the website
export const navigation = buildSimplePage("navigation", "Navigation"); // This is the navigation for the website
