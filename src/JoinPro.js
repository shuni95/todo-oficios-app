import { Component } from "react";

export class JoinPro extends Component {
    render() {
        return (
            <section className='flex flex-col h-full px-4 py-8 md:px-0 md:py-16 bg-amber-200'>
                <form className="flex flex-row w-full md:px-[25%] lg:px-[30%] space-y-2">
                    <div className="flex flex-col">
                        <p>Aca deberia estar la foto</p>
                    </div>
                    <div className="flex flex-col">
                    <div>
                        <h2 className="text-xl font-bold">Datos personales</h2>
                    </div>
                    
                    <div className="flex flex-col md:max-w-[320px]">
                        <label htmlFor="nombres">Nombres</label>
                        <input type="text" name="nombres" placeholder="Nombres" className=""/>
                    </div>
                    
                    <div className="flex flex-col md:max-w-[320px]">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" placeholder="Apellidos"/>
                    </div>
                    
                    <div className="flex flex-row space-x-4 md:max-w-[320px]">
                        <div className="flex flex-col w-[100px]">
                            <label htmlFor="edad">Edad</label>
                            <input type="text" name="edad" placeholder="Edad"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="dni">DNI</label>
                            <input type="text" name="dni" placeholder="DNI"/>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Datos profesionales</h2>
                    </div>

                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="ruc">RUC</label>
                            <input type="text" name="RUC" placeholder="RUC"/>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <label htmlFor="dni">DNI</label>
                            <input type="text" name="telefono" placeholder="Telefono"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" name="direccion" placeholder="Direccion"/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="sobre_mi">Sobre mi</label>
                        <textarea name="sobre_mi" placeholder="Descripcion"></textarea>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="distrito">Distrito</label>
                        <input type="text" name="distrito" placeholder="Distrito"/>
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="oficio">Oficio</label>
                        <input type="text" name="oficio" placeholder="Oficio"/>
                    </div>
                    </div>
                </form>
            </section>
        )
    }
}
