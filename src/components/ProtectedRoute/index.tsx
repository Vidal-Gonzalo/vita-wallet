import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getCredentials } from '../../lib/auth';

function ProtectedRoute({ children }: React.PropsWithChildren) {
    const { pathname } = useLocation();
    const isUserLogged = getCredentials()

    if (!isUserLogged && pathname) {
        return <Navigate to={`/`} />;
    }

    return children;
}

export default ProtectedRoute