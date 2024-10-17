'use client'

import { item } from "@/constants/types"
import { useEffect, useState } from "react"

export default function FavButton ({item}:{item: item}) {
    const [favorites, setFavorites] = useState<item[]>([])

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites') ?? '[]'))
        console.log(localStorage.getItem('favorites'))
    }, [])

    const handleClick = (item: item) => {
        const localFavs: item[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
    
        const itemIndex = localFavs.findIndex(fav => JSON.stringify(fav) === JSON.stringify(item))
    
        if (itemIndex !== -1) {
            localFavs.splice(itemIndex, 1)
            setFavorites(localFavs)
        } else {
            localFavs.push(item)
            setFavorites(localFavs)
        }
    
        localStorage.setItem('favorites', JSON.stringify(localFavs))
    };
    
    
    return (
        <button
            className="w-full h-10 mt-4 bg-red-500"
            onClick={() => handleClick(item)}
        >
            {favorites.some(fav => item.data[0].nasa_id === fav.data[0].nasa_id) ? "Remove from favorites" : "Add to favorites"}
        </button>
    )
}