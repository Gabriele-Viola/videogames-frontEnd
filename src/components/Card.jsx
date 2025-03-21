import { useState } from "react"
import { Link } from "react-router-dom"

export default function Card({ data }) {
    const [videogame, setVideogame] = useState(data)

    const textTruncade = videogame?.description.slice(0, 35) + '...'

    return (
        <div className={`card h-full rounded-tl-3xl  rounded-br-3xl shadow-lg border-2 border-orange-500 shadow-orange-800 bg-[url(${import.meta.env.VITE_API_IMG}${videogame?.image})] p-3`} style={{ backgroundImage: `url(${import.meta.env.VITE_API_IMG}${videogame?.image})`, backgroundSize: "cover", backgroundPosition: "center", }}>
            <div className="text-right my-2">
                <Link className="bg-orange-500 border-2 border-orange-600 text-orange-50 rounded-tl-3xl rounded-br-3xl py-2  px-4 hover:border-2 hover:bg-orange-50 hover:text-orange-500">Scoprimi</Link>
            </div>
            <div className="h-100 img-size">
                {/* spazio per vedere immagine di spondo */}
            </div>
            <div className="bg-gray-50/50 backdrop-blur-xs rounded-tl-3xl rounded-br-3xl p-2" >

                <h2 className="title text-lg uppercase">{videogame?.title}</h2>
                <p>{textTruncade}</p>
            </div>
        </div>
    )
}