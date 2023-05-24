import WebSearchResults from "@/components/WebSearchResults"
import Link from "next/link"


const WebSearchPage = async ({searchParams}) => {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}}`)
  if (!res.ok) {
    return
  }
  const data = await res.json()
  const results = data.items
  if(!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h1 className="mb-4 text-3xl">No results Found </h1>
        <p className="text-lg ">
          Try searching for something else
          or go back to the
        <Link
          href="/" className="ml-2 text-blue-500 hover:underline hover:text-blue-700"
        >Home Page</Link>

         
        </p>
      </div>
    )
  }

  return (
    <>
      {
        results && <WebSearchResults results={data} />
      }
    </>
  )
}

export default WebSearchPage
