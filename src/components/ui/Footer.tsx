"use client";
import React from "react";
import FooterLink1 from "../FooterLink/FooterLink1";
import FooterLink2 from "../FooterLink/FooterLink2";
import Image from "next/image";
import spotify from "@/icons/spotity.svg";
import fb from "@/icons/facebook.svg";
import pin from "@/icons/pinterest.svg";
import ig from "@/icons/instagram.svg";
import yt from "@/icons/youtube.svg";
import tw from "@/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className=" px-6 md:px-8 xl:px-12 mb-8">
      {/*Footer Line  */}
      <div className=" bg-black/15 w-full h-[1px] mt-5 mb-5"></div>

      {/* Dropdown Footer Menu  */}
      <div className="lg:flex lg:gap-32">
        <FooterLink1 />
        <FooterLink2 />
      </div>

      {/*Footer Line  */}
      <div className=" bg-black/15 w-full h-[1px] mt-5 mb-5"></div>

      {/*Social Links  */}
      <div className="flex gap- place-self-start">
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={spotify} className="h-10 w-10" alt="spotify"></Image>
        </div>
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={fb} className="h-10 w-10" alt="facebook"></Image>
        </div>
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={pin} className="h-10 w-10 " alt="instagram"></Image>
        </div>
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={ig} className="h-10 w-10" alt="facebook"></Image>
        </div>
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={yt} className="h-10 w-10" alt="facebook"></Image>
        </div>
        <div className="rounded-full px-2 py-2 hover:bg-black/10 ease-in duration-200">
          <Image src={tw} className="h-10 w-10" alt="facebook"></Image>
        </div>
      </div>
      {/*Agreements */}
      <div className="inline-block space-y-5 text-sm mt-6">
        <p className="hover:underline">Privacy Notice</p>
        <p className="hover:underline">Cunsumer Health Privacy Notice</p>
        <p className="hover:underline">Term of Use</p>
        <p className="hover:underline">Do Not Share My Personal Information</p>
        <p className="hover:underline">CA Supply Chain Act</p>
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">Cookie Preferences</p>
        <p className="text-[10px] opacity-70"> © 2024 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
