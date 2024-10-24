
type Props = {
    size?: "lg" | "md" | "sm"
}

const Loader = ({ size = "md" }: Props) => {
    return (
        <div
            className={`inline-block ${size === "lg" ? "h-8 w-8" : size === "md" ? "h-6 w-6" : "h-4 w-4"} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status"
        >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
            </span>
        </div>
    )
}

export default Loader
