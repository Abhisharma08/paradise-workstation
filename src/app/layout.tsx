import type {Metadata} from 'next';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Buy Office Chairs in Delhi – Ergonomic & Executive Chairs Online | Paradise Furniture',
  description: 'Shop premium office chairs in Delhi at Paradise Furniture. Explore ergonomic, executive, and mesh chairs designed for comfort and productivity. Fast delivery & best prices.',
  keywords: 'workspace Products, Paradise Furniture furniture, office solutions, commercial furniture, workspace solutions',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17188479495"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-MB4NDVM6');
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
