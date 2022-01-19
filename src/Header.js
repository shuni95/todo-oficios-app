import { useEffect } from "react";
import landingIcon from './landing-icon.png';

import { Link } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    const [usuario, setUsuario] = useState({})
    const [menuOpened, setMenuOpened] = useState(false);

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

    const toggleMenu = e => {
        e.preventDefault();

        setMenuOpened(e => !e);
    }

    return (
        <header className='p-2 sm:p-4 bg-amber-200 flex items-center'>
            <div className='w-1/2 inline-flex justify-start'>
                <Link to="/"><img className='w-[50px] h-[50px] ml-[250px]' src={landingIcon} alt="Logo"/></Link>
            </div>
            {Object.keys(usuario).length === 0 ?
            (
                <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
                    <Link className="py-2 px-3 bg-amber-400 text-black rounded-full" to="/joinPro">Quiero chambear!</Link>
                    <Link className='py-2 px-3 ml-9 bg-amber-200 text-black font-semibold border-2 border-solid border-black uppercase' to="/login">Ingresar</Link>
                    <Link className='py-2 px-3 ml-4 mr-4 sm:mr-16 xl:mr-32 bg-amber-400 text-black font-semibold uppercase' to="/register">Registro</Link>
                </div>
            )
            :
            (
                <nav className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
                    <Link className="py-2 px-3 bg-amber-400 text-black rounded-full" to="/joinPro">Quiero chambear!</Link>
                    <span className="py-2 px-3 text-black uppercase font-semibold select-none">{usuario.nombreCliente} {usuario.apellidosCliente}</span>
                    <button className="w-[32px] h-[32px]" onClick={() => setMenuOpened(true)}><FontAwesomeIcon icon={faBars}/></button>
                    
                </nav>
            )}

            {menuOpened ? 
            (
            <nav className="flex flex-col absolute top-0 right-0 bg-amber-300 h-full w-[180px] text-center items-center pt-4">
                <button className="text-black hover:bg-amber-600 w-full py-2" onClick={() => setMenuOpened(false)}><FontAwesomeIcon icon={faCaretDown}/></button>
                <Link className="text-black hover:bg-amber-600 w-full py-2" to="/perfil"><FontAwesomeIcon icon={faUser} color="red"/><span className="ml-2">Perfil</span></Link>
                <Link className="text-black hover:bg-amber-600 w-full py-2" to="/proyectosUsuario"><FontAwesomeIcon icon={faBriefcase} color="red"/><span className="ml-2">Proyectos</span></Link>
                <button className="text-black hover:bg-amber-600 w-full py-2" onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} color="red"/><span className="ml-2">Cerrar sesión</span></button>
            </nav>
            ): 
            <></>
            }
        </header>
    )
}