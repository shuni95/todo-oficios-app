import { Component } from 'react';
import './App.css';
import landingImage from './landing-image.png';

export class App extends Component {
  render() {
    return (
      <div className="flex flex-col h-full">
        <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-amber-200'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl sm:text-6xl font-bold'>TodoOfficios</h1>
            <h2 className='text-sm sm:text-xl font-light'>Encuentra profesionales confiables y seguros en el menor tiempo posible</h2>
          </div>
          <div className='flex flex-col items-center mt-4'>
            <form className='flex space-y-4 md:space-y-0 flex-col md:flex-row w-full sm:w-3/5 md:w-1/2 justify-center'>
              <select className="block w-full max-w-full md:max-w-[300px] mt-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" 
                name="especialidad" title="Especialidad">
                <option value="">Categoria</option>
                <option value="1">Plomeria</option>
                <option value="2">Carpinteria</option>
                <option value="3">Pintura</option>
                <option value="99">Otros</option>
              </select>
              <select className="block w-full max-w-full md:max-w-[200px] mt-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                name="Distrito" title="Distrito">
                <option value="">Distrito</option>
                <option value="1">Ate</option>
                <option value="2">La Molina</option>
                <option value="3">Miraflores</option>
                <option value="4">San Isidro</option>
                <option value="5">Surco</option>
              </select>
              <div className='ml-2'>
                <button className='w-[100px] p-2 bg-emerald-400 text-white uppercase shadow-sm'>Buscar</button>
              </div>
            </form>
          </div>
        </section>
        <div className='invisible md:visible absolute bottom-[55px] left-[-65px]'>
          <img src={landingImage} alt="Imagen de landing de un detective"/>
        </div>
      </div>
    )
  }
}
