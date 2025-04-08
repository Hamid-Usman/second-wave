import FormArea from "@/components/form/formArea";
import MultipleInput from "@/components/form/manyInput";

export default function Expertise({register, errors}: any) {
    return (
        <>
            <FormArea label="Career Overview" placeholder="" register={register("career_overview")} error={errors.career_overview?.message}/>
            <MultipleInput register={register('skills')} error={errors.skills?.message}/>
        </>
    )
}