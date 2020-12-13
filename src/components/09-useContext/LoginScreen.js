import React, {useContext} from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext);

    const usuario = {
        id: 1234,
        nombre: 'Carlos',
        email: 'carlos@gmail.com'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            
            <button
                className="btn btn-primary"
                onClick={() => setUser(usuario)}
            >Login</button>
        </div>
    )
}
