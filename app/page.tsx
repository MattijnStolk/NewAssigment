import ItemCard from "@/components/ItemCard";
import { item } from "@/constants/types";

export default async function Home({searchParams} : {searchParams: {[key: string]: string}}) {
	// await new Promise((resolve) => setTimeout(resolve, 5000));
	const data = await fetch(`https://images-api.nasa.gov/search?q=${searchParams.q ? searchParams.q : ''}&media_type=image,video`, {
		headers: {
			'apiKey': '6XWKt5plnla6I80juDlWuotGKkJnbDCe1WaSKdw7'
		}
	})
	const nasaData = await data.json()
	const items = nasaData.collection.items

	console.log(`https://images-api.nasa.gov/search?q='${searchParams.q ? searchParams.q : ''}'&media_type=image,video`)

	// console.log(nasaData.collection.items[1])
  return (
    <div>
		<main className="">
			<div className="w-screen h-screen flex flex-wrap">
				{items.map((item: item) => {
					return <ItemCard item={item} />
				})}
			</div>
		</main>
    </div>
  );
}
