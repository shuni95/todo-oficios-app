import './App.css';
import landingImage from './landing-image.png';
import landingIcon from './landing-icon.png';

function App() {
  return (
    <div className="flex flex-col h-full">
      <header className='p-2 sm:p-4 bg-amber-200 flex items-center'>
        <div className='w-1/2 inline-flex justify-start'>
          <img className='w-[50px] h-[50px] ml-[250px]' src={landingIcon} alt="Logo"/>
        </div>
        <div className='invisible md:visible w-1/2 inline-flex justify-end items-center'>
          <a role="button" className="py-2 px-3 bg-amber-400 text-black rounded-full" href="/registroTrabajador">Quiero chambear!</a>
          <a role="button" className='py-2 px-3 ml-9 bg-amber-200 text-black font-semibold border-2 border-solid border-black uppercase' href="/login">Ingresar</a>
          <a role="button" className='py-2 px-3 ml-4 mr-4 sm:mr-16 lg:mr-32 bg-amber-400 text-black font-semibold uppercase' href="/register">Registro</a>
        </div>
      </header>
      <nav className='visible md:invisible md:max-h-0'>
        <ul className='flex flex-col items-end z-10'>
        <li><a role="button" className="uppercase" href="/registroTrabajador">Quiero chambear</a></li>
        <li><a role="button" className='uppercase' href="/login">Ingresar</a></li>
        <li><a role="button" className='uppercase' href="/register">Registro</a></li>
        </ul>
      </nav>
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
      <footer className='w-full absolute bottom-0 py-4 bg-amber-400'>
        <p className="text-center">TodoOficios 2022</p>
      </footer>
    </div>
  )
}

export default App;
