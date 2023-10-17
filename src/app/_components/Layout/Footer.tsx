import React from "react";
import Phone from "@/app/_components/icons/Phone";
import Mail from "@/app/_components/icons/Mail";
import Link from "next/link";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-block bg-[#2d2d2d] w-full h-[125px] flex flex-col justify-end">
      <div className="footer-container w-4/6 mx-auto">
        {/* title */}
        <div className="">
          <p>BURGER KING DELIVERY</p>
        </div>

        {/* contacts & socials */}
        <div className="flex ">
          <span className="flex items-center font-bold mr-7">
            <Phone className="w-6 h-6 mr-2" />
            15000 25
          </span>
          <Link
            className="flex items-center font-bold"
            href="mailto:guestservice@burgerking.co.id"
          >
            <Mail />
            <span className="mr-3"></span> guestservice@burgerking.co.id
          </Link>
          <div></div>
        </div>

        {/* more */}
        <div className="">
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Kebijakan Privasi</Link>
          <Link href={"/"}>Syarat dan Ketentuan</Link>
          <span>
            TM & © 2023 Burger King Corporation. Used Under License. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
