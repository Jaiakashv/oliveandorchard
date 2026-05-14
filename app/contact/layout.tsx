import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Olive & Orchard Banquet Hall',
  description:
    'Get in touch with Olive & Orchard Banquet Hall. Find our address, phone number, and email to start planning your perfect wedding, reception, or corporate event.',
  keywords: [
    'contact Olive Orchard',
    'banquet hall address',
    'event venue phone',
    'book wedding hall',
    'corporate event venue contact',
    'Olive Orchard location',
  ],
  alternates: {
    canonical: 'https://oliveorchard.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Olive & Orchard Banquet Hall',
    description:
      'Reach out to Olive & Orchard Banquet Hall to book your next unforgettable event. Find our address, phone number, and email.',
    url: 'https://oliveorchard.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519167758251-7e84e2e8d7d6?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Olive & Orchard Banquet Hall Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Olive & Orchard Banquet Hall',
    description: 'Book your dream event at Olive & Orchard. Contact us today.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
