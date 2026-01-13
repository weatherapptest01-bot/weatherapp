import *as yup from 'yup'
const Validation = yup.object().shape({
    name:yup.string().required("Name is required"),
    email:yup.string().email("Invalid email").required("Email is required"),
    phone:yup.string().matches("Phone number must be 10 digits").required("Phone number is required"),
    password:yup.string().min(6,"Password must be at least 6 characters").required("Password is required"),
    address:yup.string().required("Address is required")
})
export default Validation;  