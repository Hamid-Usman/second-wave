import * as yup from "yup"

const Schemas4 = yup.object().shape({
    degree: yup.string().required("Field is required"),
    institution: yup.string().required("Field is required"),
    graduation: yup.string().required("Field is required"),
    remark: yup.string().required("Field is required")
})

export default Schemas4