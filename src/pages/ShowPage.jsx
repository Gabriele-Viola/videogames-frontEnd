import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Card from "../components/Card";
import Jumbotron from "../components/jumbotron";

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
    useEffect(() => {
        if (videogame?.title)
            document.title = videogame?.title.toUpperCase()
    }, [videogame])
    useEffect(() => fetchDataShow(), [id])

    return (
        <>
            <Jumbotron title={`Scopri di più a proposito di ${videogame.title}`} />
            {
                videogame.image ?
                    <div className="w-4/5 m-auto grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
                        <div className="2xl:col-span-2">

                            <Card data={videogame} show={Boolean(true)} />
                        </div>
                        <div className="dettagli px-3">
                            <div className=" inset-shadow-sm inset-shadow-orange-700 bg-orange-400 rounded-2xl p-2 mb-3">
                                <h3 className="mb-2 text-2xl font-custom">Descrizione: </h3>
                                <p >{videogame?.description}</p>
                            </div>
                            <div >
                                <div className="inset-shadow-sm inset-shadow-orange-700 rounded-2xl p-2 bg-orange-400 mb-3">
                                    <h3 className="mb-1 text-2xl">Genere: </h3>
                                    <p>{videogame?.genre?.name}</p>
                                </div>
                            </div>
                            <div>

                                <Link to='/' className="active:inset-shadow-sm active:inset-shadow-orange-700 rounded-2xl p-2 bg-orange-400"> Indietro</Link>
                            </div>

                        </div>
                    </div>
                    :
                    <div className="w-4/5 m-auto">
                        <div className="bg-gray-700 text-orange-500 text-3xl text-center py-5 my-10 rounded-2xl text-shadow shadow-md shadow-gray-600">
                            Loading...
                        </div>
                    </div>
            }

        </>
    )
}