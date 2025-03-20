import { Link } from "react-router-dom";

export default function AppHeader(){
    return(
        <header className="py-5 shadow-lg shadow-green-600">
            <div className="w-4/5 m-auto flex flex-row">
                <div className="left-menu basis-1/2">
                <a href="#">
                    logo
                    {/* <img src="" alt="logo" /> */}
                </a>
                </div>
                <div className="right-menu basis-1/2 flex  flex-row justify-between ">
                    <Link>Videogames</Link>
                    <Link>about</Link>
                    <Link>contact</Link>
                </div>
            </div>
        </header>
    )
}