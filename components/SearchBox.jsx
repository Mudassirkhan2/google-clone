"use client"

import  { useState } from 'react'
import { AiFillCamera, AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import { useSearchParams,useRouter } from 'next/navigation'
const SearchBox = () => {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')
  const [term, setTerm] = useState(searchTerm || '')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }
  
  return (
    <form className='flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg' onSubmit={handleSubmit}>
      <input type="text"  className='w-full focus:outline-none ' value={term} onChange={
        (e) => setTerm(e.target.value)
      }/>
        <RxCross2  className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={
          () => setTerm('')
        }/>
        <BsFillMicFill className="hidden pl-4 mr-2 text-4xl text-blue-500 border-l-2 border-gray-300 cursor-pointer sm:inline-flex"  title='Search By Voice '/>
        <AiFillCamera className="hidden pl-4 mr-2 text-4xl text-blue-500 cursor-pointer sm:inline-flex" title='Search By Image'/>
        <AiOutlineSearch className="hidden ml-2 text-2xl text-blue-500 cursor-pointer sm:inline-flex" title='search' onClick={handleSubmit} /  >
    </form>
  )
}
export default SearchBox
