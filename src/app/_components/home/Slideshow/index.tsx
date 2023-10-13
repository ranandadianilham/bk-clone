import React from "react";
import ChevronLeft from "@/app//_components/icons/ChevronLeft";
import ChevronRight from "@/app/_components/icons/ChevronRight";
type Props = {};

const index = (props: Props) => {
  return (
    <div className="relative w-full h-fit">
      <div className="absolute left-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronLeft className={"w-8 h-8"} />
      </div>
      <div
        style={{
          backgroundImage: "url(images/home/slideshow/slide_0.jpg)",
          backgroundSize: "auto",
          height: "474.75px",
        }}
        className="absolute w-full h-full top-0 left-0 z-[-5]"
      ></div>
      {/* right arrow */}
      <div className="absolute right-5 flex top-52 items-center w-fit rounded-full bg-white opacity-50 p-2">
        <ChevronRight className={"w-8 h-8"} />
      </div>
    </div>
  );
};

export default index;
