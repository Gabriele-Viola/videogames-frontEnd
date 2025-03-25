import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AppFooter() {
    return (
        <footer className=" bg-gray-900 mt-5">
            <div className="w-4/5 m-auto flex justify-between md:py-2 2xl:py-4">

                <div className="who text-orange-400 md:text-md 2xl:text-xl">
                    Sviluppato da <Link to='/About' className="bg-orange-400 text-gray-900 rounded-md px-2 shadow-md shadow-orange-800  hover:text-orange-800">Gabriele Viola</Link> come progetto finale!
                </div>
                <div className="social">
                    <ul className="flex justify-end content-center">
                        <li className="text-orange-400 hover:text-orange-300 md:text-md 2xl:text-xl pl-3">
                            <Link className="text-1xl" to='/contact'  >
                                Social
                            </Link>
                        </li>
                        <li className="text-orange-400 text-3xl pl-3  hover:text-orange-800">
                            <Link to={'https://www.linkedin.com/in/gabriele-viola-733245202/'} >
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li className="text-orange-400 text-3xl rounded-4xl pl-3 hover:text-orange-800 ">
                            <Link to={'https://github.com/Gabriele-Viola'}>
                                <FaGithub />
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>

        </footer>
    )
}