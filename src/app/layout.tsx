import type { Metadata, Viewport } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://links.danarcapital.com"),
  title: {
    default: "دانار كابيتال | تعليم الأسواق المالية",
    template: "%s | دانار كابيتال",
  },
  description:
    "دانار كابيتال — تعليم تداول مجاني، توصيات يومية، وشريك رسمي لـ XTB Broker. تداول الأسهم والفوركس والكريبتو.",
  keywords: [
    "تداول", "أسهم", "فوركس", "كريبتو", "تعليم تداول",
    "دانار كابيتال", "XTB", "استثمار", "خليج", "سعودية",
    "trading", "stocks", "forex", "crypto", "Danar Capital",
  ],
  authors: [{ name: "Danar Capital", url: "https://links.danarcapital.com" }],
  creator: "Danar Capital",
  publisher: "Danar Capital",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "دانار كابيتال | تعليم الأسواق المالية",
    description: "تعليم تداول مجاني | توصيات يومية | شريك رسمي لـ XTB Broker",
    url: "https://links.danarcapital.com",
    siteName: "Danar Capital",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Danar Capital — تعليم الأسواق المالية",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "دانار كابيتال | تعليم الأسواق المالية",
    description: "تعليم تداول مجاني | توصيات يومية | شريك رسمي لـ XTB Broker",
    images: ["/og-image.svg"],
    creator: "@Danar_Capital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#070B15",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Danar Capital",
              alternateName: "دانار كابيتال",
              url: "https://links.danarcapital.com",
              description:
                "تعليم تداول مجاني، توصيات يومية، وشريك رسمي لـ XTB Broker",
              sameAs: [
                "https://x.com/Danar_Capital",
                "https://www.instagram.com/danarcapital/",
                "https://www.linkedin.com/company/danar-capital/",
                "https://www.tiktok.com/@danar.capital",
                "https://snapchat.com/t/dTiudKnV",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
