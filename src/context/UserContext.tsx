import { createContext, useContext, useState } from 'react';

interface IUserContext {
    userData: UserData | null;
    setUserData: (data: UserData | null) => void;
}

export interface UserData {
    user: any,
    transactions: any
}


const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: { children: any }) => {
    const [userData, setUserData] = useState<UserData | null>(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
