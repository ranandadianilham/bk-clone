import Link from 'next/link'
import React from 'react'
import {leftNavigation } from "@/app/_datas/navigation";
import Cart from './../icons/Cart';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header-block bg-dark-grey h-[76px] w-full text-white'>
        <div className='header-wrapper flex flex-row w-full h-full px-40'>
            <div className='mt-3 z-50'>
                <Link href={"/"}>
                    <img src='/icons/logo-bk.png'
                    width={110}
                    height={110}
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
                    <div className='flex justify-center items-center'>
                        <div>Login</div>
                    </div>
                    <div className='bg-primary-orange h-full w-[59px] flex justify-center items-center'>
                        <Cart className="w-[40px] h-[40px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header