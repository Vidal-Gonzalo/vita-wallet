import { useEffect } from 'react'
import CardList from '../../sections/CardList'
import TransactionsRecord from '../../sections/TransactionsRecord'
import { getProfileData, getProfileTransactions } from '../../services/profile/profile'
import { useUser } from '../../context/UserContext'

const Dashboard = () => {
    const { userData, setUserData } = useUser()

    useEffect(() => {
        let isMounted = true;

        const fetchUserData = async () => {
            try {
                const [user, transactions] = await Promise.all([
                    getProfileData(),
                    getProfileTransactions()
                ]);

                if (isMounted) {
                    setUserData({ user, transactions });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUserData();

        return () => {
            isMounted = false;
        };
    }, [setUserData]);

    return (
        <div className='w-full flex flex-col gap-16 items-center justify-center'>
            <div className='w-full flex items-center gap-3'>
                <img src={'/illustrations/coin.png'} width={46} height={46} />
                <h1 className='font-semibold text-2xl'>¡Hola
                    <span className='text-primary'> {userData?.user.attributes.first_name}!</span>
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