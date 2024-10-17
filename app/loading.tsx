export default function Loading() {
    const items = []

    for (let i = 0; i < 20; i++) {
        items.push(
        <div className="flex flex-col gap-4 border-solid border-[1px] border-black w-1/4 h-1/4 p-2 bg-slate-700" >
            <h1 className="text-lg text-center">loading..</h1>    
        </div>)
        
    }

    return (
        <main className="">
        <div className="w-screen h-screen flex flex-wrap bg-green-100">
            {items}
            {/* <div className="flex flex-col gap-4 w-1/4 h-1/4 p-2 bg-slate-700" >

            </div> */}
        </div>
    </main>
    )
}