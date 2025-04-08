"use client"
import "../globals.css";
import Button from "../UI/button";
import PersonalInfos from "./sections/personal-Infos";
import { FormProvider, useForm } from "react-hook-form";
import Schemas1 from "./schemas/schema1";
import Schemas2 from "./schemas/schemas2";
import Schemas3 from "./schemas/schemas3";
import Schemas4 from "./schemas/schemas4";
import Schemas5 from "./schemas/shemas5";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Expertise from "./sections/expertise";
import FormHeader from "@/components/header/resumeHeader";
import Experience from "./sections/experience";
import Education from "./sections/education";
import Reference from "./sections/references";

const schemas: Array<any> =[Schemas1, Schemas2, Schemas3, Schemas4, Schemas5]
export default function Load(){
    const [page, setPage] = useState(1)
    const selectedSchema = useMemo(() => schemas[page - 1], [page]);

    const methods = useForm({
        resolver: yupResolver(selectedSchema),
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
        duration: 0.8,
    };

    const formHeader = useMemo(() => {
        if (page === 1) return <FormHeader heading="Personal Info" subHeading="Enter your details" />;
        if (page === 2) return <FormHeader heading="Key skills" subHeading="Highlight your expertise" />;
        if (page === 3) return <FormHeader heading="Experience" subHeading="Add your job history" />;
    }, [page]);
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
                        {formHeader}
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
                            {page === 3 && <Experience register={register} errors={errors} />}
                            {page === 4 && <Education register={register} errors={errors} /> }
                            {page === 5 && <Reference register={register} errors={errors} /> }

                            {page === 5 && <Button onClick={() => handleSubmit((onSubmit))}  className="border-solid hover:bg-primary">Submit</Button>}
                            <Button onClick={() => handleSubmit(() => setPage(page + 1))()} className="bg-primary" >Next</Button>
                            {page > 1 && <Button className="bg-white" onClick={() => setPage(page - 1)}>Previous</Button>}
                    </motion.form>
                </AnimatePresence>
            </FormProvider>
        </div>
    )
}

