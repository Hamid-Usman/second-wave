"use client"
import FormArea from "@/components/form/formArea";
import FormInput from "@/components/form/formInput";
import { useState } from "react";

export default function Experience({register, errors}: any) {
    {/* 
        const [experiences, setExperiences] = useState<ExperienceProp[]>([
        { jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: "" }
        ]);
    
        // Add new empty experience
        const addExperience = () => {
        setExperiences([...experiences, { jobTitle: "", company: "", startDate: "", endDate: "", responsibilities: "" }]);
        };
    */}
    return (
        <div className="w-full">
            <div className="lg:flex w-full justify-between">
                    <FormInput label="Job Title" register={register("jobTitle")} error={errors.jobTitle?.message} type="text" className="lg:w-[330px]" />
                    <FormInput label="Organization" register={register("organization")} error={errors.organization?.message} type="text" className="lg:w-[330px]" />
            </div>
            <div>
                <FormInput label="Starting Date" register={register("startingDate")} error={errors.startingDate?.message} type="date" className="w-fit" />
                <FormInput label="Ending Date" register={register("endingDate")} error={errors.endingDate?.message} type="date" className="w-fit" />
            </div>
            <FormArea label="Achievements & Responsibilities" register={register("ahcievements")} error={errors.achievements?.message} placeholder="Enter iunput" />
        </div>
    )
}