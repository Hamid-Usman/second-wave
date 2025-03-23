interface InputProp {
    label: string;
    type: string;
    className?: string
}
export default function FormInput({label, type, className}: InputProp) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-accent font-bold">{label}</label>
            <input type={type} className={`px-2 py-3 md:py-2 focus:outline-none focus:shadow-xl hover:shadow-xl shadow-dark border-grey focus:border-black border-2 transition duration-200 ease-in-out rounded-lg ${className}`} />
        </div>
    )
}