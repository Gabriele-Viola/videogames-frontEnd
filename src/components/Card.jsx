import { useState } from "react"
import { BsNintendoSwitch, BsXbox, BsPlaystation, BsSteam, BsDpad } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Card({ data, show }) {
    const [logoPltform, setLogoPlatform] = useState('')
    console.log(data);
    console.log(show);

    function namePlatform(platform, where) {
        if (platform.name == 'nintendo-switch') {
            return <div key={platform?.id} className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <div className={`flex items-center ${where && 'px-1'}`}>
                    <BsNintendoSwitch />
                    {where && <strong className="px-2 uppercase">{platform.name}</strong>}

                </div>
            </div>
        } else if (platform.name == 'xbox') {
            return <div key={platform?.id}
                className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <BsXbox />
            </div>

        } else if (platform.name == 'playstation') {
            return <div key={platform?.id}
                className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <BsPlaystation className="text-white" />
            </div>
        } else if (platform.name == 'steam') {
            return <div key={platform?.id}
                className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <BsSteam />
            </div>
        } else {
            return <BsDpad />
        }
    }

    function textTruncade(text, where) {
        if (where) {
            const textTruncade = text?.slice(0, 35) + '...'
            return textTruncade
        } else {
            return text
        }
    }

    return (


        data.title ?
            <div className={`card h-full rounded-tl-3xl  rounded-br-3xl shadow-lg border-2 border-orange-500 shadow-orange-800 bg-[url(${import.meta.env.VITE_API_IMG}${data?.image})] p-3`} style={{ backgroundImage: `url(${import.meta.env.VITE_API_IMG}${data?.image})`, backgroundSize: "cover", backgroundPosition: "top", }}>
                <div className=" my-2 flex justify-between">
                    <div>
                        {data?.platforms?.map(platform =>
                            namePlatform(platform, show)
                        )}
                    </div>
                    <Link
                        to={`/videogame/${data?.id}`}
                        className="bg-orange-500 border-2 border-orange-600 text-orange-50 rounded-tl-3xl rounded-br-3xl py-2  px-4 hover:border-2 hover:bg-orange-50 hover:text-orange-500">
                        Scoprimi
                    </Link>
                </div>
                <div className="h-100 img-size">
                    {/* spazio per vedere immagine di spondo */}
                </div>
                <div className="bg-gray-50/50 backdrop-blur-xs rounded-tl-3xl rounded-br-3xl p-2" >

                    <h2 className="title text-lg uppercase">{data?.title}</h2>
                    <p>{textTruncade(data?.description, show)}</p>
                    {show &&
                        <div>
                            <strong>Genere: </strong>
                            <span>{data.genre.name}</span>
                        </div>
                    }
                </div>
            </div>
            :
            <h1>Loading</h1>

    )
}