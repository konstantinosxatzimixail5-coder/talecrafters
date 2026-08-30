import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TaleCrafters — Synthetic Media Studio | Films, Systems & Original IP",
    template: "%s | TaleCrafters",
  },
  description: site.description,
  applicationName: "TaleCrafters",
  keywords: [
    "TaleCrafters",
    "synthetic media studio",
    "generative video production",
    "creative agency London",
    "AI video production agency",
    "creative technology studio",
    "agentic workflows",
    "content automation",
    "creative systems",
    "brand film production",
    "synthetic UGC",
    "AI creative studio Europe",
    "generative advertising",
    "narrative design studio",
  ],
  authors: [{ name: site.legalName }],
  creator: "TaleCrafters",
  publisher: site.legalName,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "TaleCrafters",
    title: "TaleCrafters — We Manufacture Attention",
    description:
      "The unholy offspring of a film studio and a technology lab. We make campaigns and films, build the systems that produce and scale them, and develop our own original IP.",
    images: [
      { url: "/logo.png", width: 512, height: 512, alt: "TaleCrafters — Synthetic Media Studio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleCrafters — Synthetic Media Studio",
    description: "Human taste × machine velocity. Films, systems and original IP.",
    images: ["/logo.png"],
    creator: "@talecrafters",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  category: "Creative production",
};

export const viewport: Viewport = {
  themeColor: "#18181F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body
        style={{
          backgroundColor: "var(--brand-black)",
          color: "var(--brand-white)",
          fontFamily: "var(--font-body)",
        }}
      >
        <JsonLd graph={[orgSchema(), websiteSchema()]} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
