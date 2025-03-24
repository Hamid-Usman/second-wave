
interface InputProp {
    label: string;
    placeholder: string;
    register?: any;
    error: string
}
export default function FormArea({label, placeholder, register, error}: InputProp) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <textarea {...register} placeholder={placeholder} className={`w-full h-24 focus:outline-none ${error ? 'text-red-400 focus:border-red-400' : 'border-grey'} focus:border-accent focus:shadow-xl hover:shadow-xl p-2 border-2 rounded-lg`}></textarea>
            {error && <p className="text-red-400">{error}</p>}
        </div>
    )
}