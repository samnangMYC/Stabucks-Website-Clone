import Image from "next/image";
import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
import Footer from "@/components/ui/Footer";
import Description from "@/components/ui/Description";
export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection>
      </HeroSection>
    <Description/>
    <Footer/>

    </>
  );
}

