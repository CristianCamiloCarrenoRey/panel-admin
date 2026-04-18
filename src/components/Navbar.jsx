import React from 'react'
import { Header } from './Header'
import Menu from './Menu'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-success navbar-dark">
            <div className="container-fluid">
                <Header />
                <Menu />
            </div>
        </nav>
    );
}

export default Navbar