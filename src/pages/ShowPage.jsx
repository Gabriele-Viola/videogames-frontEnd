import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card";

export default function ShowPage() {

    const [videogame, setVideogame] = useState({})
    const { id } = useParams()

    const PageTitle = () => {
        useEffect(() => {
            document.title = videogame?.title
        }, [])
    }

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
    useEffect(() => {
        if (videogame?.title)
            document.title = videogame?.title
    }, [videogame])
    useEffect(() => fetchDataShow(), [id])

    return (
        <>
            <div className="mb-5 py-5 bg-orange-400 shadow-md shadow-orange-400">
                <h1 className="w-4/5 m-auto text-lg 2xl:text-5xl lg:text-3xl text-white uppercase font-medium px-2">Scopri di più su: </h1>

            </div>
            <div className="w-4/5 m-auto grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                <div className="2xl:col-span-2">

                    <Card data={videogame} show={Boolean(true)} />
                </div>
                <div className="dettagli px-3">
                    <div className=" inset-shadow-sm inset-shadow-emerald-700 bg-emerald-300 rounded-2xl p-2 mb-3">
                        <h3 className="mb-2 text-2xl">Descrizione: </h3>
                        <p >{videogame?.description}</p>
                    </div>
                    <div >
                        <div className="inset-shadow-sm inset-shadow-emerald-700 rounded-2xl p-2 bg-emerald-300">
                            <h3 className="mb-1 text-2xl">Genere: </h3>
                            <p>{videogame?.genre?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}