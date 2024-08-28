import React from 'react'
import Image from "next/image";
import banner2 from "@/Image/Img2.jpg";

const Banner2 = () => {
  return (
    <section className="grid grid-cols-1  w-full lg:px-10 sm:grid-cols-2 h-[570px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] ">
    <div className="col-span-1 sm:order-2 ">
      <Image
        src={banner2}
        alt="banner2"
        className="msm:h-[350px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px]"
      ></Image>
    </div>

    <div className="col-span-1 sm:order-1 h-[260px]  sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] text-center px-2 xl:px-28 bg-[#9E2240] text-white place-content-center ">
      <h1 className="text-4xl lg:text-6xl font-semibold ">
        A bunch of delicious
      </h1>
      <p className="text-2xl lg:text-3xl py-6">
        The season’s favorite makes fall fall. Enjoy the moment—hot, iced or
        blended.
      </p>
      <button className="border border-white hover:bg-black/15 px-4 py-1 rounded-full ">
        Order now
      </button>
    </div>
  </section>
  )
}

export default Banner2