import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Olive & Orchard Banquet Hall',
  description:
    'Discover the story behind Olive & Orchard Banquet Hall — over 12 years of luxury event experiences, 5,000+ events hosted, and a passionate team dedicated to making every celebration unforgettable.',
  keywords: [
    'about Olive Orchard',
    'banquet hall history',
    'luxury wedding venue story',
    'event venue team',
    'premium banquet hall about',
    'Olive Orchard mission',
  ],
  alternates: {
    canonical: 'https://oliveorchard.com/about',
  },
  openGraph: {
    title: 'About Us | Olive & Orchard Banquet Hall',
    description:
      '12+ years of crafting unforgettable celebrations. Learn about our story, values, and the passionate team behind every magical event.',
    url: 'https://oliveorchard.com/about',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519167758251-7e84e2e8d7d6?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Olive & Orchard Banquet Hall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Olive & Orchard Banquet Hall',
    description: 'The story behind 12+ years of luxury celebrations.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
