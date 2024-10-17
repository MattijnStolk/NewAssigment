import SearchBar from "./SearchBar";
import { Suspense } from "react";

export default function Header() {

    return <div className="w-full h-20 flex justify-center items-center bg-blue-800">
        <Suspense>
            <SearchBar/>
        </Suspense>
    </div>
}