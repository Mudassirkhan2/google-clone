import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'
const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm '>
        <div className='flex items-center space-x-4'>
            <Link href="https://mail.google.com" className='hover:underline'> Gmail</Link>
            <Link href="https://image.google.com" className='hover:underline'> Images</Link>
            <TbGridDots className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100'/>
            <button className='px-6 py-2 font-medium text-white transition-shadow bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md'> Sign In</button>
        </div>

    </header>
  )
}

export default HomeHeader
