'use client'
import {FaSignOutAlt} from 'react-icons/fa'
import { useSession, signIn, signOut } from 'next-auth/react'
import  { useState } from 'react'
const SignIn = () => {
    const { data: session } = useSession()
    const [isOpen, setIsOpen] = useState(false);
    // Function to toggle the visibility of the dropdown menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>
       {
                session ? ( 
                    <img   className='w-12 h-12 p-2  relative rounded-full cursor-pointer hover:bg-gray-100' src={session.user.image} alt="profile" onClick={toggleMenu}/>
                ) : (
                    <button   onClick={() => signIn() }className='px-6 py-2 ml-2 font-medium text-white transition-all bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md'>Sign in </button>
                )
        }
        {isOpen && (
                    <ul className='absolute top-14 bg-gray-300 p-5 rounded-md right-5 text-center'>
                            <li>{session?.user.name}</li>
                            <li className='mt-2'>{session?.user.email}</li>
                            <li>
                              <button className='px-6 py-2 font-medium text-white transition-shadow bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md mt-2'   onClick={() => signOut()}> 
                                  <FaSignOutAlt className='inline-block w-4 h-4 ml-2'/>
                                  Sign Out 
                              </button>
                            </li>
                    </ul>
        )}
    </div>
  )
}

export default SignIn
