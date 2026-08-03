import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diwatek.com"),
  title: "Diwatek | Creative Technology",
  description:
    "Diwatek creates modern, responsive, and user-friendly websites and digital experiences for startups, small businesses, and growing companies.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/brand/icon_only_dark_bg.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/brand/icon_only_dark_bg.png",
  },
  openGraph: {
    title: "Diwatek | Creative Technology",
    description:
      "Diwatek creates modern, responsive, and user-friendly websites and digital experiences for startups, small businesses, and growing companies.",
    url: "https://diwatek.com",
    siteName: "Diwatek",
    images: [
      {
        url: "/brand/cover_photo_fb.png",
        width: 1200,
        height: 630,
        alt: "Diwatek Creative Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwatek | Creative Technology",
    description:
      "Diwatek creates modern, responsive, and user-friendly websites and digital experiences for startups, small businesses, and growing companies.",
    images: ["/brand/cover_photo_fb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
