"use client";
import { useCart } from "@/app/_hooks/menuContext";
import React, {useState, useEffect} from "react";

type Props = {};

const Page = (props: Props) => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
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
  }, [cart])
  
  return (
    <div className="min-h-[74vh] my-20">
      <div className="shadow-xl w-3/4 mx-auto min-h-[500px]">
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
              {cart &&
                cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              {cart.length < 1 && (
                <tr className="">
                  <td className="flex items-center gap-3 p-1">
                    <img
                      src="/images/home/menus/menu_0.jpg"
                      alt="image"
                      height={100}
                      width={100}
                    />
                    <p>Double Cheese Borgar</p>
                  </td>
                  <td className="text-end">4</td>
                  <td>11961</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="w-1/4">
          <div>
            <p>Price Total</p>
            <p>{formatIDR(totalPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
