"use client"
import {AiOutlineSearch} from 'react-icons/ai'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {BsFillMicFill} from  'react-icons/bs'
import {AiFillCamera} from 'react-icons/ai'
const HomeSearch = () => {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [random, setRandom] = useState('')

  // handle random search
    // fetch random word 
    const randomSearch = async () => {
        const res = await fetch('https://random-word-api.herokuapp.com/word?number=1').then(res => res.json())
        .then(data => data[0])
        if(!res) return
        router.push(`/search/web?searchTerm=${res}`)
    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)
    }
    


  return (
    <>
        <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow  sm:max-w-xl lg:max-w-2xl'>
            <AiOutlineSearch className="mr-3 text-xl text-gray-500"/>
            <input type="text" className='flex-grow focus:outline-none '  onChange={(e) => setInput(e.target.value)
            }/>
            <div className='flex space-x-4'>
                <BsFillMicFill className="ml-3 text-lg text-gray-500" title='Search By Voice '/>
                <AiFillCamera className="ml-3 text-lg text-gray-500" title='Search By Image'/>
            </div>
        </form>
        <div className= 'flex flex-col justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row'>
            <button className='btn' onClick={handleSubmit}>Google Search </button>
            <button className='btn' onClick={randomSearch}>I am Feeling Lucky</button>
        </div>
    </>
  )
}

export default HomeSearch
