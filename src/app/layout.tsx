import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Premium Office Workstations for Smarter Workspaces',
  description: 'At Paradise Furniture, we design workstations that combine functionality, comfort, and modern aesthetics.',
  keywords: 'premium office workstations, office workstations, modern office furniture, office furniture, workspace solutions, office desks, modular workstations, commercial office furniture, ergonomic workstations, office interiors, Paradise Furniture',
  openGraph: {
    title: 'Premium Office Workstations for Smarter Workspaces',
    description: 'At Paradise Furniture, we design workstations that combine functionality, comfort, and modern aesthetics.',
    siteName: 'Paradise Furniture',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Office Workstations for Smarter Workspaces',
    description: 'At Paradise Furniture, we design workstations that combine functionality, comfort, and modern aesthetics.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16479245566"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16479245566');
            `,
          }}
        />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
