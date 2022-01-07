import './App.css';
import landingImage from './landing-image.png';

function App() {
  return (
    <div className="flex flex-col h-full">
      <header className='p-2 sm:p-4 bg-black'>
        <div className='w-1/2 inline-flex justify-start'>
          <img className='w-4 h-4' src="" alt="xd"/>
        </div>
        <div className='w-1/2 inline-flex justify-end items-center'>
          <a role="button" className="py-2 px-3 bg-slate-600 text-white border-2 rounded-full border-white" href="/registroTrabajador">Quiero ofrecer mis servicios</a>
          <a role="button" className='py-2 px-3 ml-9 bg-slate-600 text-white' href="/login">Ingresar</a>
          <a role="button" className='py-2 px-3 ml-4 bg-slate-600 text-white' href="/register">Registro</a>
        </div>
      </header>
      <section className='flex flex-col h-full py-16 bg-white'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl sm:text-6xl font-bold'>TodoOfficios</h1>
          <h2 className='text-sm sm:text-lg font-light'>Somos expertos, lo arreglamos o te damos el orificio del cojito</h2>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <form className='flex flex-row w-1/2'>
            <select className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" 
              name="especialidad" title="Especialidad">
              <option value="">--Especialidad--</option>
              <option value="1">Plomeria</option>
              <option value="2">Carpinteria</option>
              <option value="3">Pintura</option>
              <option value="99">Otros</option>
            </select>
            <select className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              name="Distrito" title="Distrito">
              <option value="">--Distrito--</option>
              <option value="">Ate</option>
              <option value="">La Molina</option>
              <option value="">Miraflores</option>
              <option value="">San Isidro</option>
              <option value="">Surco</option>
            </select>
            <div>
              <button className='p-2 bg-slate-600 text-white'>Buscar</button>
            </div>
          </form>
        </div>
      </section>
      <div className='invisible md:visible absolute bottom-[55px]'>
          <img src={landingImage} alt="Imagen de landing de un detective"/>
        </div>
      <footer className='w-full absolute bottom-0 py-4 bg-slate-400'>
        <p className="text-center">TodoOficios 2022</p>
      </footer>
    </div>
  )
}

export default App;
