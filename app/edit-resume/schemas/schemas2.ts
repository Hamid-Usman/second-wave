import * as yup from "yup"
const Schemas2 = yup.object().shape({
    career_overview: yup.string().required("Career overview is required"),
    skills: yup.string().required("Skills is required"),
})

export default Schemas2