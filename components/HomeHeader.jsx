
import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'
import SignIn from './SignIn'
const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm '>
        <div className='flex items-center space-x-4'>
            <Link href="https://mail.google.com" className='hover:underline'> Gmail</Link>
            <Link href="https://image.google.com" className='hover:underline'> Images</Link>
            <TbGridDots className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100'/>
            <SignIn/>
        </div>
    </header>
  )
}

export default HomeHeader
