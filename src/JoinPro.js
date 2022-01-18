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
    const [errorMessages, setErrorMessages] = useState({});

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

        let localErrors = {}

        if (!nombres.value) { 
            localErrors['nombres'] = 'El campo Nombres es requerido.';
        }

        if (!apellidos.value) { 
            localErrors['apellidos'] = 'El campo Apellidos es requerido.';
        }

        if (!dni.value) { 
            localErrors['dni'] = 'El campo DNI es requerido.';
        }

        if (!distrito.value) { 
            localErrors['distrito'] = 'El campo Distrito es requerido.';
        }

        if (!direccion.value) { 
            localErrors['direccion'] = 'El campo Direccion es requerido.';
        }

        if (!telefono.value) {
            localErrors['telefono'] = 'El campo Telefono es requerido.';
        }

        if (!sobreMi.value) {
            localErrors['sobreMi'] = 'El campo Sobre Mi es requerido.';
        }

        if (especialidadesData.length === 0) {
            localErrors['especialidades'] = 'El campo Especialidades es requerido.';
        }

        setErrorMessages(localErrors);

        if (Object.keys(localErrors).length === 0) {
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
    }

    return (
        <section className='flex flex-col w-full items-center h-full px-4 mx-auto md:px-0 md:py-8 bg-amber-200'>
            <form className="flex flex-row justify-center w-[540px] bg-white mx-12 py-4 rounded-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                    <div>
                        <h2 className="text-xl font-bold">Datos personales</h2>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" name="nombres" placeholder="Nombres" {...nombres}/>
                        <span className="text-red-600 text-xs">{errorMessages['nombres'] ? errorMessages['nombres'] : '' }</span>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos" {...apellidos}/>
                        <span className="text-red-600 text-xs">{errorMessages['apellidos'] ? errorMessages['apellidos'] : '' }</span>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="ruc">DNI</label>
                            <input type="text" name="dni" placeholder="DNI" {...dni}/>
                            <span className="text-red-600 text-xs">{errorMessages['dni'] ? errorMessages['dni'] : '' }</span>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="telefono" placeholder="Telefono" {...telefono}/>
                            <span className="text-red-600 text-xs">{errorMessages['telefono'] ? errorMessages['telefono'] : '' }</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" placeholder="Direccion" {...direccion}/>
                        <span className="text-red-600 text-xs">{errorMessages['direccion'] ? errorMessages['direccion'] : '' }</span>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="sobreMi">Sobre mi</label>
                        <textarea name="sobreMi" rows="4" {...sobreMi}></textarea>
                        <span className="text-red-600 text-xs">{errorMessages['sobreMi'] ? errorMessages['sobreMi'] : '' }</span>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="distrito">Distrito</label>
                        <select name="distrito" {...distrito}>
                        <option value="">Distrito</option>
                        {distritos.map(distrito => (
                            <option key={distrito.idDistrito} value={distrito.idDistrito}>{distrito.nombreDistrito}</option>
                        ))}
                        </select>
                        <span className="text-red-600 text-xs">{errorMessages['distrito'] ? errorMessages['distrito'] : '' }</span>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="especialidad">Oficio</label>
                        <select name="especialidad" multiple onChange={handleEspecialidadesSelected} value={especialidadesSeleccionadas}>
                        {especialidades.map(especialidad => (
                            <option key={especialidad.idEspecialidad} 
                                value={especialidad.idEspecialidad} 
                                >{especialidad.nombreEspecialidad}</option>
                        ))}
                        </select>
                        <span className="text-red-600 text-xs">{errorMessages['especialidades'] ? errorMessages['especialidades'] : '' }</span>
                    </div>
                    
                    <div className="flex flex-col pt-4 items-center">
                        <button className='py-2 px-6 bg-emerald-400 text-white uppercase font-bold'>Registrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
