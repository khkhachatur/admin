import * as yup from "yup";

export const ArtistSchema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  Position: yup.string().required(),
  Country: yup.string().required(),
  Biography: yup.string().required(),
  Educations: yup.string().required(),
  Exhibitions: yup.string().required(),
  Articles: yup.string().required(),
  PhoneNumber: yup.number().required(),
  Avatar: yup.mixed().required(),
});
