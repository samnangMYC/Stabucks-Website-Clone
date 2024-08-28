import React from 'react'
import Image from "next/image";
import banner6 from "@/Image/Img6.jpg";
const Banner6 = () => {
  return (
    <section className="grid grid-cols-1  w-full lg:px-10  sm:grid-cols-2 h-[450px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] ">
    <div className="col-span-1 sm:order-2 ">
      <Image
        src={banner6}
        alt="banner6"
        className="msm:h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
      ></Image>
    </div>

    <div className="col-span-1 sm:order-1 h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] text-center px-2 xl:px-28 text-[#1E3932] bg-[#ffbe9e] place-content-center ">
      <h1 className="text-2xl lg:text-5xl font-semibold">
      Our latest collection
      </h1>
      <p className="text-lg lg:text-2xl py-6 ">
      Austin-native Rex Sterling Hamilton combines figurative, surreal, abstract and pop art, featuring meaningful symbols in his life, to create vibrant works 
      </p>
      <button className="border border-gray-900 hover:bg-black/15 px-4 py-1 rounded-full ">
        Meet Rex
      </button>
    </div>
  </section>
  )
}

export default Banner6