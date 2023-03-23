import { NavLink } from 'react-router-dom'
import Logo from "../images/kasa.svg"
import React from 'react';

export default function Header() {
    return (
        <div className="header">
            <div>
                <h1>Kasa</h1>
                <img src={Logo} alt="logo de Kasa"></img>
            </div>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A Propos</NavLink></li>
            </ul>
        </div>
    );
}