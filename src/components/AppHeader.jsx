import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className=" shadow-lg shadow-green-600">
            <div className="w-4/5 m-auto flex flex-row">
                <div className="left-menu basis-1/2 items-center">
                    <NavLink to={'/'}>
                        <img className="w-25 rounded-3xl" src={"./image/joypad.jpeg"} alt="" />
                        {/* <img src="" alt="logo" /> */}
                    </NavLink>
                </div>
                <div className="right-menu basis-1/2 content-center ">
                    <div className="flex flex-row justify-end">

                        <NavLink to={'/'} className="pl-5 ">Videogames</NavLink>
                        <NavLink className="pl-5 ">About</NavLink>
                        <NavLink className="pl-5 ">Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}