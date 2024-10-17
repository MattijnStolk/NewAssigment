'use client'

import { item } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ItemCard({ item } : {item : item}) {
    const [loading, setLoading] = useState(true)

    return (
        <Link 
            href={`/detail/${item.data[0].nasa_id}`}
            className="flex flex-col gap-4 sm:w-1/4 sm:h-1/4 w-1/2 p-2 border-solid border-[1px] border-black transition-all hover:scale-110 bg-slate-700"
        >
            {/* TODO: check if video or image, render that type */}
            <div className={`self-center ${loading ? 'block' : 'hidden'}`} >
                Loading image...
            </div>
            <div >
                <Image
                    src={item.links[0].href}
                    alt={item.data[0].title}
                    onLoad={() => setLoading(false)}
                    width={'250'}
                    height={'250'}
                    className={`max-h-[75%]`}
                    placeholder="empty"
                />
            </div>
            <h2 className={`text-center sm:text-sm text-wrap text-white`}>{item.data[0].title.substring(0,50)}</h2>
        </Link>
    )
}