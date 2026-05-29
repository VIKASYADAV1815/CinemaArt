import Hero3D from "@/components/sections/Hero3D";
import Equipment from "@/components/sections/Equipment";
import ProductsCarousel from "@/components/sections/ProductsCarousel";
import LensAnatomy from "@/components/sections/LensAnatomy";
import Features from "@/components/sections/Features";
import BrandShowcase from "@/components/sections/BrandShowcase";
import AuthorizedCertificates from "@/components/sections/AuthorizedCertificates";
import Marquee from "@/components/ui/Marquee";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <main className="relative bg-[#E6E6E6]">
      <Loader />
      <Navbar />
      <Hero3D />
      <Marquee />
      <Equipment />
      <Features />
      <BrandShowcase />
      <ProductsCarousel />
      <LensAnatomy />
      <AuthorizedCertificates />
      <Footer />
    </main>
  );
}
