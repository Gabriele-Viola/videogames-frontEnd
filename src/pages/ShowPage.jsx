import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card";

export default function ShowPage() {

    const [videogame, setVideogame] = useState({})
    const { id } = useParams()

    const fetchDataShow = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(resp => {
                const dataShow = resp.data
                console.log(dataShow);
                setVideogame(dataShow.data)

            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => fetchDataShow(), [id])

    return (
        <div className="w-4/5 m-auto">
            <h1>{videogame?.title}</h1>
            <div className="immagine">
                <Card data={videogame} show={Boolean(true)} />
            </div>
            <div className="dettagli">

            </div>
        </div>
    )
}