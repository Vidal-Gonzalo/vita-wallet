import CardList from '../../sections/CardList'
import TransactionsRecord from '../../sections/TransactionsRecord'

const Dashboard = () => {
    return (
        <div className='w-full flex flex-col gap-16 items-center justify-center'>
            <div className='w-full flex items-center gap-3'>
                <img src={'/illustrations/coin.png'} width={46} height={46} />
                <h1 className='font-semibold text-2xl'>¡Hola
                    <span className='text-primary'> David!</span>
                </h1>
            </div>
            <div className='w-full flex flex-col gap-14'>
                <CardList />
                <TransactionsRecord />
            </div>
        </div>
    )
}

export default Dashboard