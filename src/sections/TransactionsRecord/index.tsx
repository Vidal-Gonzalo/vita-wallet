const actions = [
    { title: "Recibiste", amount: "$2.000,00 CLP", action: "receive" },
    { title: "Recargaste", amount: "$2.000,00 CLP", action: "recharge" },
    { title: "Transferiste", amount: "$2.000,00 CLP", action: "transfer" },
    { title: "Recibiste", amount: "$2.000,00 CLP", action: "receive" },
    { title: "Intercambiaste", amount: "$2.000,00 CLP", action: "exchange" },
]

const TransactionsRecord = () => {
    const getColorAmount = (action: any) => {
        if (action.action === "receive" || action.action === "recharge") {
            return <p className="text-secondary font-semibold">+ {action.amount}</p>
        }
        if (action.action === "transfer") {
            return <p className="text-error font-semibold">- {action.amount}</p>
        }
        if (action.action === "exchange") {
            return <p className="text-black font-semibold">{action.amount}</p>
        }
    }

    return (
        <div className='w-full flex flex-col gap-8'>
            <h2 className='text-2xl'>Historial</h2>
            <div className='flex flex-col gap-4'>
                {actions.map((action) => (
                    <div className="flex justify-between border-b border-b-secondaryGray pb-5">
                        <p className="font-medium">{action.title}</p>
                        {getColorAmount(action)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TransactionsRecord