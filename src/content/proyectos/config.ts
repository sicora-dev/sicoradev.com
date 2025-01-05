import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        title: z.string(),
        url: z.string().url(),
        img: z.string().url(),
        description: z.string()
    })    
})

export const collections = { proyectos }