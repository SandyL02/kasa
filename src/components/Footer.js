import Logo from "../images/kasablanc.svg"
import React from 'react';

export default function Footer() {
    return (
        <div className="footer">
            <img src={Logo} alt="logo de Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}