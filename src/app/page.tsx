import Slideshow from "@/app/_components/home/Slideshow";
import Menus from "@/app/_components/home/Menu";
import { menuGroup } from "@/app/_datas/menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col">
      {/* slideshow */}
      <Slideshow />
      {/* our menus */}
      <Menus />
    </div>
  );
}
