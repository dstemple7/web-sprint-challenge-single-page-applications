import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Must be at least 2 characters long.")
    .required("Must include a name."),
})

export default formSchema
