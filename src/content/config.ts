import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean(),
        pubDate: z.date(),
    }),
});

export const collections = {
    projets: projectCollection,
};
