import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next.js Template Collection",
  description:
    "Jump-start your project with three production-ready templates powered by Next.js 15 and Tailwind CSS.",
  metadataBase: new URL("https://your-domain.com"),
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Next.js Template Collection",
    description:
      "Jump-start your project with three production-ready templates powered by Next.js 15 and Tailwind CSS.",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Next.js Template Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Template Collection",
    description:
      "Jump-start your project with three production-ready templates powered by Next.js 15 and Tailwind CSS.",
    images: ["/meta.png"],
    creator: "@yourtwitterhandle",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: ["Next.js", "React", "JavaScript", "Web Development", "Templates"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NuqsAdapter>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-min-screen">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
