import AboutPage from "@/components/about/AboutPage";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "About",
  description:
    "Learn about Space Palette, a multidisciplinary design studio in Chennai creating thoughtful spaces shaped by clarity, precision, functionality, and experience.",
  keywords: [
    "Space Palette",
    "about Space Palette",
    "design studio Chennai",
    "interior design studio Chennai",
    "multidisciplinary design studio",
    "space planning Chennai",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Space Palette",
    description:
      "Meet Space Palette, a Chennai-based multidisciplinary design studio creating thoughtful environments with identity, precision, and purpose.",
    url: "/about-us",
    siteName: "Space Palette",
    images: [
      {
        url: "/about/intro.jpg",
        width: 1200,
        height: 630,
        alt: "About Space Palette design studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Space Palette",
    description:
      "Discover the story and design approach behind Space Palette, a multidisciplinary design studio in Chennai.",
    images: ["/about/intro.jpg"],
  },
};

export default function Page() {
  return <>
    <AboutPage />
    <Footer />
  </>;
}
