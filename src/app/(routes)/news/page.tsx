import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-[74vh] my-20'>
      <div className='news-wrapper flex flex-col w-2/4 mx-auto'>
        <Link href={"/news/0"}>
          <img
            src={"/images/news/banner_0.jpeg"}
            className='w-full'
            alt='image 1'
          />
        </Link>
        <Link href={"/news/1"}>
          <img
            src={"/images/news/banner_1.jpeg"}
            className='w-full'
            alt='image 1'
          />
        </Link>
        <Link href={"/news/2"}>
          <img
            src={"/images/news/banner_2.jpeg"}
            className='w-full'
            alt='image 1'
          />
        </Link>
        <Link href={"/news/3"}>
          <img
            src={"/images/news/banner_3.jpeg"}
            className='w-full'
            alt='image 1'
          />
        </Link>
      </div>
    </div>
  )
}

export default page