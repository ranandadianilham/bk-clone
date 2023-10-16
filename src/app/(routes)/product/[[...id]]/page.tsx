'use client';
import { menuGroup } from '@/app/_datas/menu';
import React, { useState } from 'react'
import SearchIcon from "@/app/_components/icons/Search";
import { useCart } from '@/app/_hooks/menuContext';

type Props = {}

const page = ({params}: {params: {id: number}}) => {
    const { id } = params;
    const { groupMenu, menus, cart, addToCart } = useCart();
    const [itemQuantity, setItemQuantity] = useState(0);
    
    function formatIDR(number : number) {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0, // Set the number of decimal places (0 for whole numbers)
        });
        return formatter.format(number);
    }
    
    const handleAddToCart = () => {
        if (itemQuantity < 1) return;
        const itemCart = {
            id: cart.length,
            name: menus[id].title,
            price: itemQuantity * menus[id].price,
            quantity: itemQuantity
        }
        addToCart(itemCart);
    }

  return (
    <div className='min-h-[74vh] my-20'>
      <div className='flex flex-row justify-center w-3/4 mx-auto mt-5 gap-3'>
      <div>
        <div className='flex flex-row h-[40px]'>
          <input type='text' placeholder='Search menu...' className='rounded-s-xl px-1 border w-4/5' />
          <button className='w-1/5 bg-orange-400 rounded-e-xl'>
            <SearchIcon className='text-white w-6 h-6 mx-auto my-auto' />
          </button>
        </div>
        <div className='left-menu-group'>
          {groupMenu?.map((item, i) => {
            return (
              <div key={item.id} className={`${((item.id)) === id.toString() ? "bg-secondary-orange": "bg-yellow-200"}`}>
              <a
              href={`/product/${item.id}`}
              
              >
                <p>{item.title}</p>
              </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className='product-item bg-white right-menu-sub w-full gap-4 flex flex-row h-full'>
            <div 
              className='p-5 w-3/5 border-e border-gray-300 flex flex-col items-center'
              key={menus[id].id} >
                <div className='flame-regular text-xl'>
                  <p>{menus[id].title}</p>
                </div>
                <div><img src={`/images/home/menus/menu_${menus[id].id}.jpg`} alt='menu image'/></div>
              </div>
            <div className='w-2/5'>
                <p className='price'>{formatIDR(menus[id].price)}</p>
                <div className='flex flex-row w-full justify-center border'>
                    <button onClick={() => {
                        if(itemQuantity < 1) return;
                        setItemQuantity(itemQuantity-1)
                    }}  className='text-primary-orange w-full'>-</button>
                    <input onChange={(e) => {
                        setItemQuantity(parseInt(e.target.value));
                    }} value={itemQuantity} type='number' placeholder='0' className='text-center' min={0} />
                    <button onClick={() => setItemQuantity(itemQuantity+1)} className='text-primary-orange w-full'>+</button>
                </div>
                <div className='add-button w-full mt-10 flex justify-center'>
                    <button onClick={handleAddToCart} className='w-full p-1 px-2 rounded-md text-center'>Add To Cart</button>
                </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default page