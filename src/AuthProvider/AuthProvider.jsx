import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase/config';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const handelCreateUserAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handelLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        handelCreateUserAccount,
        handelLoginUser
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;