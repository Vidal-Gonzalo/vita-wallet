import { useUser } from "../../context/UserContext"
import { getTransactions } from "../../lib/utils"

//Figma design

// const actions = [
//     { title: "Recibiste", amount: "$2.000,00 CLP", category: "deposit" },
//     { title: "Recargaste", amount: "$2.000,00 CLP", category: "recharge" },
//     { title: "Transferiste", amount: "$2.000,00 CLP", category: "transfer" },
//     { title: "Recibiste", amount: "$2.000,00 CLP", category: "deposit" },
//     { title: "Intercambiaste", amount: "$2.000,00 CLP", category: "exchange" },
// ]

const TransactionsRecord = () => {
    const { userData } = useUser()
    const { transactions } = userData ?? {}
    const formattedTransactions = getTransactions(transactions?.data)

    const getColorAmount = (transaction: any) => {
        if (transaction.category === "deposit" || transaction.category === "recharge") {
            return <p className="text-secondary font-semibold">+ {transaction.amount}</p>
        }
        if (transaction.category === "transfer") {
            return <p className="text-error font-semibold">- {transaction.amount}</p>
        }
        if (transaction.category === "exchange") {
            return <p className="text-black font-semibold">{transaction.amount}</p>
        }
    }

    return (
        <div className='w-full flex flex-col gap-8'>
            <h2 className='text-2xl'>Historial</h2>
            <div className='flex flex-col gap-4'>
                {formattedTransactions ? formattedTransactions.map((transaction: any, index: number) => (
                    <div key={index} className="flex justify-between border-b border-b-secondaryGray pb-5">
                        <p className="font-medium">{transaction.title}</p>
                        {getColorAmount(transaction)}
                    </div>
                )) :
                    <div className="flex  pb-5">
                        <p className="font-medium">No hay transacciones por el momento</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default TransactionsRecord