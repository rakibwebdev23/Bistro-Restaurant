import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;