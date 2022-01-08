import { Component } from "react";
import landingIcon from './landing-icon.png';

import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header className='p-2 sm:p-4 bg-amber-200 flex items-center'>
          <div className='w-1/2 inline-flex justify-start'>
            <img className='w-[50px] h-[50px] ml-[250px]' src={landingIcon} alt="Logo"/>
          </div>
          <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
            <a role="button" className="py-2 px-3 bg-amber-400 text-black rounded-full" href="/registroTrabajador">Quiero chambear!</a>
            <a role="button" className='py-2 px-3 ml-9 bg-amber-200 text-black font-semibold border-2 border-solid border-black uppercase' href="/login">Ingresar</a>
            <Link className='py-2 px-3 ml-4 mr-4 sm:mr-16 lg:mr-32 bg-amber-400 text-black font-semibold uppercase' to="/register">Registro</Link>
          </div>
        </header>
        )
    }
}