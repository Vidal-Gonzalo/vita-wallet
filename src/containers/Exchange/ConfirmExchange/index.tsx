import { useState } from "react"
import { Modal } from "../../../components"
import { useNavigate } from "react-router-dom";

interface ConfirmExchangeProps {
    redirectToNewPhase: (phase: number) => void
}

const ConfirmExchange = ({ redirectToNewPhase }: ConfirmExchangeProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()

    const openModal = () => setModalOpen(true);

    const closeModal = () => {
        setModalOpen(false)
        navigate("/dashboard")
    };

    return (
        <>
            <div className="w-full h-full flex gap-4">
                <div className="flex h-full items-top mt-1">
                    <img className="cursor-pointer" src={'/icons/leftArrow.png'} width={28} height={28} onClick={() => redirectToNewPhase(1)} />
                </div>
                <div className="w-full flex flex-col gap-60 items-center justify-center">
                    <div className="w-full flex flex-col gap-16 items-center justify-center">
                        <div className='w-full flex flex-col gap-12'>
                            <div className="flex w-full gap-4">
                                <h1 className='font-semibold text-2xl'>
                                    Resumen de transacción
                                </h1>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-12">
                            <div className="w-1/2 h-32 bg-white rounded-md p-6 flex flex-col justify-center items-center gap-2">
                                <div className="flex justify-between w-full">
                                    <p>Monto a intercambiar</p>
                                    <p>$5.000.0000</p>
                                </div>
                                <div className="flex justify-between w-full">
                                    <p>Monto a intercambiar</p>
                                    <p>$5.000.0000</p>
                                </div>
                                <div className="flex justify-between w-full">
                                    <p>Monto a intercambiar</p>
                                    <p>$5.000.0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-4">
                        <button
                            className="btn w-[15%] border-primary bg-white text-primary hover:bg-white"
                            onClick={() => redirectToNewPhase(1)}
                        >
                            Atrás
                        </button>
                        <button
                            className={`btn text-white w-[15%] bg-gradient-to-r from-[#05BCB9] to-[#167287]`}
                            onClick={openModal}
                        >
                            Intercambiar
                        </button>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            imageSrc="/illustrations/banknote.png"
                            title="¡Intercambio exitoso!"
                            description={`Ya cuentas con los BTC en tu saldo.`}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmExchange