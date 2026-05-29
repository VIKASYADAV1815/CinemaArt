import type { Metadata } from "next";
import { Space_Grotesk, Syncopate, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-syncopate" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "CinemaArt Studio | Premium Camera & Photography",
  description: "Showcasing the different types of cameras in a beautifully animated modern way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${syncopate.variable} ${caveat.variable} antialiased selection:bg-[#00E5FF] selection:text-black`}>
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
