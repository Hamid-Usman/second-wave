import * as yup from "yup"

const Schemas5 = yup.object().shape({
    reference: yup.string().required("Field is required"),
    relationship: yup.string().required("Field is required"),
    email: yup.string().email("please input a valid email").required("Field is required"),
    phone: yup.number().required("Field is required")
})

export default Schemas5