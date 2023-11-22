import React from 'react'
import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

function Header() {
  return (
    <header className='header'>
        <div className='contenedor barra'>
            <Link src='/'>
                <img src={logo} alt="Logo LA" />
            </Link>
            <nav className='navegacion'>
                <Link
                    to='/' 
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
