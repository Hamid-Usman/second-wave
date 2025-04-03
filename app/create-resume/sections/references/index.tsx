import FormInput from "@/components/form/formInput";

export default function Reference({register, errors}: any) {
    return (
        <>
            <FormInput label="Reference Name" type="text" register={register("reference")} error={errors.reference?.message} />
            <FormInput label="Relationship" type="text" register={register("relationship")} error={errors.relationship?.message} />
            <FormInput label="Email" type="email" register={register("email")} error={errors.email?.message} />
            <FormInput label="Phone Number" type="number" register={register("phone")} error={errors.phone?.message} />
        </>
    )
}