"use client"

import Link from 'next/link'
import React from 'react'
import Parser  from 'html-react-parser'

const WebSearchResults = ({results}) => {
    return (
    <div className='w-full px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 mx-auto'>
        <p className='mt-3 mb-5 text-sm text-gray-600'>
            About 
            {results.searchInformation?.formattedTotalResults} results
            ({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result) => (
            <div key={result.link} className='max-w-xl mb-8'>
                <div className='flex flex-col group'>
                    <Link href={ result.link} className='text-sm truncate'>
                        {result.formattedUrl}
                    </Link>

                    <Link href={result.link} className='text-xl font-medium text-blue-800 truncate group-hover:underline decoration-blue-800'>
                        {result.title}
                    </Link>
                </div>
                <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
            </div>

        ))}
    </div>
  )
}

export default WebSearchResults
