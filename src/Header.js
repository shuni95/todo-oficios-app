import { useEffect } from "react";
import landingIcon from './landing-icon.png';

import { Link } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        const item = localStorage.getItem('usuario');

        if (item) {
            setUsuario(JSON.parse(item));    
        }
    }, [])

    const handleLogout = e => {
        e.preventDefault();

        localStorage.setItem('usuario', '');
        setUsuario({});
    }

    return (
        <header className='p-2 sm:p-4 bg-amber-200 flex items-center'>
            <div className='w-1/2 inline-flex justify-start'>
                <Link to="/"><img className='w-[50px] h-[50px] ml-[250px]' src={landingIcon} alt="Logo"/></Link>
            </div>
            {
                Object.keys(usuario).length === 0 ?
                    (
                    <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
                        <Link className="py-2 px-3 bg-amber-400 text-black rounded-full" to="/joinPro">Quiero chambear!</Link>
                        <Link className='py-2 px-3 ml-9 bg-amber-200 text-black font-semibold border-2 border-solid border-black uppercase' to="/login">Ingresar</Link>
                        <Link className='py-2 px-3 ml-4 mr-4 sm:mr-16 xl:mr-32 bg-amber-400 text-black font-semibold uppercase' to="/register">Registro</Link>
                    </div>
                    )
                    :
                    (
                    <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
                        <Link className="py-2 px-3 bg-amber-400 text-black rounded-full" to="/joinPro">Quiero chambear!</Link>
                        <Link className="py-2 px-3 text-black uppercase font-semibold" to="/perfil">{usuario.nombreCliente} {usuario.apellidosCliente}</Link>
                        <button onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} color="red"/></button>
                    </div>
                    )
                }
            
        </header>
    )
}