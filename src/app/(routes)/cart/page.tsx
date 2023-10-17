"use client";
import { useCart } from "@/app/_hooks/menuContext";
import React, { useState, useEffect } from "react";

type Props = {};

const Page = (props: Props) => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const getTotalPrice = () => {
    return cart.reduce((sum, current) => sum + current.price, 0);
  };
  function formatIDR(number: number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Set the number of decimal places (0 for whole numbers)
    });
    return formatter.format(number);
  }

  useEffect(() => {
    let price = getTotalPrice();
    setTotalPrice(price);
  }, [cart]);

  return (
    <div className="min-h-[74vh] my-20">
      <div className="shadow-xl w-3/4 mx-auto min-h-[500px]  flex flex-row">
        <div className="w-3/4">
          <table
            className="cart-table flame-regular"
            style={{
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "70%",
                  }}
                >
                  Menu Item
                </th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ?
                cart.map((item, id) => {
                  return (
                    <tr key={item.id}>
                      <td className="flex items-center gap-3 p-1">
                        <img
                          src={`/images/home/menus/menu_${id}.jpg`}
                          alt="image"
                          height={100}
                          width={100}
                        />
                        <p>{item.name}</p>
                      </td>
                      <td className="text-end">{item.quantity}</td>
                      <td>{formatIDR(item.price)}</td>
                    </tr>
                  );
                }) : null}
            </tbody>
          </table>
        </div>
        <div className="border-s px-2 pt-5 w-1/4 flex flex-col">
          <div className="flame-regular">
            <p className="text-sm">Price Total</p>
            <p className="text-2xl">{formatIDR(totalPrice)}</p>
          </div>
          <div>
            <button>Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
