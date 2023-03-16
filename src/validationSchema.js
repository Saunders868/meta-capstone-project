import * as Yup from "yup";

export const firstValidationSchema = Yup.object({
  date: Yup.string().required("Please select a date...!"),
  time: Yup.string().required("Please select a time...!"),
  diners: Yup.number().required("Please select a number of diners...!"),
  ocassion: Yup.string(),
});

export const secondValidationSchema = Yup.object({
  name: Yup.string().required("What should we call you...?"),
  email: Yup.string()
    .email("Invalid email address...!")
    .required("You must provide an email address...!"),
});
