import { useState, useEffect } from 'react';
import { SelectValues } from '../../../sections/MoneyInputs';


interface SelectInputCoinProps {
    selectValues: SelectValues[];
    initialMoneyIndex: number
}

const SelectInputCoin = ({ selectValues, initialMoneyIndex }: SelectInputCoinProps) => {
    const [selectedValue, setSelectedValue] = useState<SelectValues | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSelectedValue(selectValues[initialMoneyIndex]);
    }, [selectValues]);

    const handleSelect = (value: SelectValues) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Selected value display */}
            <div
                className="flex items-center justify-between p-3 gap-2 border border-gray-300 rounded-md cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedValue && (
                    <div className="flex items-center gap-2">
                        <img src={selectedValue.icon} alt={selectedValue.title} className="w-6 h-6" />
                    </div>
                )}
                <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {selectValues
                        .filter((value) => value !== selectedValue)
                        .map((value) => (
                            <div
                                key={value.title}
                                className="flex justify-center items-center p-3 gap-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(value)}
                            >
                                <img src={value.icon} alt={value.title} className="w-6 h-6" />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default SelectInputCoin;