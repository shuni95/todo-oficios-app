import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchEspecialidades } from "./RestConsumer";

export function Proyecto() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [fecha, setFecha] = useState('');
    let [descripcion, setDescripcion] = useState('');
    let [especialidad, setEspecialidad] = useState('');
    let especialidades = useFetchEspecialidades();
    let [especialidadChecker, setEspecialidadChecker] = useState(false);
    
    useEffect(() => {
        if (searchParams.get('especialidad')) { 
            const esp = especialidades.find(e => e.idEspecialidad === parseInt(searchParams.get('especialidad')))
            if (esp) {
                setEspecialidad(esp.nombreEspecialidad);
            } else {
                setEspecialidadChecker(c => !c);
            }
        }
    }, [especialidadChecker]); 

    const handleSubmit = e => {
        e.preventDefault();
        
        const data = {
            "idCliente": searchParams.get('cliente'),
            "idTrabajador": searchParams.get('trabajador'),
            "especialidad": searchParams.get('especialidad'),
            "fecha": fecha,
            "comentarioCliente": descripcion,
        }

        fetch(process.env.REACT_APP_BASE_URL + '/api/proyectos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(
            json => {
                console.info(json);
                if (json.message == 'Received') alert("OK");
                else alert('Failed');
            }, 
            _ => {
                alert("F");
            }
        );
    }

    return (
        <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-white'>
            <form className="flex flex-row w-full md:px-[25%] lg:px-[30%]" onSubmit={handleSubmit}>
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
                        <input type="text" name="nombreEspecialidad" className="uppercase text-gray-600" value={especialidad} disabled/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" name="fecha" className="" onChange={(e) => setFecha(e.target.value)}/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea name="descripcion" rows="4" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                    <div className="flex flex-col pt-4 items-end">
                        <button className='py-2 px-6 bg-emerald-400 text-white uppercase font-bold'>Registrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
