import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alphen Studio | Custom Software & AI Systems",
    template: "%s | Alphen Studio"
  },
  description: "Alphen Studio is your technical co-founder on demand. We build custom software, AI systems, and automation solutions to help businesses scale faster and cut costs.",
  keywords: ["Alphen Studio", "Alphen", "Software Agency", "AI Agency", "Custom Software Development", "AI Systems", "Business Automation", "Web Development", "App Development", "Technical Co-founder", "Software House Indonesia", "Jasa Pembuatan Aplikasi"],
  authors: [{ name: "Alphen Studio" }],
  creator: "Alphen Studio",
  publisher: "Alphen Studio",
  metadataBase: new URL("https://alphen.site"), // Replace with actual production domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alphen.site",
    title: "Alphen Studio | Custom Software & AI Systems",
    description: "We build custom software and AI systems for businesses. Stop losing money to manual work.",
    siteName: "Alphen Studio",
    images: [
      {
        url: "/og-image.png", // Needs to be added to public folder
        width: 1200,
        height: 630,
        alt: "Alphen Studio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logos/alphen-logo-black.svg', media: '(prefers-color-scheme: light)' },
      { url: '/logos/alphen-logo-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/logos/alphen-logo-black.svg',
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { DynamicFavicon } from "@/components/dynamic-favicon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <DynamicFavicon />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Alphen Studio",
                "url": "https://alphen.site",
                "logo": "https://alphen.site/logos/alphen-logo-black.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Indonesian"]
                },
                "description": "Alphen Studio specializes in custom software development, AI systems, and business automation solutions."
              }),
            }}
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
