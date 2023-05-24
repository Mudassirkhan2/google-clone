"use client"
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'
import { usePathname ,useRouter,useSearchParams} from 'next/navigation'

const SearchHeaderOptions = () => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm")

  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`)
  }


  return (
    <div className='flex justify-center w-full space-x-2 text-sm text-gray-700 border-b select-none lg:justify-start lg:pl-52'>
        <div onClick={()=>selectTab("All")} className={`flex items-center px-2 pb-3 space-x-1 border-b-4 border-transparent cursor-pointer active:text-blue-500 ${pathName === "/search/web" && "!text-blue-600 !border-blue-600"} `}>
            <AiOutlineSearch className='text-lg '/>
            <p>All</p>
        </div>
        <div onClick={()=>selectTab("Images")} className={`flex items-center px-2 pb-3 space-x-1 border-b-4 border-transparent cursor-pointer active:text-blue-500 ${pathName === "/search/image" && "!text-blue-600 !border-blue-600"} `}>
            <AiOutlineCamera className='text-lg '/>
            <p>Images</p>
        </div>
    </div>
  )
}

export default SearchHeaderOptions
