import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
export default function Deflayout(){
    return(
        <>
        <AppHeader/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}