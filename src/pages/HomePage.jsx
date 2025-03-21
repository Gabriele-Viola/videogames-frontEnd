import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function HomaPage() {

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
            <div className="w-4/5 m-auto py-5">
                <h1 className="text-2xl">I tuoi video giochi </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-10 m-auto">
                    {videogames?.map(videogame =>
                        <div className="col" key={videogame.id}>
                            <Card data={videogame} show={false} />
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}