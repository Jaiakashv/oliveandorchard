import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Olive & Orchard Banquet Hall',
  description:
    'Explore premium event services at Olive & Orchard — weddings, receptions, birthdays, corporate events, catering, decoration, and more. Flexible packages starting from ₹50,000.',
  keywords: [
    'banquet hall services',
    'wedding venue services',
    'event catering',
    'corporate event hall',
    'birthday party venue',
    'decoration services',
    'reception hall packages',
    'Olive Orchard services',
  ],
  alternates: { canonical: 'https://oliveorchard.com/services' },
  openGraph: {
    title: 'Our Services | Olive & Orchard Banquet Hall',
    description: 'Premium event services for weddings, receptions, birthdays & corporate events. Explore our flexible packages.',
    url: 'https://oliveorchard.com/services',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80', width: 1200, height: 630, alt: 'Olive & Orchard Services' }],
  },
  twitter: { card: 'summary_large_image', title: 'Our Services | Olive & Orchard Banquet Hall', description: 'Weddings, receptions, birthdays & corporate events — all under one roof.' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
