import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsmediasoft.com"),
  title: {
    default: "JSMediaSoft | Web, E-commerce & Software Consultancy",
    template: "%s | JSMediaSoft",
  },
  description:
    "JSMediaSoft is a US-based digital consultancy delivering web platforms, e-commerce, Shopify integrations and legacy modernization. Headquartered with a global team, serving Omaha and beyond.",
  keywords: [
    "web development agency Omaha",
    "Shopify integration consultancy",
    "e-commerce development",
    "legacy system modernization",
    "Next.js agency",
    "JSMediaSoft",
  ],
  openGraph: {
    type: "website",
    siteName: "JSMediaSoft",
    title: "JSMediaSoft | Web, E-commerce & Software Consultancy",
    description:
      "Premium digital partner for ambitious teams. Web, e-commerce, Shopify and legacy modernization. Based in the US.",
    url: "https://jsmediasoft.com",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-soft-bg)] text-[var(--color-text-dark)]">
        {children}
      </body>
    </html>
  );
}
