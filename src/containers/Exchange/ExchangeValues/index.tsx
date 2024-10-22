import MoneyInputs from '../../../sections/MoneyInputs'

interface ExchangeValuesProps {
    redirectToNewPhase: (phase: number) => void
}

const ExchangeValues = ({ redirectToNewPhase }: ExchangeValuesProps) => {
    const isFormValid = true
    return (
        <>
            <div className='w-full flex flex-col gap-12'>
                <h1 className='font-semibold text-2xl'>
                    ¿Qué deseas intercambiar?
                </h1>
                <h3 className="text-secondary font-semibold">
                    Saldo disponible: $ 900.000,00 CLP
                </h3>
            </div>
            <div className="w-full flex flex-col gap-12">
                <MoneyInputs title={"Monto a intercambiar"} initialMoneyIndex={0} />
                <MoneyInputs title={"Quiero recibir"} initialMoneyIndex={1} />
            </div>
            <div className="w-full flex gap-4">
                <button className="btn w-[15%] border-primary bg-white text-primary hover:bg-white">Atrás</button>
                <button className={`btn text-white w-[15%] ${isFormValid
                    ? 'bg-gradient-to-r from-[#05BCB9] to-[#167287]'
                    : 'bg-secondaryGray'
                    }`} onClick={() => redirectToNewPhase(2)}>Continuar</button>
            </div>
        </>
    )
}

export default ExchangeValues