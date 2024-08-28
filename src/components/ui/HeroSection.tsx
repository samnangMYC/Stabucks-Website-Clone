
import Banner1 from "@/components/ui/Banner1";
import Banner2 from "@/components/ui/Banner2";
import Banner3 from "@/components/ui/Banner3";
import Banner4 from "@/components/ui/Banner4";
import Banner5 from "@/components/ui/Banner5";
import Banner6 from "@/components/ui/Banner6";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col space-y-14 mt-6 vsm:space-y-28 sm:space-y-6 md:space-y-8 ">
      {/* First Banner  */}
      <Banner1 />
      {/*  Second Banner  */}
      <Banner2 />
      {/*  Third Banner  */}
      <Banner3 />

      {/* fourth banner  */}
      <Banner4 />
      {/*  Fifth Banner  */}
      <Banner5 />
      {/*  Sixth Banner  */}
      <Banner6/>
    </div>
  );
};
export default HeroSection;
