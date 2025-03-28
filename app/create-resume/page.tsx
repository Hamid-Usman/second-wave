"use client"
import "../globals.css"
import Button from "../UI/button"
import PersonalInfos from "./sections/personal-Infos"
import { FormProvider, useForm } from "react-hook-form"
import Schemas1 from "./schemas/schema1"
import Schemas2 from "./schemas/schemas2"
import { yupResolver } from "@hookform/resolvers/yup"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Expertise from "./sections/expertise"
import FormHeader from "@/components/header/resumeHeader"

const schemas: Array<any> =[Schemas1, Schemas2]
export default function Load(){
    const [page, setPage] = useState(2)

    const methods = useForm({
        resolver: yupResolver(schemas[page - 1]),
        mode: "onChange",
    });

    
    const {register, handleSubmit, formState: {errors}} = methods;
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const slideRight = {
        initial: {
            opacity: 0,
            x: "50vw",
        },
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: "50vw",
        },
    };
    
    const slideLeft = {
        initial: {
            opacity: 0,
            x: "-50vw",
        },
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: "-50vw",
        },
    };
    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 1.3,
    };
    return (
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-40">
            <AnimatePresence mode="wait">
                <motion.div
                    key={page}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={slideLeft}
                    transition={pageTransition}
                    className="flex flex-col text-center lg:text-start gap-4 sm:w-[550px]">
                        {page === 1 && <FormHeader heading="Personal Info" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo, natus suscipit assumenda dolor, nemo fugiat excepturi, adipisci vitae omnis deleniti magni error eius accusantium. Architecto, ipsam? Perspiciatis, amet cum?" />}
                        {page === 2 && <FormHeader heading="Key skills" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo, natus suscipit assumenda dolor, nemo fugiat excepturi, adipisci vitae omnis deleniti magni error eius accusantium. Architecto, ipsam? Perspiciatis, amet cum?" />}
                
                </motion.div>
            </AnimatePresence>
            <FormProvider {...methods}>
                <AnimatePresence mode="wait">
                    <motion.form
                        key={page}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={slideRight}
                        transition={pageTransition}
                        onSubmit={handleSubmit(onSubmit)} className="w-full px-4 py-6 lg:p-8 border-2 flex flex-col gap-3 border-grey rounded-xl"
                        >
                            {page === 1 && <PersonalInfos register={register} errors={errors} />}
                            {page === 2 && <Expertise register={register} errors={errors} />}
                            

                            {page === 2 && <Button className="border-solid hover:bg-primary">Next</Button>}
                            {page < 2 && <Button onClick={() => handleSubmit(() => setPage(page + 1))()} className="bg-primary" >Next</Button>}
                            {page > 1 && <Button className="bg-white" onClick={() => setPage(page - 1)}>Previous</Button>}
                    </motion.form>
                </AnimatePresence>
            </FormProvider>
        </div>
    )
}

