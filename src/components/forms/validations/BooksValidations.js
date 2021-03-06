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
      .matches(/^[a-zA-Z0-9.,`-\s]*$/, "only characters and number allowed")
      .required('is required'),
      card_id: Yup.string()
      .matches(/^[0-9]*$/, "only number allowed")
      .required('is required'),
      withdrawal_date: Yup.date()
      .max(new Date(), 'later dates to the current are not allowed')
      .required('is required'),
      return_date: Yup.date()
      .when('withdrawal_date',(value, schema) => {
        if(value!=='') {
          return schema.min(value,`dates previous to the ${value} is not permitted`)
        }
      })
      .required('is required')
    })
  }
  const validationFrom = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Z0-9.,`-\s]*$/, "only characters and number allowed")
    .required('is required'),
    publication_date: Yup.date()
    .max(new Date(), 'later dates to the current are not allowed')
    .required('is required'),
    editorial: Yup.string()
    .matches(/^[a-zA-Z0-9.,`-\s]*$/, "only characters and number allowed")
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
