import CardMoney from '../../components/CardMoney'

const testCards = [
    { title: 'Peso chileno', icon: '/icons/chile.png', amount: "$900.000" },
    { title: 'Bitcoin', icon: '/icons/bitcoin.png', amount: "0,050" },
    { title: 'Tether', icon: '/icons/tether.png', amount: "0,0" },
]

const CardList = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl'>Mis saldos</h2>
                <div className='grid grid-cols-12'>
                    {testCards.map((card, index) => (
                        <CardMoney key={index} card={card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardList