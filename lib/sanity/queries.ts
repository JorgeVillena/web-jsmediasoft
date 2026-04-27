import { defineQuery } from "next-sanity";

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0]{
    companyName,
    taglineEs,
    taglineEn,
    email,
    phone,
    "logo": logo.asset->url,
    socialLinks
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service" && locale == $locale] | order(order asc){
    _id,
    title,
    slug,
    summary,
    details
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && locale == $locale] | order(order asc){
    _id,
    title,
    client,
    challenge,
    solution,
    technologies,
    results,
    liveUrl,
    "coverImage": coverImage.asset->url
  }
`);
