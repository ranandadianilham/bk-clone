'use client';
import Link from 'next/link'
import React from 'react'
import {leftNavigation } from "@/app/_datas/navigation";
import Cart from './../icons/Cart';
import { useCart } from '@/app/_hooks/menuContext';

type Props = {}

const Header = (props: Props) => {
    const { cart } = useCart();
    
    const getTotalQyt = () => {
        return cart.reduce((sum, current) => sum + current.quantity, 0)
    }
    
  return (
    <div className='header-block bg-dark-grey h-[76px] w-full text-white'>
        <div className='header-wrapper flex flex-row w-full h-full px-40'>
            <div className='mt-3 z-50'>
                <Link href={"/"}>
                    <img src='/icons/logo-bk.png'
                    width={110}
                    height={110}
                    alt='logo'
                    />
                </Link>
            </div>
            <div className='flex flex-row justify-between px-3 w-full'>
                <div className='left-nav flex flex-row items-center'>
                    {
                        leftNavigation?.map((menu, id) => {
                            return (
                                <div className='' key={id}>
                                    <Link href={menu.path} >
                                        <p className='subtitle'>{menu.subTitle}</p>
                                        <p className='title'>{menu.title}</p>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='right-nav flex justify-end h-full'>
                    <div className='flame-regular flex justify-center items-center'>
                        <div>Login</div>
                    </div>
                    <div className='relative bg-primary-orange h-full w-[59px] flex justify-center items-center'>
                        <a href="/cart">
                        {cart.length > 0 && <div
                        style={{
                            fontSize: "15px"
                        }}
                        className='w-5 h-5 absolute rounded-full right-0 top-3 color bg-red-600 flex justify-center items-center'>{getTotalQyt()}</div>}
                        <Cart className="w-[40px] h-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header