import { useState } from "react/cjs/react.development";
import useFetch, { useFetchEspecialidades } from "./RestConsumer";


export function JoinPro() {
    const {distritosStatus, distritos} = useFetch('/api/distritos');
    const especialidades = useFetchEspecialidades();
    const nombres = useFormInput("");
    const apellidos = useFormInput("");
    const dni = useFormInput("");
    const telefono = useFormInput("");
    const direccion = useFormInput("");
    const sobreMi = useFormInput("");
    const distrito = useFormInput("");
    let [especialidadesSeleccionadas, setEspecialidadesSeleccionadas] = useState([]);

    function useFormInput(initValue) {
        const [value, setValue] = useState(initValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange,
        }
    }

    const handleEspecialidadesSelected = e => {
        const newEspecialidades = Array.from(e.currentTarget.selectedOptions, option => option.value);
        setEspecialidadesSeleccionadas(newEspecialidades);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const especialidadesData = especialidadesSeleccionadas.map(
            e => { 
                return {"idEspecialidad": e }
            }
        );
        console.info(nombres);
        console.info(nombres.value);

        const data = {
            "nombreTrabajador": nombres.value,
            "apellidoTrabajador": apellidos.value,
            "dni": dni.value,
            "direccion": direccion.value,
            "distrito": distrito.value,
            "telefono": telefono.value,
            'sobreMi': sobreMi.value,
            "especialidades": especialidadesData,
        }

        fetch(process.env.REACT_APP_BASE_URL + '/api/trabajadores', {
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
                <div className="flex flex-col space-y-2">
                    <div>
                        <h2 className="text-xl font-bold">Datos personales</h2>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" name="nombres" placeholder="Nombres" {...nombres}/>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos" {...apellidos}/>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="ruc">DNI</label>
                            <input type="text" name="dni" placeholder="DNI" {...dni}/>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="telefono" placeholder="Telefono" {...telefono}/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" placeholder="Direccion" {...direccion}/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="sobreMi">Sobre mi</label>
                        <textarea name="sobreMi" rows="4" {...sobreMi}></textarea>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="distrito">Distrito</label>
                        <select name="distrito" {...distrito}>
                        <option value="">Distrito</option>
                        {distritos.map(distrito => (
                            <option key={distrito.idDistrito} value={distrito.idDistrito}>{distrito.nombreDistrito}</option>
                        ))}
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="especialidad">Oficio</label>
                        <select name="especialidad" multiple onChange={handleEspecialidadesSelected} value={especialidadesSeleccionadas}>
                        {especialidades.map(especialidad => (
                            <option key={especialidad.idEspecialidad} 
                                value={especialidad.idEspecialidad} 
                                // selected={especialidad.idEspecialidad in especialidadesSeleccionadas}
                                >{especialidad.nombreEspecialidad}</option>
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
