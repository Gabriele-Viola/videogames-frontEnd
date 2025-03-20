import { useParams } from "react-router-dom"

export default function ShowPage(){

const {id} = useParams()



    return(
        <div className="w-4/5 m-auto">
            <div className="immagine">

            </div>
            <div className="dettagli">

            </div>
        </div>
    )
}