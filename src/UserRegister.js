import axios from "axios";
import { useState } from "react/cjs/react.development";
import useFetch from "./RestConsumer";

export function UserRegister() {
    const {distritosStatus, distritos} = useFetch('/api/distritos');
    const nombres = useFormInput("");
    const apellidos = useFormInput("");
    const dni = useFormInput("");
    const telefono = useFormInput("");
    const direccion = useFormInput("");
    const distrito = useFormInput("");
    const correo = useFormInput("");
    const password = useFormInput("");
    const repeatPassword = useFormInput("");
    const [errorMessages, setErrorMessages] = useState({})

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

    const handleSubmit = e => {
        e.preventDefault();
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

        if (!correo.value) {
            localErrors['correo'] = 'El campo Correo es requerido.';
        }

        if (!telefono.value) {
            localErrors['telefono'] = 'El campo Telefono es requerido.';
        }

        if (!password.value) {
            localErrors['password'] = 'El campo Contraseña es requerido.';
        }

        if (!repeatPassword.value) {
            localErrors['repeatPassword'] = 'El campo Repetir Contraseña es requerido.';
        }

        if (password.value !== repeatPassword.value) {
            localErrors['repeatPassword'] = 'Las contraseñas deben coincidir.';
        }

        setErrorMessages(localErrors);

        if (Object.keys(localErrors).length === 0) {
            // No errors, so call the API
            const data = {
                "nombreCliente": nombres.value,
                "apellidosCliente": apellidos.value,
                "dni": dni.value,
                "direccion": direccion.value,
                "distrito": distrito.value,
                "telefono": telefono.value,
                "correo": correo.value,
                "password": password.value,
            }
    
            axios.post(process.env.REACT_APP_BASE_URL + '/api/clientes', data)
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status >= 400) {
                        alert(error.response.data.message);
                    }
                }
            })
        }
    }

    return (
        <section className='flex flex-col w-full items-center h-full mx-auto pt-4 md:pt-20 bg-amber-200'>
            <form noValidate className="flex flex-row w-full justify-center bg-white md:w-[540px] mx-12 rounded-3xl" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-8 px-5 pb-14">
                    <div>
                        <h2 className="text-2xl font-bold">Registro</h2>
                    </div>

                    <div className="flex flex-row mt-4 space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text" name="nombres" required placeholder="Nombres" {...nombres}/>
                            <span className="text-red-600 text-xs">{errorMessages['nombres'] ? errorMessages['nombres'] : '' }</span>
                        </div>

                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" required placeholder="Apellidos" {...apellidos}/>
                            <span className="text-red-600 text-xs">{errorMessages['apellidos'] ? errorMessages['apellidos'] : '' }</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-row mt-4 space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="dni">DNI</label>
                            <input type="text" name="dni" required placeholder="DNI" {...dni}/>
                            <span className="text-red-600 text-xs">{errorMessages['dni'] ? errorMessages['dni'] : '' }</span>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" name="telefono" required placeholder="Telefono" {...telefono}/>
                            <span className="text-red-600 text-xs">{errorMessages['telefono'] ? errorMessages['telefono'] : '' }</span>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 w-full">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" required placeholder="Direccion" {...direccion}/>
                        <span className="text-red-600 text-xs">{errorMessages['direccion'] ? errorMessages['direccion'] : '' }</span>
                    </div>

                    <div className="flex flex-col mt-4 w-full">
                        <label htmlFor="distrito">Distrito</label>
                        <select required name="distrito" {...distrito}>
                        <option value="">Distrito</option>
                        {distritos.map(distrito => (
                            <option key={distrito.idDistrito} value={distrito.idDistrito}>{distrito.nombreDistrito}</option>
                        ))}
                        </select>
                        <span className="text-red-600 text-xs">{errorMessages['distrito'] ? errorMessages['distrito'] : '' }</span>
                    </div>

                    <div className="flex flex-col mt-4 w-full">
                        <label htmlFor="correo">Correo</label>
                        <input type="email" name="correo" placeholder="Correo" {...correo}/>
                        <span className="text-red-600 text-xs">{errorMessages['correo'] ? errorMessages['correo'] : '' }</span>
                    </div>

                    <div className="flex flex-row mt-4 space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Password" {...password}/>
                            <span className="text-red-600 text-xs">{errorMessages['password'] ? errorMessages['password'] : '' }</span>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="password">Confirmar contraseña</label>
                            <input type="password" name="repeatPassword" placeholder="Password otra vez" {...repeatPassword}/>
                            <span className="text-red-600 text-xs">{errorMessages['repeatPassword'] ? errorMessages['repeatPassword'] : '' }</span>
                        </div>
                    </div>

                    <div className="flex flex-row mt-8 justify-center">
                        <button className='w-[200px] text-lg p-2 bg-emerald-400 text-white uppercase rounded-full select-none'>Registrar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
