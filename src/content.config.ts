// ============================================
// ASTRO 5.0+ CONTENT COLLECTIONS CONFIG
// ============================================
// Locatie: src/content.config.ts (Astro 5.0+ best practice)
// Casa Perfecta - Agentie Imobiliara

import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================
// METADATA DEFINITION (SEO)
// ============================================
const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// ============================================
// SEO COMPONENT (reutilizabil)
// ============================================
const seoSchema = z
  .object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
  })
  .optional();

// ============================================
// BLOG POSTS
// ============================================
const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    seo: seoSchema,
    metadata: metadataDefinition(),
  }),
});

// ============================================
// PROPRIETATI - Property Listings
// ============================================
const proprietatiCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/proprietati' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    icon: z.string().optional(),

    // Property details
    propertyType: z.enum(['apartament', 'casa', 'teren', 'comercial']).default('apartament'),
    transactionType: z.enum(['vanzare', 'inchiriere']).default('vanzare'),
    price: z.number(),
    pricePerSqm: z.number().optional(),
    currency: z.string().default('EUR'),

    // Dimensions
    rooms: z.number().optional(),
    bathrooms: z.number().optional(),
    surface: z.number().optional(),
    surfaceTotal: z.number().optional(),
    landArea: z.number().optional(),
    floor: z.number().optional(),
    totalFloors: z.number().optional(),
    yearBuilt: z.number().optional(),

    // Location
    zone: z.string(),
    address: z.string().optional(),
    city: z.string().default('Bucuresti'),

    // Features
    features: z.array(z.string()).optional(),
    amenities: z.array(z.string()).optional(),

    // Status
    status: z.enum(['disponibil', 'rezervat', 'vandut', 'inchiriat']).default('disponibil'),
    featured: z.boolean().optional().default(false),
    published: z.boolean().optional().default(true),
    publishDate: z.date().optional(),

    seo: seoSchema,
  }),
});

// ============================================
// SERVICII - Real Estate Services
// ============================================
const serviciiCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/servicii' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),

    features: z.array(z.string()).optional(),
    benefits: z.array(z.string()).optional(),

    featured: z.boolean().optional().default(false),
    published: z.boolean().optional().default(true),
    publishDate: z.date().optional(),

    seo: seoSchema,
  }),
});

// ============================================
// TESTIMONIALE - Client Reviews
// ============================================
const testimonialeCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/testimoniale' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    avatar: z.string().optional(),
    location: z.string().optional(),
    profession: z.string().optional(),
    servicii: z.array(z.string()).optional(),
    propertyType: z.string().optional(),
    rating: z.number().min(1).max(5).optional().default(5),
    youtubeId: z.string().optional(),
    featured: z.boolean().optional().default(false),
    published: z.boolean().optional().default(true),
    publishDate: z.date().optional(),
  }),
});

// ============================================
// EXPORT COLLECTIONS
// ============================================
export const collections = {
  post: postCollection,
  proprietati: proprietatiCollection,
  servicii: serviciiCollection,
  testimoniale: testimonialeCollection,
};
