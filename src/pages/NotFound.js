import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return(
        <div className="not-found">
            <p className="error">404</p>
            <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
            <p className="activeLink notfound-link"><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
        </div>
    )
}