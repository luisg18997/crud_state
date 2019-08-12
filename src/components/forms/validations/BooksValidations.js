import * as Yup from "yup";

const validations = (value) => {
  let validation = {}
  if(value === true) {
    validation.library_ubication = Yup.string()
    .required('is required')
    .test('selectvalue', 'Select a option', (value) => {return value !=='0'})
  } else {
    validation.loan = Yup.object().shape({
      responsable: Yup.string()
      .required('is required'),
      card_id: Yup.string()
      .required('is required'),
      withdrawal_date: Yup.date()
      .required('is required'),
      return_date: Yup.date()
      .required('is required')
    })
  }

  const validationFrom = Yup.object().shape({
    name: Yup.string()
    .required('is required'),
    publication_date: Yup.date()
    .required('is required'),
    editorial: Yup.string()
    .required('is required'),
    resumen: Yup.string()
    .required('is required'),
    book_genre: Yup.string()
    .required('is required'),
    ubication: Yup.object().shape({
      ...validation
    })
  });

  return validationFrom
}


export default validations
