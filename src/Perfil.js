import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./RestConsumer";

export function Perfil() {
    const [usuario, setUsuario] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const item = localStorage.getItem('usuario');

        if (item) {
            setUsuario(JSON.parse(item));
        } else {
            navigate('/');
        }
    }, [])

    return (
        <section className="flex flex-row h-full bg-white pt-8 xl:px-[150px] overflow-y-scroll">
            <div className="flex flex-col w-full bg-white mt-4 py-8 px-20">
                <div className="flex">
                    <h1 className="text-3xl font-bold uppercase">Mi Perfil</h1>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="border-b-2 border-gray-500 border-solid pb-1">
                        <h2 className="text-lg font-semibold text-gray-500">Información personal</h2>
                    </div>
                    <div className="flex flex-row space-x-20 mt-6">
                        <div className="flex flex-col w-1/4 space-y-2">
                            <label>Nombres</label>
                            <input type="text" value={usuario.nombreCliente} disabled/>
                        </div>
                        <div className="flex flex-col w-1/4 space-y-2">
                            <label>Apellidos</label>
                            <input type="text" value={usuario.apellidosCliente} disabled/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-20 mt-6">
                        <div className="flex flex-col w-1/4 space-y-2">
                            <label>Correo</label>
                            <input type="text" value={usuario.correo} disabled/>
                        </div>
                        <div className="flex flex-col w-1/4 space-y-2">
                            <label>Telefono</label>
                            <input type="text" value={usuario.telefono} disabled/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-20 mt-6">
                        <div className="flex flex-col w-1/4 space-y-2">
                            <label>DNI</label>
                            <input type="text" value={usuario.dni} disabled/>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 border-b-2 border-gray-500 border-solid pb-1">
                    <h2 className="text-lg font-semibold text-gray-500">Ubicacion</h2>
                </div>
                <div className="flex flex-row space-x-20 mt-6">
                    <div className="flex flex-col w-1/4 space-y-2">
                        <label>Direccion</label>
                        <input type="text" value={usuario.direccion} disabled/>
                    </div>
                    <div className="flex flex-col w-1/4 space-y-2">
                        <label>Distrito</label>
                        <input type="text" value={usuario.nombreDistrito} disabled/>
                    </div>
                </div>
            </div>
        </section>
    )
} 
