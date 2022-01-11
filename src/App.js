import { useFetchDistritos, useFetchEspecialidades } from './RestConsumer';
import { useNavigate } from 'react-router-dom';
import './App.css';
import landingImage from './landing-image.png';
import { useState } from 'react';

export function App() {
  const distritos = useFetchDistritos();
  const especialidades = useFetchEspecialidades();
  let navigate = useNavigate();

  let [especialidad, setEspecialidad] = useState();
  let [distrito, setDistrito] = useState();
  

  return (
    <div className="flex flex-col h-full">
      <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-amber-200'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl sm:text-6xl font-bold'>TodoOfficios</h1>
          <h2 className='text-sm sm:text-xl font-light'>Encuentra profesionales confiables y seguros en el menor tiempo posible</h2>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <form className='flex space-y-4 md:space-y-0 flex-col md:flex-row w-full sm:w-3/5 md:w-1/2 justify-center' onSubmit={() => navigate(`/busqueda?distrito=${distrito}&especialidad=${especialidad}`)}>
            <select className="w-full max-w-full md:max-w-[300px] mt-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" 
              name="especialidad" title="Especialidad" onChange={(e) => setEspecialidad(parseInt(e.target.value)) }>
              <option value="">Especialidad</option>
              {
                especialidades.map(especialidad => (
                  <option key={especialidad.idEspecialidad} value={especialidad.idEspecialidad}>{especialidad.nombreEspecialidad}</option>
                ))
              }
            </select>
            <select className="w-full max-w-full md:max-w-[200px] mt-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              name="distrito" title="Distrito" onChange={(e) => setDistrito(parseInt(e.target.value)) }>
              <option value="">Distrito</option>
              {
                distritos.map(distrito => (
                  <option key={distrito.idDistrito} value={distrito.idDistrito}>{distrito.nombreDistrito}</option>
                ))
              }
            </select>
            <div className='ml-2'>
              <button className='w-[100px] p-2 bg-emerald-400 text-white uppercase' onClick={event => {

              }}>Buscar</button>
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
