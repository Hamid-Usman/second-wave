import * as yup from"yup"

const Schemas3 = yup.object().shape({
    jobTitle: yup.string(),
    company: yup.string(),
    startDate: yup.date(),
    endDate: yup.string(),
    achievements: yup.string(),
})

export default Schemas3