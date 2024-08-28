import React from 'react'
import Image from 'next/image'
import banner4 from "@/Image/Img5.jpg";

const Banner4 = () => {
  return (
    <section className="grid grid-cols-1 w-full lg:px-10  sm:grid-cols-2 h-[580px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] ">
    <div className="col-span-1 sm:order-2 ">
      <Image
        src={banner4}
        alt="banner4"
        className="msm:h-[350px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px]"
      ></Image>
    </div>

    <div className="col-span-1 sm:order-1 h-[270px]  sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] text-center px-2 xl:px-28 bg-[#d9e89a] text-[#1e3932] place-content-center ">
      <h1 className="text-4xl lg:text-6xl font-semibold ">
      Spicefully yours
      </h1>
      <p className="text-2xl lg:text-3xl py-6">
      A delightful fall treat, the Pumpkin Cream Cheese Muffin is back and ready to pair with your favorite beverage.
      </p>
      <button className="border border-[#1e3932] hover:bg-black/15 px-4 py-1 rounded-full ">
        Order now
      </button>
    </div>
  </section>
  )
}

export default Banner4