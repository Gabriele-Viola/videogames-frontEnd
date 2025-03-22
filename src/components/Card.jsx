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
                    {where && <strong className="px-2 uppercase hidden sm:inline">{platform.name}</strong>}

                </div>
            </div>
        } else if (platform.name == 'xbox') {
            return <div key={platform?.id} className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <div className={`flex items-center ${where && 'px-1'}`}>
                    <BsXbox />
                    {where && <strong className="px-2 uppercase hidden sm:inline">{platform.name}</strong>}

                </div>
            </div>

        } else if (platform.name == 'playstation') {
            return <div key={platform?.id} className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <div className={`flex items-center ${where && 'px-1'}`}>
                    <BsPlaystation className="text-white" />
                    {where && <strong className="px-2 uppercase hidden sm:inline text-white">{platform.name}</strong>}

                </div>
            </div>
        } else if (platform.name == 'steam') {
            return <div key={platform?.id} className="rounded-2xl p-1 mx-1 inline-block" style={{ backgroundColor: platform.color }}>
                <div className={`flex items-center ${where && 'px-1'}`}>
                    <BsSteam />
                    {where && <strong className="px-2 uppercase hidden sm:inline">{platform.name}</strong>}

                </div>
            </div>
        } else {
            return <BsDpad />
        }
    }

    function textTruncade(text, where) {
        if (!text) return 'nessuna descrizione'
        return where ? text : text?.slice(0, 150) + '...'

    }


    return (


        data.title ?
            <div className="relative card h-full rounded-tl-3xl rounded-br-3xl shadow-lg border-2 border-orange-500 shadow-orange-800 p-3">

                <div
                    className="absolute inset-0 bg-cover bg-center blur-md"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_API_IMG}${data?.image})`, backgroundSize: "cover", backgroundPosition: "top", filter: "blur(10px)" }}
                ></div>

                <div className="relative z-10">
                    <h3 className="title text-lg font-medium uppercase px-1 py-2 mb-2 bg-gray-50/50 backdrop-blur-md rounded-tl-2xl rounded-br-2xl ">{data.title}</h3>
                    <img className="z-40 w-full rounded-tl-2xl rounded-br-2xl border-orange-700 border-2 mb-3" src={`${import.meta.env.VITE_API_IMG}${data?.image}`} alt={data?.title} />


                    {!show && (
                        <div className=" bg-gray-50/50 backdrop-blur-md rounded-tl-3xl rounded-br-3xl p-2 mb-4">
                            <p>{textTruncade(data?.description, show)}</p>
                        </div>
                    )}
                    <div className=" my-2 flex justify-between items-center">
                        <div>
                            {data?.platforms?.map(platform => namePlatform(platform, show))}
                        </div>
                        {!show && (


                            <Link
                                to={`/videogame/${data?.id}`}
                                className="bg-orange-500 border-2 border-orange-600 text-orange-50 rounded-tl-2xl rounded-br-2xl py-1 px-2 hover:border-2 hover:bg-orange-50 hover:text-orange-500"
                            >
                                Scoprimi
                            </Link>

                        )}
                    </div>
                </div>
            </div>
            :
            <h1>Loading</h1>

    )
}