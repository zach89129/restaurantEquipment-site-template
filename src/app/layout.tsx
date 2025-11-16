import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import { Suspense } from "react";
import { SearchProvider } from "@/contexts/SearchContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { brandConfig } from "@/config/brand.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: brandConfig.seo.defaultTitle,
  description: brandConfig.seo.defaultDescription,
  icons: {
    icon: brandConfig.assets.icon,
    shortcut: brandConfig.assets.icon,
    apple: brandConfig.assets.icon,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: brandConfig.assets.icon,
    },
  },
};

// Set environment variables for the client
export const dynamic = "force-dynamic"; // Disables static optimization for this page

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
            <SearchProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </SearchProvider>
          </Providers>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
