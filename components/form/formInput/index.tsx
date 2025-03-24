interface InputProp {
    label: string;
    register?: any;
    error?: string;
    type: string;
    className?: string
}
export default function FormInput({label, register, error, type, className}: InputProp) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-accent font-bold">{label}</label>
            <input type={type} {...register} className={`${error ? 'text-red-400 focus:border-red-400' : 'border-grey'} px-2 py-3 md:py-2 focus:outline-none focus:shadow-xl hover:shadow-xl shadow-dark  focus:border-black border-2 transition duration-200 ease-in-out rounded-lg ${className}`} />
            {error && <p className="text-red-400">{error}</p>}
        </div>

    )
}