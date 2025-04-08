import FormInput from "@/components/form/formInput";

export default function Education({register, errors}: any) {
    return (
        <>
            <FormInput label="Degree" type="type" register={register("degree")} error={errors.degree?.message} />
            <FormInput label="Institution" type="text" register={register("institution")} error={errors.institution?.message} />
            <FormInput label="Graduation Year" type="number" register={register("graduation")} error={errors.graduation?.message} />
            <FormInput label="Remark" type="text" register={register("remark")} error={errors.remark?.message} />
        </>
    )
}