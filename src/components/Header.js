import React from "react";
import './Header.css';

function Header() {
    return(
        <header>
            <div className="logo">
                <h1>Yash Rastogi</h1>
                <p>Java Developer | 3+ years of experience</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;