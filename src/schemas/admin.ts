import * as yup from "yup";

export const adminSchema = yup.object().shape({
  firstName: yup.string().min(3).max(32).required("First name is required"),
  lastName: yup.string().min(3).max(32).required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(32).required("Password is required"),
  role: yup.string().required("Role is required"),
  contactNo: yup
    .string()
    .matches(/^[0-9]{11}$/, "Provide valid number")
    .required("Phone number is required"),
  address: yup.string().min(3).max(50).required("Address is required"),
  profileImg: yup.string().url("Invalid URL").required("Link is required"),
});

export const UpdateUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .max(32)
    .required("First name is required")
    .optional(),
  lastName: yup
    .string()
    .min(3)
    .max(32)
    .required("Last name is required")
    .optional(),
  email: yup.string().email().required("Email is required").optional(),
  password: yup
    .string()
    .min(6)
    .max(32)
    .required("Password is required")
    .optional(),
  role: yup.string().required("Role is required").optional(),
  contactNo: yup
    .string()
    .matches(/^[0-9]{11}$/, "Provide valid number")
    .required("Phone number is required")
    .optional(),
  address: yup
    .string()
    .min(3)
    .max(50)
    .required("Address is required")
    .optional(),
  profileImg: yup
    .string()
    .url("Invalid URL")
    .optional(),
});
