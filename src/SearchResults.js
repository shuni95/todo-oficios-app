import useFetch, { useFetchEspecialidades } from './RestConsumer';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export function SearchResults() {
    let [searchParams, setSearchParams] = useSearchParams();
    const {distritosStatus, distritos} = useFetch('/api/distritos');
    const especialidades = useFetchEspecialidades();
    let [distrito, setDistrito] = useState(searchParams.get('distrito'));
    let [especialidad, setEspecialidad] = useState(searchParams.get('especialidad'));
    let [resultados, setResultados] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_URL + `/api/trabajadores?distrito=${distrito}&especialidad=${especialidad}`)
        .then(response => response.json())
        .then(results => {
            let nuevosResultados = results;
            if (distrito) {
                nuevosResultados = nuevosResultados.filter(r => r.distrito === parseInt(distrito));
            }
            if (especialidad) {
                const iEspecialidad = parseInt(especialidad);
                nuevosResultados = nuevosResultados.filter(r => {
                    const tempEsp = JSON.parse(r.especialidades);

                    return tempEsp.filter(e => e.id === iEspecialidad).length > 0;
                });
            }

            nuevosResultados = nuevosResultados.map(r => {
                r.especialidades = JSON.parse(r.especialidades);
                return r
            })
            
            setResultados(nuevosResultados);
        });        
    }, [distrito, especialidad])
    
    return (
        <section className='flex flex-row h-full bg-gray-200 pt-8 xl:px-[150px]'>
            <div className='flex flex-col sm:basis-2/5 lg:max-w-[320px] px-4 md:px-8'>
                <form className='flex flex-col' onSubmit={() => setSearchParams({'distrito': distrito, 'especialidad': especialidad})}>
                <h2 className='text-xl font-semibold'>Filtros</h2>
                
                <div className='border border-solid border-black bg-white px-4 py-3 mt-6'>
                    <h2 className='text-lg font-semibold'>Distritos</h2>
                    <div className='max-h-48 overflow-y-scroll space-y-1 pl-1 mt-3 pb-2'>
                    {
                        distritos.map(d => (
                            <div className='flex flex-row items-center' key={d.idDistrito}>
                                <input type="radio" name='distrito' value={d.idDistrito} checked={d.idDistrito === parseInt(distrito)} onChange={() => setDistrito(d.idDistrito)}/>
                                <span className='ml-2'>{d.nombreDistrito}</span>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className='border border-solid border-black bg-white p-3 mt-6'>
                    <h2 className='text-lg font-semibold'>Oficios</h2>
                    <div className='space-y-1 pl-1 mt-3 pb-2'>
                    {
                        especialidades.map(esp => (
                            <div className='flex flex-row items-center' key={esp.idEspecialidad}>
                                <input type="radio" name='especialidad' value={esp.idEspecialidad} checked={esp.idEspecialidad === parseInt(especialidad)} onChange={() => setEspecialidad(esp.idEspecialidad)}/>
                                <span className='ml-2'>{esp.nombreEspecialidad}</span>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className='mt-4'>
                    <button className='w-full p-2 bg-emerald-400 text-white uppercase shadow-sm'>Buscar</button>
                </div>
                </form>
            </div>

            <div className='flex flex-col sm:basis-3/5 lg:basis-full pb-20 space-y-4'>
                <h2 className='text-xl font-bold pl-8'>Profesionales recomendados</h2>
                {resultados.map(trabajador => (
                    <div className='bg-white p-6 mx-8' key={trabajador.idTrabajador}>
                        <div>
                            <h3 className='text-lg font-semibold text-blue-700'><Link to={`/professional/${trabajador.idTrabajador}`}>{trabajador.nombreTrabajador} {trabajador.apellidoTrabajador}</Link></h3>
                            <p className='mt-2'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>{distritos.find(d => d.idDistrito === trabajador.distrito).nombreDistrito} - </span><FontAwesomeIcon icon={faPhone} color='blue'/><span className='ml-2'>{trabajador.telefono}</span>
                            </p>
                            <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>{trabajador.direccion}</span></p>
                            <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>{trabajador.correo}</span></p>
                            <p className='mt-2'>{trabajador.sobreMi}</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            {trabajador.especialidades.map( (te, i) => (
                                <p key={i} className='text-gray-700 border border-solid border-black px-3 py-1 mr-2'>{te.nombre}</p>
                            ))}
                            <Link className='uppercase bg-red-700 px-4 py-1 text-white ml-auto xl:ml-8' to={`/professional/${trabajador.idTrabajador}?especialidad=${searchParams.get('especialidad')}&distrito=${searchParams.get('distrito')}`}>Ver perfil</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 