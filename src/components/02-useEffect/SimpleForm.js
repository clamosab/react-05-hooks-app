import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    // Acción a realizar cuando se carga la página al poner []
    useEffect( () => {
        console.log('Hey');
    }, []);

    // Acción a realizar cuando se modifica el formulario
    // React recomiendo un estado por lo que nos interesa estar "escuchando" los cambios
    useEffect( () => {
        console.log('Hey form');
    }, [formState]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use effect</h1>   
            <hr />

            <div className='form-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>

            <div className='form-group'>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>

            {(name === '123') && <Message />}
        </>
    )
}
