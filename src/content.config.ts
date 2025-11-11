import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const products = defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/contents/products" }),
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        image: image(),
        detail: z.object({
            fullDescription: z.string(),
            screenshots: z.array(image()),
            features: z.array(z.string()),
            technologies: z.array(z.string()),
            backgroundColor: z.object({
                primary: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "16進数のRGB形式で入力してください（例: #FF5733）"),
                secondary: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "16進数のRGB形式で入力してください（例: #FF5733）"),
            }).optional(),
        }).optional(),
    })
});

export const collections = { products };