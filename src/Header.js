import { Component } from "react";
import landingIcon from './landing-icon.png';

import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
          <header className='p-2 sm:p-4 bg-amber-200 flex items-center'>
              <div className='w-1/2 inline-flex justify-start'>
                  <Link to="/"><img className='w-[50px] h-[50px] ml-[250px]' src={landingIcon} alt="Logo"/></Link>
              </div>
              <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
                  <Link className="py-2 px-3 bg-amber-400 text-black rounded-full" to="/joinAsPro">Quiero chambear!</Link>
                  <Link className='py-2 px-3 ml-9 bg-amber-200 text-black font-semibold border-2 border-solid border-black uppercase' to="/login">Ingresar</Link>
                  <Link className='py-2 px-3 ml-4 mr-4 sm:mr-16 lg:mr-32 bg-amber-400 text-black font-semibold uppercase' to="/register">Registro</Link>
              </div>
          </header>
        )
    }
}