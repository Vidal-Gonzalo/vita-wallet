import { createContext, useContext, useState } from 'react';

interface IAuthContext {
    authCredentials: any;
    setAuthCredentials: (data: any) => void;
    authError: AuthError
    setAuthError: (data: AuthError) => void
}

export interface AuthError {
    error: boolean,
    message: string
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: any }) => {
    const [authCredentials, setAuthCredentials] = useState(null)
    const [authError, setAuthError] = useState<AuthError>({ error: false, message: "" })

    return (
        <AuthContext.Provider value={{ authCredentials, setAuthCredentials, authError, setAuthError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
