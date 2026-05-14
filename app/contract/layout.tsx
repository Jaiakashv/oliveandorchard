import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venue Contract & Terms | Olive & Orchard Banquet Hall',
  description:
    "Read Olive & Orchard's venue contract, terms, and policies. Ensure a smooth and memorable event experience with clear agreements and guidelines.",
  keywords: [
    'Olive Orchard contract',
    'venue agreement',
    'event terms',
    'banquet hall policies',
    'wedding venue contract',
  ],
  alternates: {
    canonical: 'https://oliveorchard.com/contract',
  },
};

export default function ContractLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
