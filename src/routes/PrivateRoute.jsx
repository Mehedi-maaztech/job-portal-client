import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div className="flex justify-center items-center min-h-[70vh]">
            <span className="loading loading-dots loading-xl"></span>
        </div>;
    }

    if(user){
        return children;
    }
    return (
        <Navigate to="/auth/signin" state={location?.pathname} replace></Navigate>
    );
};

export default PrivateRoute;