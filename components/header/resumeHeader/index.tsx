import { AnimatePresence, motion} from "framer-motion"

interface HeaderProp {
    heading: string;
    subHeading: string;
}

export default function FormHeader({heading, subHeading}: HeaderProp) {
    return (
        <>
            <h1 className="text-3xl font-bold text-accent">{heading}</h1>
            <p className="text-grey">{subHeading}</p>
        </>
    )
}