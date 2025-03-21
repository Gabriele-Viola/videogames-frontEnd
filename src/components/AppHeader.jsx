import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="py-3 shadow-lg shadow-green-600">
            <div className="w-4/5 m-auto flex flex-row">
                <div className="left-menu basis-1/2">
                    <NavLink to={'/'}>
                        logo
                        {/* <img src="" alt="logo" /> */}
                    </NavLink>
                </div>
                <div className="right-menu basis-1/2 ">
                    <div className="text-right ">

                        <NavLink to={'/'} className="pl-5 ">Videogames</NavLink>
                        <NavLink className="pl-5 ">About</NavLink>
                        <NavLink className="pl-5 ">Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}