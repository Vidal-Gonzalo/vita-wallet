import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getCredentials } from '../../lib/auth';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children }: React.PropsWithChildren) {
    const { authCredentials } = useAuth()
    const { pathname } = useLocation();
    const isUserLogged = authCredentials ?? getCredentials()

    if (!isUserLogged && pathname) {
        return <Navigate to={`/`} />;
    }

    return children;
}

export default ProtectedRoute