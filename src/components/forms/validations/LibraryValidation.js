import * as Yup from "yup";

const validationFrom = Yup.object().shape({
  author: Yup.object().shape({
    name: Yup.string()
    .required('is required'),
  })
});

export default validationFrom
