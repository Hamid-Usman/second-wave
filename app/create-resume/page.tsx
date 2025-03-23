import FormInput from "@/components/form/formInput"
import "../globals.css"
import Button from "../UI/button"
import PersonalInfos from "./sections/personal-Infos"
export default function Load(){
    return (
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-40">
            <div className="flex flex-col gap-4 w-[550px]">
                <h1 className="text-3xl font-bold text-accent">Get Started Creating Your Resume</h1>
                <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate aspernatur dolor error autem nam? Eius tempore saepe amet ratione corrupti, aut iure architecto?</p>
            </div>
            <form className="w-full px-4 py-6 lg:p-8 border-2 flex flex-col gap-3 border-grey rounded-xl">
                <PersonalInfos />

                <Button className="border-solid rounded-md hover:bg-primary">Next</Button>
            </form>
        </div>
    )
}

