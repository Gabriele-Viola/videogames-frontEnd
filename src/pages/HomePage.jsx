import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jumbotron from "../components/jumbotron";

export default function HomaPage() {
    useEffect(() => {
        document.title = 'Sala Giochi'
    }, [])

    const [videogames, setVideogames] = useState()

    const fetchdata = () => {
        axios.get(import.meta.env.VITE_API_URL)
            .then(resp => {
                const data = resp.data
                // console.log(data);
                setVideogames(data.data)
            })
            .catch(err => { console.log(err); })
    }

    useEffect(fetchdata, [])
    return (
        <>
            <div className="bg-gray-800">

                <Jumbotron title='I tuoi Videogames preferiti' />
                {videogames ?
                    <div className="w-4/5 m-auto py-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-10 m-auto">
                            {videogames?.map(videogame =>
                                <div className="col" key={videogame.id}>
                                    <Card data={videogame} show={false} />
                                </div>
                            )}

                        </div>
                    </div>
                    :
                    <div className="w-4/5 m-auto">
                        <div className="bg-gray-700 text-orange-500 text-3xl text-center py-5 my-10 rounded-2xl text-shadow shadow-md shadow-gray-600">
                            Loading...
                        </div>
                    </div>
                }
            </div>
        </>
    )
}