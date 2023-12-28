import { z, defineCollection } from 'astro:content';

export const collections = {
  'posts': defineCollection({
    type: 'pages', // v2.5.0 and later
    schema: z.object({}),
  }),
};

