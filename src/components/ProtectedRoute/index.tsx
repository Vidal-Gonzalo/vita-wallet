import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: React.PropsWithChildren) {
    const isLoggedIn = true
    const { pathname } = useLocation();
    if (!isLoggedIn && pathname) {
        return <Navigate to={`/`} />;
    }

    return children;
}

export default ProtectedRoute