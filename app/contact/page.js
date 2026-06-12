import ContactPage from "@/components/contact/ContactPage";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Space Palette to start your luxury interior design journey in Chennai. We look forward to hearing from you.",
  openGraph: {
    title: "Contact Us | Space Palette",
    description: "Get in touch with Space Palette to start your luxury interior design journey.",
    url: "/contact",
  },
};

export default function Contact() {
  return <>
    <ContactPage />
    <Footer />
  </>;
}
