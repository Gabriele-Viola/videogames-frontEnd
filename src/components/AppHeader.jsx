import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className=" bg-gray-800">
            <div className="w-4/5 m-auto flex flex-row">
                <div className="left-menu basis-1/2 grid grid-cols-1 content-center py-2">
                    <NavLink to={'/'} className='inline-block w-15'>
                        <img className=" rounded-3xl" src={"/image/joypad.jpeg"} alt="" />
                    </NavLink>
                </div>
                <div className="right-menu basis-1/2 content-center ">
                    <nav className="this-right flex flex-row justify-end">

                        <NavLink to='/' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 border-b-5 py-6 border-gray-800'} >
                            Videogames
                        </NavLink>
                        <NavLink to='/About' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 py-6 border-b-5 border-gray-800'} >
                            About
                        </NavLink>
                        <NavLink to='/contacts' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 py-6 border-b-5 border-gray-800'} >
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header >
    )
}