import React from 'react'
import Image from "next/image";
import banner5 from "@/Image/Img4.jpg";

const Banner5 = () => {
  return (
    <section className="grid grid-cols-1  w-full lg:px-10  sm:grid-cols-2 h-[450px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] ">
    <div className="col-span-1  ">
      <Image
        src={banner5}
        alt="banner5"
        className="msm:h-[240px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
      ></Image>
    </div>

    <div className="col-span-1 h-[250px]  sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] text-center  text-[#1E3932] px-2 xl:px-28 bg-[#ffbe9e] place-content-center ">
      <h1 className="text-2xl lg:text-5xl font-semibold">
        Deal-icious delivery, 30% off
      </h1>
      <p className="text-xl lg:text-2xl py-6 ">
        Let fall favorites come to you. Enjoy 30% off Starbucks® orders of
        $18 or more on Uber Eats, 8/26-9/1.**
      </p>
      <button className="border border-gray-900 hover:bg-black/15 px-4 py-1 rounded-full ">
        Order now
      </button>
    </div>
  </section>
  )
}

export default Banner5