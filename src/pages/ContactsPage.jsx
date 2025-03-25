import { BiAt, BiSolidShareAlt } from "react-icons/bi";
import Jumbotron from "../components/jumbotron";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactsPage() {
    return (
        <>
            <Jumbotron title='Contattami' />
            <div className="w-4/5 m-auto">
                <h2 className="text-2xl pb-4 text-orange-500">Scrivimi!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                    <div className=" col-span-1 bg-gray-500/80 text-shadow text-gray-300 rounded-2xl shadow-md shadow-gray-400 p-5 mb-5">
                        <h3 className="pb-3 text-xl font-semibold text-orange-500 flex flex-row items-center">Email <BiAt className="ml-2" /></h3>
                        <p className="text-base/8">
                            gabrieleviola50@gmail.com
                        </p>
                    </div>
                    <div className=" col-span-1 bg-gray-500/80 text-shadow text-gray-300 rounded-2xl shadow-md shadow-gray-400 p-5 mb-5">
                        <h3 className="pb-3 text-xl font-semibold text-orange-500 flex flex-row items-center">Social <BiSolidShareAlt className="ml-2" /></h3>


                        <div className="col-span-1">

                            <Link className=" hover:text-orange-300" to={'https://www.linkedin.com/in/gabriele-viola-733245202/'} >
                                <FaLinkedin className="inline-block me-2 text-orange-500" />
                                Linkedin
                            </Link>
                        </div>
                        <div className="col-span-1">

                            <Link className=" hover:text-orange-300" to={'https://github.com/Gabriele-Viola'}>
                                <FaGithub className="inline-block me-2 text-orange-500 " />
                                GitHub
                            </Link>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}