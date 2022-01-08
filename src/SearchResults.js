import { getDistritos } from './data';
import { getOficios } from './data';
import { useSearchParams } from 'react-router-dom';

export function SearchResults() {
    let [searchParams, setSearchParams] = useSearchParams();
    let distritos = getDistritos();
    let oficios = getOficios();
  
    return (
        <section className='flex flex-row h-full bg-amber-200 pt-8'>
            <div className='flex flex-col sm:basis-2/5 lg:max-w-[320px] px-4 md:px-8'>
                <h2 className='text-md font-semibold'>Filtros</h2>
                <fieldset className='border border-solid border-black px-4 py-2'>
                    <legend>Distritos</legend>
                    <div className='max-h-48 overflow-y-scroll space-y-1 pl-1'>
                    {
                        distritos.map(distrito => (
                            <div className='flex flex-row items-center' key={distrito.name}>
                                <input type="radio" name='distrito' value={distrito.name}/><span className='ml-2'>{distrito.name}</span>
                            </div>
                        ))
                    }
                    </div>
                </fieldset>

                <fieldset className='border border-solid border-black p-3'>
                    <legend>Oficios</legend>
                    {
                        oficios.map(oficio => (
                            <div className='flex flex-row items-center' key={oficio.name}>
                                <input type="radio" name='especialidad' value={oficio.name}/><span className='ml-2'>{oficio.name}</span>
                            </div>
                        ))
                    }
                </fieldset>
            </div>

            <div className='flex flex-col sm:basis-3/5 lg:basis-full overflow-y-scroll pb-20 space-y-4'>
                <h2 className='text-lg font-bold pl-8'>Profesionales recomendados</h2>
                
                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>
                
                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>
                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>

                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>

                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>

                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>

                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>
                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>
                    <div className='bg-amber-50 p-8 rounded-3xl mx-8'>
                        <h3>Antonio Vargas</h3>
                        <p><span>El Agustino</span>-<span>989101989</span></p>
                        <p>Mz A Lt 21 Av. San Jeronimo</p>
                        <p>avargas@gmail.com</p>
                        <p>Ofrezco servicio 7u7 de gasfitería y electricidad, reparación e instalación de calefacción, destape de cámara de alcantarillado y cañerias de desague, trabajo en pvc y cobre. Interesados llamar al 989101989.</p>
                    </div>
            </div>
        </section>
    )
} 