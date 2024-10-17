'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
    const searchParams = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('q'))

    return (
        <form 
        className="sm:w-[30%] h-[50%] rounded-md items-end bg-blue-950" 
        method="GET"
    > 
        <input 
            className="h-full rounded-md w-3/4 font-bold bg-gray-100 text-black"
            type="text"
            name="q"
            value={search ?? ''}
            onChange={i => setSearch(i.target.value)}
        />
        <button className="text-right" type="submit" >
            search
        </button>
    </form>
    )
}