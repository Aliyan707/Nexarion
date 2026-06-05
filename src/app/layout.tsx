import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexarion | Next-Generation Enterprise AI Solutions',
  description:
    'Nexarion delivers cutting-edge artificial intelligence solutions that transform how enterprises operate, automate, and scale in the modern digital economy.',
  keywords: [
    'AI solutions', 'enterprise AI', 'machine learning', 'computer vision',
    'AI consulting', 'data analytics', 'process automation', 'AI development',
  ],
  authors: [{ name: 'Nexarion' }],
  creator: 'Nexarion',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexarion.ai',
    siteName: 'Nexarion',
    title: 'Nexarion | Next-Generation Enterprise AI Solutions',
    description:
      'Transform your business with cutting-edge AI. 500+ projects delivered, 98% client satisfaction, serving enterprises globally.',
    images: [
      {
        url: 'https://nexarion.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexarion — Enterprise AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexarion | Next-Generation Enterprise AI',
    description: 'Transform your business with cutting-edge AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nexarion',
              url: 'https://nexarion.ai',
              logo: 'https://nexarion.ai/logo.png',
              description: 'Enterprise AI solutions company',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-NEXARION',
                contactType: 'customer service',
              },
              sameAs: [
                'https://linkedin.com/company/nexarion',
                'https://twitter.com/nexarion',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-primary text-white overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
