"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButttons() {
  // pathname is the current path
  const pathname = usePathname();
  // searchParams is the query string
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="flex justify-between px-10 pb-4 text-blue-700 sm:justify-start sm:space-x-44 sm:px-0">
      {/* 
        to check if the startIndex is greater than 10, we can go back to the previous page
      */}
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {

        // we can go to the next page if the startIndex is less than 90
      startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
