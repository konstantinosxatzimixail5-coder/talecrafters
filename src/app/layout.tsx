import type { Metadata } from "next";
import "@/styles/globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const GOOGLE_TAG_MANAGER_ID = "GTM-PKWLJBJL";

export const metadata: Metadata = {
  metadataBase: new URL("https://talecrafters.studio"),
  title: "TaleCrafters — Synthetic Media Studio | Stories That Convert",
  description:
    "TaleCrafters is a synthetic media studio that combines human taste with machine velocity. We create stories that immerse and content that converts.",
  keywords: [
    "TaleCrafters",
    "synthetic media studio",
    "creative content production",
    "storytelling agency",
    "synthetic media",
    "brand strategy",
    "video production",
    "motion design",
    "digital avatars",
    "creative agency London",
    "content-as-service",
    "AI content creation",
    "brand narrative",
    "visual storytelling",
    "synthetic cinematography",
  ],
  authors: [{ name: "TaleCrafters Ltd" }],
  creator: "TaleCrafters",
  alternates: {
    canonical: "https://talecrafters.studio",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://talecrafters.studio",
    siteName: "TaleCrafters",
    title: "TaleCrafters — Synthetic Media Studio | We Manufacture Attention",
    description:
      "The unholy offspring of a film studio and a technology lab. Human taste × machine velocity. Stories that immerse, content that converts.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TaleCrafters — Synthetic Media Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleCrafters — Synthetic Media Studio",
    description:
      "Human taste × machine velocity. We create stories that immerse and content that converts.",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      <body>
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
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
