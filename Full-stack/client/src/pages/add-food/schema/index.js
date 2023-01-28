import * as Yup from "yup";

export const FoodSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(20, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(10, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
    icon: Yup.string()
    .min(1, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  imgUrl: Yup.string().url("Invalid url").required("Required"),
});
