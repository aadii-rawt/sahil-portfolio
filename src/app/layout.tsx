import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import { Databuddy } from "@databuddy/sdk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Rathore",
  description: "Sahil's Portfolio site.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Sahil Rathore",
  ],
  openGraph: {
    title: "Sahil's Portfolio",
    description: "Sahil's Portfolio site.",
    url: "https://sahil.dotdazzle.in",
    siteName: "Sahil's Portfolio site",
    images: [
      {
        url: "https://opengraphh.jpg",
        width: 1200,
        height: 630,
        alt: "My OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My portfoliosite",
    description: "This is my portfolio.",
    creator: "@SahilRathore",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sahil.dotdazzle.in" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Rathore",
              url: "https://sahil.dotdazzle.in",
              sameAs: [
                "https://github.com/Sahillrathore",
                "https://linkedin.com/in/sahil-rathore123",
                "https://instagram.com/sahill_rathore",
              ],
              jobTitle: "Full Stack Developer & App Developer",
              image: "https://sahil.dotdazzle.in/portfolio.jpg",
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.ico" />

      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}

        <Analytics />

        <Databuddy
          clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID as string}
          trackHashChanges={true}
          trackAttributes={true}
          trackInteractions={true}
          trackEngagement={true}
          trackScrollDepth={true}
          trackExitIntent={true}
          trackBounceRate={true}
          trackWebVitals={true}
          trackErrors={true}
          enableBatching={true}
        />

        <CustomCursor />
      </body>
    </html>
  );
}
