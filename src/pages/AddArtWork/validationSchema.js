import * as yup from "yup";

export const ArtWork = yup.object().shape({
  ArtistId: yup.number().required(),
  WorkName: yup.string().required(),
  Size: yup.string().required(),
  Material: yup.string().required(),
  Price: yup.number().required(),
  About: yup.string().required(),
  Photos: yup.mixed().required(),
});
