import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
// import ButtonLink from '../components';
import Button from '../components/Button';

function Menu(){

    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Doug Flix" />

            </a>
            <Button as="a" className="ButtonLink" href="/">
                   Novo Vídeo
            </Button>
        </nav>
    );

}

export default Menu;