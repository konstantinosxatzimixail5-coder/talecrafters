import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Anton } from "next/font/google";
import "@/styles/globals.css";
import { hreflangFor } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

const GOOGLE_TAG_MANAGER_ID = "GTM-PKWLJBJL";

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

// The home page's search result and its social cards read from these two, so
// the three can never drift apart.
const HOME_TITLE = "TaleCrafters | AI Content, Design & Automation Studio";
const HOME_DESCRIPTION =
  "Strategic creative studio for AI video ads, UGC, social content, writing and design. We build marketing & content automations, SEO & AIO-ready websites.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // `default` is the home page's title and is deliberately not run through the
  // template below: the brand name is already the first word of it, and a
  // templated title would render "… | TaleCrafters | TaleCrafters". Child
  // pages return a plain string and do get the template.
  title: {
    default: "TaleCrafters | AI Content, Design & Automation Studio",
    template: "%s | TaleCrafters",
  },
  description: HOME_DESCRIPTION,
  applicationName: "TaleCrafters",
  // Ordered by what we want to be found for, brand terms last.
  keywords: [
    "video ad production",
    "UGC ad creative",
    "brand film production",
    "AI product photography",
    "creative automation",
    "marketing automation agency",
    "SEO content",
    "AIO content",
    "synthetic media studio",
    "TaleCrafters",
    "generative video production",
    "creative agency London",
    "AI video production agency",
    "creative technology studio",
    "agentic workflows",
    "content automation",
    "creative systems",
    "synthetic UGC",
    "AI creative studio Europe",
    "generative advertising",
    "narrative design studio",
  ],
  authors: [{ name: site.legalName }],
  creator: "TaleCrafters",
  publisher: site.legalName,
  // The default hreflang cluster. Every page overrides it with its own set via
  // pageMeta; this covers the routes that declare metadata by hand.
  alternates: { canonical: SITE_URL, languages: hreflangFor('/') },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "TaleCrafters",
    // The social card says the same thing as the search result, deliberately.
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      { url: "/brand/mark-square.png", width: 1024, height: 1024, alt: "TaleCrafters — Synthetic Media Studio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        style={{
          backgroundColor: "var(--brand-black)",
          color: "var(--brand-white)",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
