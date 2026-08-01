import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const statusSchema = z.enum(['announced', 'preview', 'live']);

const worlds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/worlds' }),
  schema: z.object({
    num: z.string(),
    name: z.string(),
    tag: z.string(),
    alt: z.string(),
    image: z.string(),
    intro: z.string(),
  }),
});

const waves = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/waves' }),
  schema: z.object({
    wave: z.number(),
    name: z.string(),
    status: statusSchema,
    headline: z.string(),
    theme: z.string(),
    launchDate: z.string().optional(),
    description: z.string(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    world: z.string(),
    wave: z.number(),
    status: statusSchema,
    priceLabel: z.string().optional(),
    image: z.string(),
    short: z.string(),
    description: z.string(),
    shopifyUrl: z.string().url().optional(),
  }),
});

export const collections = { worlds, waves, products };
