interface CardInfo {
    title: string
    icon: string
    amount: string
}

interface CardProps {
    card: CardInfo
}

const CardMoney = ({ card }: CardProps) => {
    const { title, icon, amount } = card ?? { title: '', icon: '', amount: '' }

    return (
        <div className="col-span-4 flex flex-col justify-center items-center card w-[95%]">
            <div className="w-full flex flex-col gap-6 p-6">
                <div className="flex justify-between">
                    <p >{title}</p>
                    <img src={icon} width={24} height={24} />
                </div>
                <div>
                    <p className='font-semibold text-2xl'>{amount}</p>
                </div>
            </div>
        </div>
    )
}

export default CardMoney