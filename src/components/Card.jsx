import { useState } from "react"

export default function Card({data}){
    const [videogame, setVideogame] = useState(data)
    return(
        <div className="card rounded-tl-lg rounded-br-lg shadow shadow-blue-500" >
            <div className="title">{videogame?.title}</div>
            <div>{videogame?.description}</div>
        </div>
    )
}