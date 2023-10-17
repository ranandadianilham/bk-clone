"use client";
import React, { useRef } from "react";
import ChevronLeft from "@/app//_components/icons/ChevronLeft";
import ChevronRight from "@/app/_components/icons/ChevronRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const Index = (props: Props) => {
  //const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    rows: 1,
  };
  return (
    <div className="h-full relative">
      <div className="absolute left-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronLeft className={"w-8 h-8"} />
      </div>
      {/* <div className="w-full h-[500px] top-0 left-0 z-10">
        <Slider ref={sliderRef} {...settings}>
          <div
            style={{
              backgroundImage: "url(images/home/slideshow/slide_0.jpg)",
              backgroundSize: "auto",
              height: "474.75px",
            }}
            className=""
          ></div>
          <div
            style={{
              backgroundImage: "url(images/home/slideshow/slide_1.jpg)",
              backgroundSize: "auto",
              height: "474.75px",
            }}
            className=""
          ></div>
          <div
            style={{
              backgroundImage: "url(images/home/slideshow/slide_2.jpg)",
              backgroundSize: "auto",
              height: "474.75px",
            }}
            className=""
          ></div>
        </Slider>
      </div> */}
      <div
        style={{
          backgroundImage: "url(images/home/slideshow/slide_0.jpg)",
          backgroundSize: "auto",
          height: "474.75px",
        }}
        className=" w-full h-full top-0 left-0 z-[-5]"
      ></div>
      {/* right arrow */}
      <div className="absolute right-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronRight className={"w-8 h-8"} />
      </div>
    </div>
  );
};

export default Index;
