import { useRef, useState } from 'react';

const TextInputAmount = ({ currency }: { currency: string }) => {
    const [value, setValue] = useState<string>('0,00');
    const inputRef = useRef<HTMLInputElement>(null);

    const formatNumber = (num: string) => {
        const cleanedValue = num.replace(/[^0-9,]/g, '');

        const parts = cleanedValue.split(',');

        const integerPart = parts[0].replace(/\./g, '');
        const decimalPart = parts[1] ? parts[1] : '';

        const formattedInteger = Number(integerPart).toLocaleString('es-ES');

        return decimalPart ? `${formattedInteger},${decimalPart}` : formattedInteger;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const input = inputRef.current;

        const cursorPosition = input?.selectionStart || 0;

        const formattedValue = rawValue === "" || rawValue === "0,0" ? "0,00" : formatNumber(rawValue);

        setValue(formattedValue);

        setTimeout(() => {
            if (input) {
                const newCursorPosition = cursorPosition + (formattedValue.length - rawValue.length);
                input.setSelectionRange(newCursorPosition, newCursorPosition);
            }
        }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '-' || e.key === 'e') {
            e.preventDefault();
        }
    };

    return (
        <div className="relative">
            {currency?.toLowerCase().includes("peso") && (
                <img
                    src="/icons/moneySymbol.png"
                    alt="Money Symbol"
                    className="absolute w-[20px] h-[20px] left-4 top-1/2 transform -translate-y-1/2"
                />
            )}
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="input input-bordered focus-within:outline-none pl-10"
            />
        </div>
    );
};

export default TextInputAmount;
