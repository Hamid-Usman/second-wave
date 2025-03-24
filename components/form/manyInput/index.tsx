import { useState } from "react";

interface MultipleInputProps {
    register: any;
    error?: string;
}

export default function MultipleInput({ register, error }: MultipleInputProps) {
    const [values, setValues] = useState<string[]>([
        'Automation',
        'Software Engineering',
        'Linux',
        'Cloud Computing'
    ]);


    const handleAddValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
        event.preventDefault();
        const newValue = event.currentTarget.value.trim();
        if (newValue && !values.includes(newValue)) {
            setValues((prevValues) => [...prevValues, newValue])
            event.currentTarget.value = "";
        }
        }
    };

    const removeValue = (index: number) => {
        setValues((prevValues) => prevValues.filter((_, i) => i !== index));
    };

    return (
        <div className="">
            <label className="text-[16px] font-medium">
                What are your core values <span className="text-red-500">*</span>
            </label>

            <div className="w-[280px] sm:w-[348px]">
                <input
                type="text"
                placeholder="Enter your core values, press enter to add"
                onKeyDown={handleAddValue}
                className={`w-full text-[13px]  px-2 py-3 md:py-2 ${error ? 'text-red-400 focus:border-red-400' : 'border-grey'} border-2 focus:outline-none focus:border-accent transition duration-300 ease-in-out rounded-lg`}
                {...register}
                />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}


            {/* Display Added Values */}
            <div className="flex max-w-[340px] flex-wrap gap-2 mt-2">
                {values.map((value, index) => (
                <div
                    key={index}
                    className="bg-tertiary text-primary w-fit p-[10px] flex gap-[10px] items-center rounded-md"
                >
                    <span className="font-semibold">{value}</span>
                    <button
                    onClick={() => removeValue(index)}
                    className="text-black font-bold"
                    >
                    </button>
                </div>
                ))}
            </div>
        </div>
    );
}
