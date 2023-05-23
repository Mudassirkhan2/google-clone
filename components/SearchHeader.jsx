import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'
const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
       <div className='flex items-center justify-between w-full p-6'>
            <Link href={"/"}>
                <Image width={120} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"alt="Google Logo" />
            </Link>
            <div className='flex-1'>
                <SearchBox/>
            </div>
            <div className='hidden space-x-2 md:inline-flex '> 
                <RiSettings3Line className='w-10 h-10 p-2 bg-transparent rounded-full cursor-pointer hover:bg-gray-200' title='Quick Settings'/>
                <TbGridDots className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-200' title='Google apps'/>
                <button className='px-6 py-2 ml-2 font-medium text-white transition-all bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md'>Sign in </button>
            </div>
       </div>

       <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader
