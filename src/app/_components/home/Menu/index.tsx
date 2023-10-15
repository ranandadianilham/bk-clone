import React from 'react'
import { menuGroup } from "@/app/_datas/menu";
import Link from "next/link";

type Props = {}

const index = (props: Props) => {
  return (
    <div className="w-3/4 mx-auto  flex flex-col my-10 ">
        <div className="flex mx-auto menu-title-wrapper">
          <p>Our Menus</p>
        </div>
        <div className="grid grid-cols-6 menu-box-wrapper gap-y-4 gap-x-4 mx-auto ">
          {menuGroup?.map((menu, i) => {
            return (
              <div key={menu.id} className="col-span-2  menu-box w-[267px]  shadow-xl border rounded-xl p-[20px]">
                <Link href={"/"}>
                  <div className="flex justify-center">
                    <img src={`/images/home/menus/menu_${menu.id}.jpg`} className="w-[267px] h-[192px] "/>
                  </div>
                  <div className="bottom-part grid grid-cols-6 justify-between mt-5">
                    <p className="title-col col-span-3">{menu.title}</p>
                    <div className="order-col col-span-3 flex items-center">
                      <button className="bg-[#ed7801] w-full h-fit rounded-lg py-2">Order</button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default index