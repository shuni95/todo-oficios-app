import { useEffect, useState } from "react"
import axios from "axios"

function EstadoColor(props) {
    const estado = props.estado;
    switch (estado) {
        case 1:
            return (<div className="flex-col bg-green-600 w-[60px]"></div>)
        case 2:
            return (<div className="flex-col bg-yellow-600 w-[60px]"></div>)
        case 3: 
            return (<div className="flex-col bg-gray-600 w-[60px]"></div>)
    }
}

export function TrabajadorProyecto() {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const item = localStorage.getItem('trabajador');

        if (item) {
            const trabajador = JSON.parse(item);

            axios.get(process.env.REACT_APP_BASE_URL + '/api/proyectosTrabajador/' + trabajador.idTrabajador)
            .then(response => {
                setProyectos(response.data);
            })
        }
    }, []);

    return (
        <section className="flex flex-row h-full bg-white pt-8 xl:px-[150px]">
            <div className="flex flex-col w-full bg-white mt-4 py-8 px-20">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="text-3xl font-bold uppercase">Trabajos solicitados</h1>
                    </div>

                    {proyectos.map(proyecto => 
                        (
                    <div className="flex flex-row pt-8" key={proyecto.idProyecto}>
                        <EstadoColor estado={proyecto.estado}/>

                        <div className="flex flex-col pl-4 py-4 border-gray-300 border-2 w-full">
                            <div className="flex flex-row space-x-20">
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Trabajador:</label>
                                    <p className="ml-4">{proyecto.nombreTrabajador} {proyecto.apellidoTrabajador}</p>
                                </div>
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Especialidad:</label>
                                    <p className="ml-4">{proyecto.nombreEspecialidad}</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-20 mt-4">
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Fecha:</label>
                                    <p className="ml-4">{proyecto.fecha}</p>
                                </div>
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Distrito:</label>
                                    <p className="ml-4">{proyecto.nombreDistrito}</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-20 mt-4">
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Dirección:</label>
                                    <p className="ml-4">{proyecto.direccion}</p>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-20 mt-4">
                                <div className="flex flex-row w-1/4">
                                    <label className="font-bold uppercase">Descripción:</label>
                                    <p className="ml-4">{proyecto.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}