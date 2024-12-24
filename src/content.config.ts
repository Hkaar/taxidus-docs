import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
    }),
});

const guides = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = { docs, guides };
