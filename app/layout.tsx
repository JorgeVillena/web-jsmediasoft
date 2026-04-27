import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jsmediasoft.com"),
  title: {
    default: "JSMediaSoft",
    template: "%s | JSMediaSoft",
  },
  description:
    "Consultora de desarrollo web, e-commerce, integraciones Shopify y modernizacion de sistemas empresariales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-bg-soft)] text-[var(--color-text-dark)]">
        {children}
      </body>
    </html>
  );
}
