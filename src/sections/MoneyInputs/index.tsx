import { SelectInputCoin, TextInputAmount } from '../../components'

export interface SelectValues {
    title: string;
    icon: string;
}

const SELECT_VALUES: SelectValues[] = [
    { title: "Peso chileno", icon: "/icons/chile.png" },
    { title: "Bitcoin", icon: "/icons/bitcoin.png" },
];

const MoneyInputs = ({ title, initialMoneyIndex }: { title: string, initialMoneyIndex: number }) => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <p>{title}</p>
            <div className="flex w-full gap-4">
                <SelectInputCoin initialMoneyIndex={initialMoneyIndex} selectValues={SELECT_VALUES} />
                <TextInputAmount currency={title} />
            </div>
        </div>
    )
}

export default MoneyInputs