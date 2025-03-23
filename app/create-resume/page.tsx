"use client"
import FormInput from "@/components/form/formInput"
import "../globals.css"
import Button from "../UI/button"
import PersonalInfos from "./sections/personal-Infos"
import { FormProvider, useForm } from "react-hook-form"
import Schemas1 from "./schemas/schema1"
import { yupResolver } from "@hookform/resolvers/yup"


export default function Load(){
    

    const methods = useForm({
        resolver: yupResolver(Schemas1),
        mode: "onChange",
    });

    
    const {register, handleSubmit, formState: {errors}} = methods;
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-40">
            <div className="flex flex-col gap-4 w-[550px]">
                <h1 className="text-3xl font-bold text-accent">Get Started Creating Your Resume</h1>
                <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate aspernatur dolor error autem nam? Eius tempore saepe amet ratione corrupti, aut iure architecto?</p>
            </div>
            <FormProvider {...methods}>
                
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 py-6 lg:p-8 border-2 flex flex-col gap-3 border-grey rounded-xl">
                <PersonalInfos register={register} errors={errors}/>
                <Button className="border-solid rounded-md hover:bg-primary">Next</Button>
            </form>

            </FormProvider>
        </div>
    )
}

