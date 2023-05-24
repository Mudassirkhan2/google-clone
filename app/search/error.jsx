"use client"

import { useEffect } from "react"
const Error = ({error, reset}) => {
    useEffect(() => {
      console.log("Error: ",error)
    }, [error])
  return (
    <div className="flex flex-col items-center justify-center pt-10 ">
        <h1 className="mb-4 text-3xl ">Something Went Wrong</h1>
        <button
            onClick={() => {
                reset()
            }}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >Try Again </button>
    </div>
  )
}

export default Error
