import * as yup from "yup";

export const createServiceSchema = yup.object().shape({
  title: yup.string().min(10).max(220).required("Title is required"),
  description: yup
    .string()
    .min(10)
    .max(400)
    .required("Description is required"),
  image: yup.string().url("Invalid URL").required("Link is required"),
  price: yup
    .number()
    .min(0, "Price must be greater than or equal to 0")
    .required("Price is required"),
  availability: yup.string().required("Availability is required"),
});

export const updateServiceSchema = yup.object().shape({
  title: yup.string().min(10).max(220).required("Title is required").optional(),
  description: yup
    .string()
    .min(10)
    .max(400)
    .required("Description is required")
    .optional(),
  image: yup
    .string()
    .url("Invalid URL")
    .required("Link is required")
    .optional(),
  price: yup
    .number()
    .min(0, "Price must be greater than or equal to 0")
    .required("Price is required")
    .optional(),
  availability: yup.string().required("Availability is required").optional(),
});
