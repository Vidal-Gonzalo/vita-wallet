import { useEffect, useState } from 'react'
import CardList from '../../sections/CardList'
import TransactionsRecord from '../../sections/TransactionsRecord'
import { getDashboardData } from '../../services/profile/profile'
import { useUser } from '../../context/UserContext'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'

const Dashboard = () => {
    const { userData, setUserData } = useUser()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkCredentialsAndFetchData = async () => {
            const accessToken = Cookies.get('accessToken');
            const uid = Cookies.get('uid');
            const expiry = Cookies.get('expiry');
            const client = Cookies.get('client');

            if (!accessToken || !uid || !expiry || !client) {
                navigate('/login');
                return;
            }

            try {
                const { profile, transactions } = await getDashboardData() ?? {}

                setUserData({ user: profile, transactions });
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkCredentialsAndFetchData();
    }, [navigate, setUserData]);


    if (isLoading) {
        return <div className="w-full h-[80svh] flex flex-col items-center justify-center">
            <Loader />;
        </div>
    }

    return (
        <div className='w-full flex flex-col gap-16 items-center justify-center'>
            <div className='w-full flex items-center gap-3'>
                <img src={'/illustrations/coin.png'} width={46} height={46} />
                <h1 className='font-semibold text-2xl'>¡Hola
                    <span className='text-primary'> {userData?.user?.attributes?.first_name}!</span>
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