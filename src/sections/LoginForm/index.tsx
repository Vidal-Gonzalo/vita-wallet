import React, { useState } from 'react'
import hiddenEye from '/icons/hiddenEye.svg'
import check from '/icons/check.svg'
import eye from '/icons/eye.svg'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../services/auth/login'
import { useAuth } from '../../context/AuthContext'

interface FormData {
    field: string,
    value: string,
    error: boolean
}

const LoginForm = () => {
    const [formData, setFormData] = useState<FormData[]>([
        { field: 'email', value: '', error: false },
        { field: 'password', value: '', error: false }
    ]);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { setAuthCredentials, authError, setAuthError } = useAuth()
    const navigate = useNavigate()

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const isFormValid = formData.every(field => field.value !== '' && !field.error);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;

        setFormData(prevData =>
            prevData.map(item => {
                if (item.field === field) {
                    let error = false;
                    if (field === 'email' && !validateEmail(value)) {
                        error = true;
                    } else if (value === '') {
                        error = true;
                    }
                    return { ...item, value, error };
                }
                return item;
            })
        );
    };

    const emailField = formData.find(item => item.field === 'email') ?? null;
    const passwordField = formData.find(item => item.field === 'password') ?? null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { value: email } = emailField ?? { value: null }
        const { value: password } = passwordField ?? { value: null };
        if (!email || !password) return;

        try {
            const authData = await signIn({ email, password });
            setAuthCredentials(authData)
            setAuthError({ error: false, message: "" })
            navigate("/dashboard")
        } catch (error: any) {
            if (error && error.response) {
                setAuthError({ error: true, message: error?.response?.data?.message })
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-20">
            <div className="flex flex-col gap-8">
                <div className='flex w-3/4 flex-col gap-[5px]'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Correo electrónico</span>
                        </div>
                        <label className='flex items-center gap-2 input input-bordered focus-within:outline-none'>
                            <input
                                type={'email'}
                                className="grow"
                                placeholder="juan@gmail.com"
                                value={emailField?.value}
                                onChange={(e) => handleInputChange(e, 'email')}
                            />
                            {!emailField?.error && emailField?.value !== '' && <img src={check} alt="Valid email" />}
                        </label>
                        <div className="label">
                            <span className="label-text-alt text-red-500">
                                {authError?.message.split(".")[0]}
                            </span>
                        </div>
                    </label>
                </div>
                <div className='flex w-3/4 flex-col gap-[5px]'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Contraseña</span>
                        </div>
                        <label className='flex items-center gap-2 input input-bordered focus-within:outline-none'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="grow"
                                placeholder="Escribe tu contraseña"
                                value={passwordField?.value}
                                onChange={(e) => handleInputChange(e, 'password')}
                            />
                            <img
                                src={showPassword ? eye : hiddenEye}
                                className='cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                                alt="Toggle password visibility"
                            />
                        </label>
                        <div className="label">
                            <span className="label-text-alt"></span>
                            <span className="label-text-alt">¿Olvidaste tu contraseña?</span>
                        </div>
                    </label>
                </div>
            </div>
            <button
                type="submit"
                className={`btn text-white w-3/4 ${isFormValid
                    ? 'bg-gradient-to-r from-[#090a0a] to-[#167287]'
                    : 'bg-secondaryGray'
                    }`}
                disabled={!isFormValid}
                onClick={handleSubmit}
            >
                Iniciar sesión
            </button>
        </form>
    )
}

export default LoginForm