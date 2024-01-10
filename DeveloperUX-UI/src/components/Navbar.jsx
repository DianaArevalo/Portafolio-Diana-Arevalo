import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className='header py-4'>
            <NavLink
                className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-tertiary font-bold shadow-md'
                to="/"
            >
                <p
                    className='rose-gradient_text'
                >DCA</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium justify-end'>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-rose-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'text-rose-500' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>

        </header>
    )
}
