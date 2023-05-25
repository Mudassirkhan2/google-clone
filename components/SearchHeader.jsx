import Image from 'next/image'
import Link from 'next/link'

import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'
import SignIn from './SignIn'

const SearchHeader = () => {
  
  return (
    <header className='sticky top-0 bg-white'>
       <div className='flex items-center justify-between w-full p-6 flex-col md:flex-row'>
            <div className='flex justify-between w-full '>
                <Link href={"/"}>
                    <Image width={120} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"alt="Google Logo" />
                </Link>
                <div className='flex-1 hidden md:inline-flex'>
                    <SearchBox/>
                </div>
                <div className=' space-x-2 flex md:order-3'> 
                    <RiSettings3Line className='w-10 h-10 p-2 bg-transparent rounded-full hidden md:inline-flex cursor-pointer hover:bg-gray-200' title='Quick Settings'/>
                    <TbGridDots className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-200 hidden md:inline-flex ' title='Google apps'/>
                    <SignIn/>
                </div>
            </div>
            <div className='flex-1 md:hidden mt-3'>
                <SearchBox/>
            </div>
       </div>

       <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader
