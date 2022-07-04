import * as yup from "yup";

export const schema = yup.object().shape({
  petName: yup.string().required("Pet name is required"),
  petOwner: yup.string().required("Pet owner is required"),
  ownerEmail: yup
    .string()
    .email("Email is not valid")
    .required("Email is required"),
  petDischargeDate: yup.string().required("Pet discharge date is required"),
  petSymptoms: yup.string().required("Pet symptoms is required"),
});
