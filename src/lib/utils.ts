const formatAmount = (amount: number) => {
    return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 });
};

export const getUserBalance = (balances: Record<string, number>) => {
    if(!balances) return null;
    return Object.keys(balances).map(key => {
        let title = '';
        let icon = '';
        
        switch (key) {
            case 'usd':
                title = 'U$D';
                icon = '/icons/moneySymbol.png';
                break;
            case 'usdt':
                title = 'Tether';
                icon = '/icons/tether.png';
                break;
            case 'usdc':
                title = 'USDC';
                icon = '/icons/usdc.svg';
                break;
            case 'btc':
                title = 'Bitcoin';
                icon = '/icons/bitcoin.png';
                break;
            default:
                title = key.toUpperCase();
                icon = '/icons/default.png'; // En caso de que haya otra moneda
                break;
        }

        return {
            title,
            icon,
            amount: formatAmount(balances[key])
        };
    });
};

export const getTransactions = (transactions: any) => {
    if(transactions === undefined) return null;

    return transactions?.map((transaction: any) => {
        const { amount, currency, category } = transaction.attributes;
        
        let title = '';
        switch (category) {
            case 'deposit':
                title = 'Recibiste';
                break;
            case 'recharge':
                title = 'Recargaste';
                break;
            case 'transfer':
                title = 'Transferiste';
                break;
            case 'exchange':
                title = 'Intercambiaste';
                break;
            default:
                title = 'Operación';
                break;
        }

        return {
            title,
            amount: `${amount} ${currency?.toUpperCase()}`,
            category
        };
    });
}
