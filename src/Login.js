import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login () {
    const usuario = useFormInput("");
    const password = useFormInput("");
    const [esTrabajador, setEsTrabajador] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
    let navigate = useNavigate();

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

        if (!usuario.value) { 
            localErrors['usuario'] = 'El campo Usuario es requerido.';
        }

        if (!password.value) { 
            localErrors['password'] = 'El campo Contraseña es requerido.';
        }

        setErrorMessages(localErrors);

        if (Object.keys(localErrors).length === 0) {
            if (!esTrabajador) {
                axios.get(process.env.REACT_APP_BASE_URL + '/api/clientesLogin/' + usuario.value + '/' + password.value)
                .then(response => {
                    localStorage.setItem('usuario', JSON.stringify(response.data[0]));

                    navigate('/');
                    window.location.reload(false);
                })
            } else {
                axios.get(process.env.REACT_APP_BASE_URL + '/api/trabajadoresLogin/' + usuario.value + '/' + password.value)
                .then(response => {
                    localStorage.setItem('trabajador', JSON.stringify(response.data[0]));

                    navigate('/');
                    window.location.reload(false);
                })
            }
        }
    }

    const handleCheckbox = e => {
        setEsTrabajador(e.target.checked);
    }

    return (
        <section className="flex flex-col w-full items-center h-full bg-amber-200 mx-auto pt-4 md:pt-32">
            <form noValidate className="flex flex-row justify-center w-full md:w-[540px] bg-white mx-12 rounded-2xl" onSubmit={handleSubmit}>
                <div className="flex flex-col rounded-sm w-[80%] mt-4 pt-8 px-5 pb-20">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-4xl font-bold">Login</h1>
                    </div>
                    <div className="flex flex-col mt-16">
                        <input type="text" className="border-t-0 border-x-0 border-b-2" name="usuario" placeholder="Usuario" {...usuario}/>
                        <span className="text-red-600 text-xs">{errorMessages['usuario'] ? errorMessages['usuario'] : '' }</span>
                    </div>
                    <div className="flex flex-col mt-8">
                        <input type="password" className="border-t-0 border-x-0 border-b-2" name="password" placeholder="Password" {...password}/>
                        <span className="text-red-600 text-xs">{errorMessages['password'] ? errorMessages['password'] : '' }</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <input className="w-6 h-6" type="checkbox" name="esTrabajador" onChange={handleCheckbox}/> 
                        <span className="ml-2">¿Es trabajador?</span>
                    </div>
                    <div className="flex flex-row mt-10 justify-center">
                        <button className='w-[200px] text-lg p-2 bg-emerald-400 text-white uppercase rounded-full select-none'>Ingresar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
