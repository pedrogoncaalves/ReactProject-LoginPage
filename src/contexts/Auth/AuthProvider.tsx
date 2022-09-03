import { useState } from 'react';

import { User } from '../../types/user'
import { AuthContext } from './AuthContext';


export const AuthProvider = ({children} : {children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);

    const signIn = (email:string, password: string) => {

    }

    const signOut = () => {

    }

    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            
            {children}

        </AuthContext.Provider>
    )



    

}