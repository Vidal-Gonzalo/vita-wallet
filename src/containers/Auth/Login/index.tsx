import moneyIncome from '../../../assets/illustrations/money-income.png'
import LoginForm from '../../../sections/LoginForm'

const Login = () => {

    return (
        <div className='h-3/4 pt-10 2xl:pt-16'>
            <div className=''>
                <h1 className="text-5xl font-semibold">Iniciar sesión</h1>
            </div>
            <div className="grid grid-cols-12 my-8">
                <div className="col-span-6 my-8">
                    <LoginForm />
                </div>
                <div className="w-full h-full col-span-6 relative">
                    <img src={moneyIncome} className="absolute -right-4 top-0 w-[85%]" alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Login