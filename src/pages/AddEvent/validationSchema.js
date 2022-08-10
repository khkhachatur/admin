import * as yup from "yup";

export const EventSchema = yup.object().shape({
  Type: yup.string().required(),
  Location: yup.string().required(),
  Title: yup.string().required(),
  Time: yup.string().required(),
  FundedBy: yup.string().required(),
  About: yup.string().required(),
  Photo: yup.mixed().required(),
});
