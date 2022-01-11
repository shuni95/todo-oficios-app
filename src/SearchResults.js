import { useFetchDistritos, useFetchEspecialidades } from './RestConsumer';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function SearchResults() {
    let [searchParams, setSearchParams] = useSearchParams();
    const distritos = useFetchDistritos();
    const especialidades = useFetchEspecialidades();
    let [distrito, setDistrito] = useState(searchParams.get('distrito'));
    let [especialidad, setEspecialidad] = useState(searchParams.get('especialidad'));
    
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
                                <input type="radio" name='distrito' value={d.nombreDistrito} checked={d.nombreDistrito === distrito} onChange={() => setDistrito(d.idDistrito)}/>
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
                                <input type="radio" name='especialidad' value={esp.idEspecialidad} checked={esp.nombreEspecialidad === especialidad} onChange={() => setEspecialidad(esp.idEspecialidad)}/>
                                <span className='ml-2'>{esp.name}</span>
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
                
                    <div className='bg-white p-6 mx-8'>
                        <div>
                            <h3 className='text-lg font-semibold text-blue-700'><Link to={`/professional/1`}>Antonio Vargas</Link></h3>
                            <p className='mt-2'><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>El Agustino - </span><FontAwesomeIcon icon={faPhone} color='blue'/> <span className='ml-2'>989101989</span></p>
                            <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>Mz A Lt 21 Av. San Jeronimo</span></p>
                            <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>avargas@gmail.com</span></p>
                            <p className='mt-2'>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <p className='text-gray-700 border border-solid border-black px-3 py-1'>Gasfitero</p>
                            <Link className='uppercase bg-red-700 px-4 py-1 text-white ml-auto xl:ml-8' to={`/professional/1?especialidad=${searchParams.get('especialidad')}&distrito=${searchParams.get('distrito')}`}>Ver perfil</Link>
                        </div>
                    </div>
                
                    <div className='bg-white p-6 mx-8'>
                        <div>
                            <h3 className='text-lg font-semibold'>Antonio Vargas</h3>
                            <p className='mt-2'><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>El Agustino - </span><FontAwesomeIcon icon={faPhone} color='blue'/> <span className='ml-2'>989101989</span></p>
                            <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>Mz A Lt 21 Av. San Jeronimo</span></p>
                            <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>avargas@gmail.com</span></p>
                            <p className='mt-2'>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <p className='text-gray-700 border border-solid border-black px-3 py-1'>Gasfitero</p>
                            <button className='uppercase bg-red-700 px-4 py-1 text-white ml-auto xl:ml-8'>Ver perfil</button>
                        </div>
                    </div>

                    <div className='bg-white p-6 mx-8'>
                        <div>
                            <h3 className='text-lg font-semibold'>Antonio Vargas</h3>
                            <p className='mt-2'><FontAwesomeIcon icon={faMapMarkerAlt} color='red'/> <span className='ml-2'>El Agustino - </span><FontAwesomeIcon icon={faPhone} color='blue'/> <span className='ml-2'>989101989</span></p>
                            <p><FontAwesomeIcon icon={faBuilding}/> <span className='ml-2'>Mz A Lt 21 Av. San Jeronimo</span></p>
                            <p><FontAwesomeIcon icon={faEnvelope} color='silver'/> <span className='ml-2'>avargas@gmail.com</span></p>
                            <p className='mt-2'>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <p className='text-gray-700 border border-solid border-black px-3 py-1'>Gasfitero</p>
                            <button className='uppercase bg-red-700 px-4 py-1 text-white ml-auto xl:ml-8'>Ver perfil</button>
                        </div>
                    </div>
            </div>
        </section>
    )
} 