import { useEffect, useState } from "react";
import { getOficios } from "./data";
import { useFetchDistritos } from "./RestConsumer";


export function JoinPro() {
    let [oficios, setOficios] = useState([]);

    const distritos = useFetchDistritos();

    useEffect(() => {
        setOficios(getOficios());
    }, []);
    

    return (
        <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-white'>
            <form className="flex flex-row w-full md:px-[25%] lg:px-[30%]">
                <div className="flex flex-col space-y-2">
                    <div>
                        <h2 className="text-xl font-bold">Datos personales</h2>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" name="nombres" placeholder="Nombres" className=""/>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos"/>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="ruc">DNI</label>
                            <input type="text" name="dni" placeholder="RUC"/>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="telefono" placeholder="Telefono"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" placeholder="Direccion"/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="sobre_mi">Sobre mi</label>
                        <textarea name="sobre_mi" rows="4" placeholder="Descripcion"></textarea>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="distrito">Distrito</label>
                        <select name="distrito">
                        <option value="">Distrito</option>
                        {distritos.map(distrito => (
                            <option key={distrito.idDistrito} value={distrito.nombreDistrito}>{distrito.nombreDistrito}</option>
                        ))}
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="especialidad">Oficio</label>
                        <select name="especialidad">
                        <option value="">Especialidad</option>
                        {oficios.map(oficio => (
                            <option key={oficio.name} value={oficio.name}>{oficio.name}</option>
                        ))}
                        </select>
                    </div>
                    
                    <div className="flex flex-col pt-4 items-end">
                        <button className='py-2 px-6 bg-emerald-400 text-white uppercase font-bold'>Registrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
