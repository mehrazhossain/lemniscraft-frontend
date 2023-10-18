import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().min(3).max(32).required("First name is required"),
  lastName: yup.string().min(3).max(32).required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  contactNo: yup
    .string()
    .matches(/^[0-9]{11}$/, "Provide valid number")
    .required("Phone number is required"),
  address: yup.string().min(3).max(50).required("Address is required"),
  profileImg: yup.string().url("Invalid URL").required("Link is required"),
});
