import { createClient } from "next-sanity";

import { isSanityConfigured, sanityEnv } from "./env";

export const client = createClient({
  projectId: sanityEnv.projectId || "demo",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: true,
});

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params);
  } catch {
    return null;
  }
}
