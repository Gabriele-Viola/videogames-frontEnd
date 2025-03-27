import { Link } from "react-router-dom";
import Jumbotron from "../components/jumbotron";

export default function NotFoundPage() {
    return (
        <>
            <Jumbotron title='ops, what were you looking for?' />
            <div className="w-4/5 m-auto">

                <div className="bg-gray-700 text-orange-500 text-3xl text-center py-5 my-10 rounded-2xl text-shadow shadow-md shadow-gray-600">
                    404 Sorry, you can't find nothing here, please go back to the <Link to='/' className="active:inset-shadow-sm active:inset-shadow-orange-700 rounded-2xl p-2 bg-orange-400 text-orange-200">Homapage</Link>
                </div>
            </div>
        </>
    )
}