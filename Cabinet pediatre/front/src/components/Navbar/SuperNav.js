import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './SuperNav.css';

// fonctions composants
function SuperNav(props) {
    return (
        <>

            <div className='hero-container'>
                <h1>{props.label}</h1>
                <p>Vous attendez quoi?</p>
                <div className='hero-btns'>
                    <Button
                        className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        link='/'
                    >
                        Nous Contacter
                    </Button>
                    <Button
                        className='btn'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        link='/rdv'
                    >
                        Prendre un rendez-vous
                    </Button>
                </div>
            </div>
        </>
    );
}

export default SuperNav;