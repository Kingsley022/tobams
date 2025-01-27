import { Button } from "@chakra-ui/react";
import banner from "@/app/assets/images/banner.jpg"
import Image from "next/image";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import TrendingArticles from "./components/TrendingArticles";
import DropdownMenu3 from "./components/DropdownMenu3";

export default function Home() {
  return (
    <>
      <div className="relative lg:h-[78vh] h-[60vh]" >
        <Image src={banner} loading="eager" alt="Banner" className="absolute h-[100%] w-full object-cover"/>
        <div className="absolute bg-[#000000b6] h-full w-full flex justify-center flex-col text-center px-12 gap-4">
          <h1 className="text-white lg:text-[48px] md:text-[40px] text-[28px] lg:leading-[61px] md:leading-[61px] lg:px-[4rem] px-[0]">Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights</h1>
          <p className="text-white lg:text-base text-sm">Insights that inspire success: uncover a wealth of knowledge by staying updated</p>
        </div>
      </div>

      <TrendingArticles/>
      <Subscription/>
    </>
  );
}
