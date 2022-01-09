import { useParams, useSearchParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export function Professional() {
    let params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <section className="flex flex-col h-full bg-gray-200 pt-6 xl:px-[150px] overflow-y-scroll">
            <div className="bg-white mt-4 p-8 xl:w-1/2">
                <div className="flex flex-row">
                    <h1 className="text-2xl font-bold uppercase">Antonio Vargas</h1>    
                    
                </div>
                <div className="flex flex-row">
                    <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>Gasfitero</p>
                </div>
                <div>
                    <p className='mt-2'><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>El Agustino - </span><FontAwesomeIcon icon={faPhone} color='blue'/> <span className='ml-2'>989101989</span></p>
                    <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>Mz A Lt 21 Av. San Jeronimo</span></p>
                    <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>avargas@gmail.com</span></p>
                    <p className='mt-2'>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                </div>
                <div className="mt-4">
                    <Link className="uppercase bg-gray-700 px-4 py-1 text-white" to={`/?especialidad=${searchParams.get('especialidad')}`}>Regresar</Link>
                </div>
            </div>



            <div className="bg-white mt-4 px-8 py-6 xl:w-3/5 space-y-6">
                <div className="mt-2">
                    <h2 className="text-xl font-bold uppercase">Ultimos trabajos</h2>
                </div>
                <div>
                    <div className="flex flex-row">
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>Gasfitero</p>
                    </div>
                    <div className="mt-2">
                        <p><FontAwesomeIcon icon={faCheckCircle} color="green"/><span className="ml-2">Comentario: Buen trato y puntual. Luego hicimos el sinrespeto y cumplio. 10/10.</span></p>
                        <p><FontAwesomeIcon icon={faCalendar} color="purple"/> <span className="ml-2">Fecha: 02/01/2022</span></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className="ml-2">Callao</span></p>
                        <p><FontAwesomeIcon icon={faUser}/> <span className="ml-2">Piero Loza Palma</span></p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>Gasfitero</p>
                    </div>
                    <div className="mt-2">
                        <p><FontAwesomeIcon icon={faCheckCircle} color="green"/><span className="ml-2">Comentario: Buen trato y puntual. Luego hicimos el sinrespeto y cumplio. 10/10.</span></p>
                        <p><FontAwesomeIcon icon={faCalendar} color="purple"/> <span className="ml-2">Fecha: 02/01/2022</span></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className="ml-2">Callao</span></p>
                        <p><FontAwesomeIcon icon={faUser}/> <span className="ml-2">Piero Loza Palma</span></p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>Gasfitero</p>
                    </div>
                    <div className="mt-2">
                        <p><FontAwesomeIcon icon={faCheckCircle} color="green"/><span className="ml-2">Comentario: Buen trato y puntual. Luego hicimos el sinrespeto y cumplio. 10/10.</span></p>
                        <p><FontAwesomeIcon icon={faCalendar} color="purple"/> <span className="ml-2">Fecha: 02/01/2022</span></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className="ml-2">Callao</span></p>
                        <p><FontAwesomeIcon icon={faUser}/> <span className="ml-2">Piero Loza Palma</span></p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>Gasfitero</p>
                    </div>
                    <div className="mt-2">
                        <p><FontAwesomeIcon icon={faCheckCircle} color="green"/><span className="ml-2">Comentario: Buen trato y puntual. Luego hicimos el sinrespeto y cumplio. 10/10.</span></p>
                        <p><FontAwesomeIcon icon={faCalendar} color="purple"/> <span className="ml-2">Fecha: 02/01/2022</span></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className="ml-2">Callao</span></p>
                        <p><FontAwesomeIcon icon={faUser}/> <span className="ml-2">Piero Loza Palma</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}