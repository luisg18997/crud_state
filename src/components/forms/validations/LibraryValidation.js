import * as Yup from "yup";

const validationFrom = Yup.object().shape({
  author: Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Z0-9.,`-\s]*$/, "only characters and number allowed")
    .required('is required'),
  })
});

export default validationFrom
