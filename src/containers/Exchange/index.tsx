import { Suspense, useState } from "react";
import ExchangeValues from "./ExchangeValues";
import ConfirmExchange from "./ConfirmExchange";

const Exchange = () => {
    const [phase, setPhase] = useState<number>(1)
    const redirectToNewPhase = (phase: number) => {
        setPhase(phase)
    }
    const phaseComponents: { [key: number]: JSX.Element } = {
        1: (
            <Suspense fallback={"Cargando..."}>
                <ExchangeValues redirectToNewPhase={redirectToNewPhase} />
            </Suspense>
        ),
        2: (
            <Suspense fallback={"Cargando..."}>
                <ConfirmExchange redirectToNewPhase={redirectToNewPhase} />
            </Suspense>
        ),
    }

    return (
        <div className='w-full flex flex-col gap-16 items-center justify-center'>
            {phaseComponents[phase]}
        </div>
    )
}

export default Exchange