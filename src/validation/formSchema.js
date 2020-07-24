import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is Required"),
    size: yup
    .string()
    .min(0, "")
    .required("is required"),
    instructions: yup
    .string()
    .min(0, "")
    .required("is required")
})


export default formSchema