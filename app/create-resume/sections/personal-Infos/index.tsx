import FormInput from "@/components/form/formInput";

export default function PersonalInfos() {
    return (
        <>
            <FormInput label="First Name" type="text" />
            <FormInput label="Last Name" type="text" />
            <FormInput label="Address" type="text" />
            <FormInput label="State" type="text" />
            <FormInput label="Country" type="text" />
            <FormInput label="Phone Number" type="number" />
            <FormInput label="Email" type="email" />
        </>
    )
}