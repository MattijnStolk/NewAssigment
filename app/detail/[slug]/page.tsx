import { redirect } from "next/navigation"
import Image from "next/image"
import { item } from "@/constants/types"
import FavButton from "@/components/FavButton"

export default async function Page ({params} : {params: { slug: string}}) {
    if (params.slug == '' || !params.slug) { redirect('/') }
	// await new Promise((resolve) => setTimeout(resolve, 5000));

    const data = await fetch(`https://images-api.nasa.gov/search?q=${params.slug}`, {
		headers: {
			'apiKey': '6XWKt5plnla6I80juDlWuotGKkJnbDCe1WaSKdw7'
		}
	})
	const nasaData = await data.json()
    const item = nasaData.collection.items[0] as item
    const itemData = item.data[0]

    const createdate = (dateString: string) => {
        let date = new Date(dateString)
        return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
    }

    return (
        <div className="sm:flex m-4 gap-4">
            <div className="sm:w-2/5 h-1/4 mb-5 sm:mb-0">
                <Image
                    src={item.links[0].href}
                    alt={item.data[0].title}
                    width={'1500'}
                    height={'1500'}
                />
                <FavButton item={item}/>
            </div>
            <div className="sm:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl">{itemData.title}</h2>
                <p className="text-lg">{itemData.description}</p>
                <p> <span className="font-bold"> photographer: </span>{itemData.photographer} </p>
                <p> <span className="font-bold"> location: </span>{itemData.location} </p>
                <p> <span className="font-bold"> created at: </span>{createdate(itemData.date_created)} </p>
            </div>
        </div>
    )
}