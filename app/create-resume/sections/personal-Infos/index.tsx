import FormInput from "@/components/form/formInput";

export default function PersonalInfos({register, errors}: any) {
    return (
        <>
            <FormInput label="First Name" register={register("first_name")} error={errors.first_name?.message} type="text" />
            <FormInput label="Last Name" register={register("last_name")} error={errors.last_name?.message} type="text" />
            <FormInput label="Address" register={register("address")} error={errors.address?.message} type="text" />
            <FormInput label="State" register={register("state")} error={errors.state?.message} type="text" />
            <FormInput label="Country" register={register("country")} error={errors.country?.message} type="text" />
            <FormInput label="Phone Number" register={register("phone_number")} error={errors.phone_number?.message} type="number" />
            <FormInput label="Email" register={register("email")} error={errors.email?.message} type="email" />
        </>
    )
}