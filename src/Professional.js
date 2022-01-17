import { useParams, useSearchParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

export function Professional() {
    let params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    let [trabajador, setTrabajador] = useState({});
    let [especialidades, setEspecialidades] = useState([]);
    let [proyectos, setProyectos] = useState([]);
    
    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_URL + '/api/trabajadores/' + params.proId)
        .then(response => response.json())
        .then(results => {
            setTrabajador(results[0]);
            setEspecialidades(JSON.parse(results[0].especialidades));
        });

        fetch(process.env.REACT_APP_BASE_URL + '/api/trabajadores/' + params.proId + '/proyectos')
        .then(response => response.json())
        .then(results => {
            setProyectos(results);
        });
    }, [])

    return (
        <section className="flex flex-col h-full bg-gray-200 pt-6 xl:px-[150px] overflow-y-scroll">
            <div className="bg-white mt-4 p-8 xl:w-1/2">
                <div className="flex flex-row">
                    <h1 className="text-2xl font-bold uppercase">{trabajador.nombreTrabajador} {trabajador.apellidoTrabajador}</h1>
                </div>
                <div className="flex flex-row space-x-4">
                    {especialidades.map(e => (
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>{e.nombre}</p>    
                    ))}
                </div>
                <div>
                    <p className='mt-2'><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>{trabajador.nombreDistrito} - </span><FontAwesomeIcon icon={faPhone} color='blue'/> <span className='ml-2'>{trabajador.telefono}</span></p>
                    <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>{trabajador.direccion}</span></p>
                    <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>{trabajador.correo}</span></p>
                    <p className='mt-2'>{trabajador.sobreMi}</p>
                </div>
                <div className="mt-4">
                    <Link className="uppercase bg-gray-700 px-4 py-1 text-white" to={`/busqueda?especialidad=${searchParams.get('especialidad')}&distrito=${searchParams.get('distrito')}`}>Regresar</Link>
                    <Link className="ml-2 uppercase bg-emerald-600 text-white px-4 py-1" to={`/nuevoProyecto?trabajador=${params.proId}&cliente=1&especialidad=${searchParams.get('especialidad')}&distrito=${searchParams.get('distrito')}`}>Solicitar proyecto</Link>
                </div>
            </div>

            <div className="bg-white mt-4 px-8 py-6 xl:w-3/5 space-y-6">
                <div className="mt-2">
                    <h2 className="text-xl font-bold uppercase">Ultimos trabajos</h2>
                </div>
                {proyectos.map(p => (
                <div>
                    <div className="flex flex-row">
                        <p className='text-gray-700 border border-solid border-black px-3 py-1 text-center mt-2'>{p.nombreEspecialidad}</p>
                    </div>
                    <div className="mt-2">
                        <p><FontAwesomeIcon icon={faCheckCircle} color="green"/><span className="ml-2">Comentario: {p.comentarioCliente}</span></p>
                        <p><FontAwesomeIcon icon={faCalendar} color="purple"/> <span className="ml-2">Fecha: {p.fecha}</span></p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className="ml-2">{trabajador.nombreDistrito}</span></p>
                        <p><FontAwesomeIcon icon={faUser}/> <span className="ml-2">{p.nombreCliente}</span></p>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}