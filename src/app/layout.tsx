import type { Metadata } from "next";
import "@/styles/globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://talecrafters.studio"),
  title: "TaleCrafters — We Manufacture Attention",
  description:
    "TaleCrafters is the unholy offspring of a film studio and a technology lab. We combine human taste with machine velocity to create stories that immerse and content that converts. Storytellers drunk on synthetic media.",
  keywords: [
    "TaleCrafters",
    "creative studio",
    "content production",
    "storytelling",
    "synthetic media",
    "brand strategy",
    "video production",
    "motion design",
    "digital avatars",
    "creative agency",
  ],
  authors: [{ name: "TaleCrafters Studio" }],
  creator: "TaleCrafters",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://talecrafters.studio",
    siteName: "TaleCrafters",
    title: "TaleCrafters — We Manufacture Attention",
    description:
      "The unholy offspring of a film studio and a technology lab. Stories on steroids. We killed boring, buried it, and threw a party on its grave.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TaleCrafters Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleCrafters — We Manufacture Attention",
    description:
      "The unholy offspring of a film studio and a technology lab. Stories on steroids.",
    images: ["/logo.png"],
    creator: "@talecrafters",
  },
  robots: {
    index: true,
    follow: true,
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
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
