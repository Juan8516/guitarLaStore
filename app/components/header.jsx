import React from 'react'
import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'


function Header() {

    const location = useLocation()

    return (
        <header className='header'>
            <div className='contenedor barra'>
                <Link src='/'>
                    <img className='logo' src={logo} alt="Imagen logo" />
                </Link>
                <nav className='navegacion'>
                    <Link
                        to='/'
                        className={location.pathname === '/' ? 'active' : ''} 
                    >Inicio</Link>
                    <Link
                        to='/nosotros'
                    >Nosotros</Link>
                    <Link
                        to='/tienda'
                    >Tienda</Link>
                    <Link
                        to='/blog'
                    >Blog</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
