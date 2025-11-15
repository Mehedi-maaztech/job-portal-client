import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/_firebase_init';
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser?.email);
            if(currentUser?.email){
                const user = {email : currentUser.email};

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log('login token',res.data);
                    setLoading(false);
                })
            }
            else {
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
                .then( res => {
                    console.log('logout',res.data);
                    setLoading(false);
                })
            }
        });
        return () => {
            unsubcribe();
        }
    }, []);

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }   

    const soccialLogin = () => {
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logoutUser,
        updateUserProfile,
        soccialLogin

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;