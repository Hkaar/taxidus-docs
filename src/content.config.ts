import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { X } from "lucide-react";

const docs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        group: z.string().optional(),
        lastModified: z.coerce.date(),
    }),
});

const guides = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        group: z.string().optional(),
        lastModified: z.coerce.date(),
    }),
});

export const collections = { docs, guides };
