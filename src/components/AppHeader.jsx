import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {

    function toggleMenu() {
        const menu = document.querySelector('.hamburger-menu')
        const list = menu.querySelector('.list-link')
        list.classList.toggle('hidden')
        console.log(list);

    }


    return (
        <header className=" bg-gray-800">
            <div className="w-4/5 m-auto flex flex-row justify-between">
                <div className="left-menu basis-1/2 sm:grid grid-cols-1 content-center py-2 hidden" >
                    <NavLink to={'/'} className='inline-block w-15'>
                        <img className=" rounded-3xl" src={"/image/joypad.jpeg"} alt="" />
                    </NavLink>
                </div>
                <div className="hamburger-menu sm:hidden">
                    <div className="text-orange-400 border-2 border-orange-400  p-1 rounded-md my-4">


                        <BiMenu className="text-4xl" onClick={() => toggleMenu()} />

                        <ul className="list-link hidden">
                            <li className="p-3">
                                <NavLink className="text-1xl" to='/'  >
                                    Videogames
                                </NavLink>
                            </li>
                            <li className="p-3">
                                <NavLink className="text-1xl" to='/About'  >
                                    About
                                </NavLink>
                            </li>
                            <li className="p-3">
                                <NavLink className="text-1xl" to='/contact'  >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-menu basis-1/2 content-center ">


                    <nav className="this-right md:flex flex-row justify-end">
                        <div className="left-menu basis-1/2 flex content-center justify-end py-2 ">
                            <NavLink to={'/'} className='inline-block w-15 md:hidden'>
                                <img className=" rounded-3xl" src={"/image/joypad.jpeg"} alt="" />
                            </NavLink>
                        </div>
                        <div className="hidden md:inline-block">

                            <NavLink to='/' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 border-b-5 py-6 border-gray-800  hover:border-gray-400'} >
                                Videogames
                            </NavLink>
                            <NavLink to='/About' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 py-6 border-b-5 border-gray-800  hover:border-gray-400'} >
                                About
                            </NavLink>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? ' text-orange-400 px-2 py-6 border-b-5 border-orange-400' : 'bg-gray-800 text-orange-400 px-2 py-6 border-b-5 border-gray-800 hover:border-gray-400'} >
                                Contact
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header >
    )
}