import { Component } from "react";

export class MobileNav extends Component {
    render() {
        return (
            <nav className='visible md:invisible md:max-h-0'>
                <ul className='flex flex-col items-end z-10'>
                    <li><a role="button" className="uppercase" href="/registroTrabajador">Quiero chambear</a></li>
                    <li><a role="button" className='uppercase' href="/login">Ingresar</a></li>
                    <li><a role="button" className='uppercase' href="/register">Registro</a></li>
                </ul>
            </nav>
        )
    }
}