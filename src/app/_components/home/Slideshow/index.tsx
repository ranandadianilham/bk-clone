"use client";
import React, { useRef } from "react";
import ChevronLeft from "@/app//_components/icons/ChevronLeft";
import ChevronRight from "@/app/_components/icons/ChevronRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const Index = (props: Props) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  
  const CustomNextArrow = () => {
    return <div onClick={() => {
      sliderRef?.current?.slickNext();
    }} className="z-50 cursor-pointer absolute right-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronRight className={"w-8 h-8"} />
      </div>
  }
  
  const CustomPrevArrow = () => {
    return <div onClick={() => {
      sliderRef?.current?.slickPrev();
    }} className="z-50 cursor-pointer absolute left-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronLeft className={"w-8 h-8"} />
    </div>
  }
  
  return (
    <div className="h-full relative">
      <CustomPrevArrow />
      <div className="w-full h-[500px] top-0 left-0 z-[-5]">
        <Slider ref={sliderRef} {...settings}>
          <div
            className=""
          >
            <img 
            src="images/home/slideshow/slide_0.jpg"
            className="w-auto h-[474.75px]"
            />
          </div>
          <div
            className=""
          >
            <img 
            src="images/home/slideshow/slide_1.jpg"
            className="w-auto h-[474.75px]"
            />
          </div>
          <div
            className=""
          >
            <img 
            src="images/home/slideshow/slide_2.jpg"
            className="w-auto h-[474.75px]"
            />
          </div>
          <div
            className=""
          >
            <img 
            src="images/home/slideshow/slide_3.jpg"
            className="w-auto h-[474.75px]"
            />
          </div>
        </Slider>
      </div>
      {/* <div
        style={{
          backgroundImage: "url(images/home/slideshow/slide_0.jpg)",
          backgroundSize: "auto",
          height: "474.75px",
        }}
        className=" w-full h-full top-0 left-0 z-[-5]"
      ></div> */}
      {/* right arrow */}
      <CustomNextArrow />
    </div>
  );
};

export default Index;
