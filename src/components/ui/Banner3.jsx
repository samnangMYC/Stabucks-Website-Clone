import React from 'react'
import Image from 'next/image'
import banner3 from "@/Image/Img3.jpg";

const Banner3 = () => {
  return (
    <section className="grid grid-cols-1 lg:px-10 w-full sm:grid-cols-2  h-[450px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] ">
    <div className="col-span-1">
      <Image
        src={banner3}
        alt="banner3"
        className="msm:h-[230px] sm:h-[250px] md:h-[300px] lg:h-[350px]  xl:h-[400px]"
      ></Image>
    </div>

    <div className="col-span-1 h-[250px]  sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]   text-center  text-white px-2 xl:px-28 bg-[#006241] place-content-center ">
      <h1 className="text-3xl lg:text-5xl font-semibold">
        Your treat awaits
      </h1>
      <p className="text-xl lg:text-2xl py-6 ">
        Fall in love with Starbucks® Rewards member perks, like a free drink
        with qualifying purchase during your first week. Valid for one-time
        use.*
      </p>
      <button className="border border-white hover:bg-black/15 px-4 py-1 rounded-full ">
        Order now
      </button>
    </div>
  </section>
  )
}

export default Banner3