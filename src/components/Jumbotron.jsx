export default function Jumbotron({ title }) {
    return (
        <div className="bg-[url('/image/100-best-games-hp-b.webp')] bg-no-repeat bg-cover bg-center shadow-md mb-6 shadow-orange-600">
            <div className="w-4/5 m-auto grid grid-cols-1 2xl:grid-cols-3 content-center">
                <h1 className="bg-orange-500/60 text-shadow shadow-md shadow-orange-600 col-span-2 rounded-4xl my-20 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase p-3 text-center text-orange-200 ">{title}</h1>
            </div>
        </div>
    )
}