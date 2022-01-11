import { useParams, useSearchParams, Link } from "react-router-dom";
import { useFetchEspecialidades } from "./RestConsumer";

export function Proyecto() {
    let [searchParams, setSearchParams] = useSearchParams();
    const especialidades = useFetchEspecialidades();
    const especialidad = especialidades.find(e => e.idEspecialidad === parseInt(searchParams.get('especialidad')));

    return (
        <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-white'>
            <form className="flex flex-row w-full md:px-[25%] lg:px-[30%]">
                <div className="flex flex-col w-full space-y-2">
                    <div>
                        <h1 className="text-xl font-bold uppercase">Solicitar servicio</h1>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombreProfesional">Profesional</label>
                        <input type="text" name="nombreProfesional" className="uppercase text-gray-600" value="Antonio Vargas" disabled/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombreCliente">Cliente</label>
                        <input type="text" name="nombreCliente" className="uppercase text-gray-600" value="Piero Loza" disabled/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombreEspecialidad">Especialidad</label>
                        <input type="text" name="nombreEspecialidad" className="uppercase text-gray-600" value={especialidad.nombreEspecialidad} disabled/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" name="fecha" className=""/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea name="descripcion" rows="4" placeholder="Descripcion"></textarea>
                    </div>

                    <div className="flex flex-col pt-4 items-end">
                        <button className='py-2 px-6 bg-emerald-400 text-white uppercase font-bold'>Registrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}