import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dslash.agency'
const OG_IMAGE = '/full_hero_visual.png'
const DESCRIPTION =
  'We build experiences that convert. Custom software & landing pages crafted to grow your business — fast.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dslash | Luxury Web Design & Software Development',
    template: '%s | Dslash',
  },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dslash | Luxury Web Design & Software Development',
    description: DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'Dslash',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Dslash' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dslash',
    description: 'We build experiences that convert.',
    images: [OG_IMAGE],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dslash',
  url: SITE_URL,
  description: DESCRIPTION,
  logo: `${SITE_URL}${OG_IMAGE}`,
  sameAs: [] as string[],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;700;800&family=Bebas+Neue&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-syne: 'Syne', sans-serif;
            --font-dm-sans: 'DM Sans', sans-serif;
            --font-bebas: 'Bebas Neue', sans-serif;
          }
        `}} />
      </head>
      <body className="font-sans bg-background text-textPrimary antialiased overflow-x-hidden w-full min-h-screen selection:bg-primary/20 selection:text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
