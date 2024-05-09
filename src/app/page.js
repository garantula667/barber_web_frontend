"use client";
import Navbar from "../components/custom/Navbar";
import { ImagesSliderDemo } from "../components/custom/Banner";
import { ScrollAreaHorizontalDemo } from "../components/custom/BannerScroller";
import Section2 from "../components/custom/Section2";
import Section3 from "../components/custom/Section3";
import NewsSection from "../components/custom/NewsSection";
import { LayoutGridDemo } from "../components/custom/Section4";
import TimeImage from "../assets/images/Time-location.png";
import Image from "next/image";
import Footer from "../components/Common/footer";
export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <ImagesSliderDemo />
      <ScrollAreaHorizontalDemo className=" mt-4" />
      <Section2 />
      <Section3 />
      <NewsSection />
      <LayoutGridDemo />
      <Footer />
    </div>
  );
}
