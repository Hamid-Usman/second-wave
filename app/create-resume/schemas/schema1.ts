import * as yup from "yup"
const Schemas1 = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    address: yup.string().required("Address is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
    phone_number: yup.string().required("Phone Number is required"),
    email: yup.string().required("Email is required"),
})

export default Schemas1