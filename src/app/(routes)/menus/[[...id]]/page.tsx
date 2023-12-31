'use client';
import React, { useEffect }  from 'react'
import {menu, menuGroup} from "@/app/_datas/menu";
import SearchIcon from "@/app/_components/icons/Search";
import { redirect } from 'next/navigation';
import { useCart } from '@/app/_hooks/menuContext';
import Link from 'next/link';
type Props = {
  
}

const Page = ({params}: { params : {id: string}}) => {
  const { groupMenu, currentMenuGroup } = useCart();
  const {id = ['0']} = params;
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className='min-h-[74vh] mb-5'>
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
              <div key={item.id} className={`${(item.id).toString() === id[0] ? "bg-secondary-orange": "bg-yellow-200"}`}>
              <Link
              href={`/menus/${item.id}`}
              
              >
                <p>{item.title}</p>
              </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right-menu-sub grid grid-cols-6 place-items-center gap-4'>
          {menu?.map((item, i) => {
            return (
              <div 
              className='bg-white shadow-xl  col-span-3 p-5 rounded-xl'
              key={item.id} >
                <Link
              href={`/product/${item.id}`}
              
              >
                <div><img src={`/images/home/menus/menu_${item.id}.jpg`} alt='menu image'/></div>
                <div>
                  <p>{item.title}</p>
                  <p>Rp. 25.000</p>
                </div>
                </Link>
              </div>
            )
          })}
      </div>
      </div>
    </div>
  )
}

export default Page