import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Anton } from "next/font/google";
import "@/styles/globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

// Self-hosted at build time. This removes the render-blocking request to
// fonts.googleapis.com that the CSS @import used to make, and the swap flash
// that came with it. Each face exposes a variable that theme.css aliases.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--tc-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--tc-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--tc-mono",
  display: "swap",
});

const wordmark = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--tc-wordmark",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TaleCrafters — Synthetic Media Studio | Films, Systems & Original IP",
    template: "%s | TaleCrafters",
  },
  description: site.classification,
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
      { url: "/brand/mark-square.png", width: 1024, height: 1024, alt: "TaleCrafters — Synthetic Media Studio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleCrafters — Synthetic Media Studio",
    description: "Human taste × machine velocity. Films, systems and original IP.",
    images: ["/brand/mark-square.png"],
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
  icons: {
    // A 1024px PNG is the right size for a link preview and the wrong size for
    // a browser tab.
    icon: [
      { url: "/brand/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/mark-square.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: { url: "/brand/apple-icon.png", sizes: "180x180" },
  },
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
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} ${mono.variable} ${wordmark.variable}`}
    >
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
