import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import GlobalDottedBg from "@/components/layouts/GlobalDottedBg";

const cabinetGrotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Medium.otf",
  variable: "--font-secondary",
  weight: "500",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://spacepalette.net"),
  title: {
    default: "Space Palette | Luxury Interior Design Studio in Chennai",
    template: "%s | Space Palette",
  },
  description:
    "Space Palette is a luxury interior design studio in Chennai crafting refined residential interiors, modular kitchens, commercial spaces, and turnkey design solutions.",
  keywords: [
    "Space Palette",
    "interior design Chennai",
    "luxury interior design",
    "residential interiors",
    "commercial interiors",
    "modular kitchens Chennai",
    "turnkey interior design",
    "interior designers in Chennai",
  ],
  authors: [{ name: "Space Palette" }],
  creator: "Space Palette",
  publisher: "Space Palette",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Space Palette | Luxury Interior Design Studio in Chennai",
    description:
      "Refined residential and commercial interiors with thoughtful planning, premium materials, and skilled craftsmanship.",
    url: "/",
    siteName: "Space Palette",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Space Palette interior design project",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Palette | Luxury Interior Design Studio in Chennai",
    description:
      "Luxury interior design studio for residential, commercial, modular kitchen, and turnkey interior projects.",
    images: ["/1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Interior Design",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cabinetGrotesk.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="relative min-h-full bg-black">
        <GlobalDottedBg />
        <div className="relative z-10 flex min-h-full flex-col">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
