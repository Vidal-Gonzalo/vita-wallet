import { createContext, useContext, useState } from 'react';

interface IExchangeContext {
    amountToExchange: any;
    setAmountToExchange: any;
    amountToReceive: any;
    setAmountToReceive: any;
}

const ExchangeContext = createContext<IExchangeContext | null>(null);

export const ExchangeProvider = ({ children }: { children: any }) => {
    const [amountToExchange, setAmountToExchange] = useState<number>(0);
    const [amountToReceive, setAmountToReceive] = useState<number>(0);

    return (
        <ExchangeContext.Provider value={{ amountToExchange, setAmountToExchange, amountToReceive, setAmountToReceive }}>
            {children}
        </ExchangeContext.Provider>
    );
};

export const useExchange = () => {
    return useContext(ExchangeContext);
};
