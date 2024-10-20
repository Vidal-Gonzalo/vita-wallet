import React, { useState } from 'react'
import hiddenEye from '../../assets/icons/hiddenEye.svg'
import check from '../../assets/icons/check.svg'
import eye from '../../assets/icons/eye.svg'
import { useNavigate } from 'react-router-dom'

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

    const emailField = formData.find(item => item.field === 'email');
    const passwordField = formData.find(item => item.field === 'password');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(emailField, passwordField);
        navigate("/dashboard")
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
                    ? 'bg-gradient-to-r from-[#05BCB9] to-[#167287]'
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