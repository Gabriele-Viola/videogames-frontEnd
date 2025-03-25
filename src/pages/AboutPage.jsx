import { useEffect } from "react";
import Jumbotron from "../components/jumbotron";

export default function AboutPage() {
    useEffect(() => {
        document.title = 'About'
    }, [])
    return (
        <>
            <Jumbotron title='A proposito di' />
            <div className="w-4/5 m-auto">
                <h2 className="text-2xl pb-4 text-orange-500">Chi Sono??</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col justify-evenly ">

                        <div className="  bg-gray-500/80 text-shadow text-gray-300 rounded-2xl shadow-md shadow-gray-400 p-5 mb-5">
                            <h3 className="pb-3 text-xl font-semibold text-orange-500">IO:</h3>
                            <p className="text-base/8">
                                Ciao! Sono <span className="text-orange-500 text-shadow">Gabriele</span>, un giovane web developer con una curiosità inesauribile e una forte passione per la tecnologia. Ogni giorno cerco di ampliare le mie conoscenze nel mondo della programmazione, sperimentando nuovi linguaggi, framework e metodologie per migliorare le mie competenze e restare sempre aggiornato sulle ultime novità del settore. Mi piace affrontare le sfide con entusiasmo e determinazione, trovando soluzioni <span className="text-orange-500 text-shadow">creative e innovative</span> ai problemi che incontro.

                                Oltre al mondo del coding, ho una grande passione per la <span className="text-orange-500 text-shadow">fotografia</span> e i <span className="text-orange-500 text-shadow">viaggi</span>. Mi piace <span className="text-orange-500 text-shadow">esplorare</span> nuovi luoghi, catturare momenti unici attraverso l'obiettivo della mia fotocamera e lasciarmi ispirare dalle diverse <span className="text-orange-500 text-shadow">culture e paesaggi</span> che incontro lungo il mio percorso. Credo che ogni esperienza, anche fuori dall’ambito tecnologico, possa arricchirmi e offrirmi nuovi spunti per crescere sia a livello personale che professionale.

                                Sono sempre alla <span className="text-orange-500 text-shadow">ricerca di nuove opportunità per migliorarmi</span> e collaborare con altri sviluppatori, condividendo idee e imparando qualcosa di nuovo ogni giorno.
                            </p>
                        </div>
                        <div className="  bg-gray-500/80 text-shadow text-gray-300 rounded-2xl shadow-md shadow-gray-400 p-5 mb-5">
                            <h3 className="pb-3 capitalize text-xl font-semibold text-orange-500">Formazione by boolean:</h3>
                            <p className="text-base/8">
                                Ho seguito un corso di programmazione presso <span className="text-orange-500 text-shadow">Boolean</span>, dove ho avuto l'opportunità di apprendere la gestione completa di un <span className="text-orange-500 text-shadow">progetto web</span>, dalla gestione dei dati fino all'estetica di una pagina. Durante il percorso, ho acquisito <span className="text-orange-500 text-shadow">solide basi di programmazione</span>, approfondendo sia il lato <span className="text-orange-500 text-shadow">backend</span> che <span className="text-orange-500 text-shadow">frontend</span>, e ho esplorato anche funzionalità più avanzate per creare <span className="text-orange-500 text-shadow">applicazioni</span> moderne e performanti. Questo percorso mi ha permesso di sviluppare competenze pratiche e consolidare la mia <span className="text-orange-500 text-shadow">passione per il mondo dello sviluppo web</span>.                            </p>
                        </div>
                    </div>
                    <div className=" overflow-hidden p-5 md:px-5 lg:col-span-1 md:col-span-1 md:col-start-2 2xl:p-20 ">
                        <img className="rounded-2xl object-contain shadow-md md:m-auto  shadow-gray-400" src="/image/anni502.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}