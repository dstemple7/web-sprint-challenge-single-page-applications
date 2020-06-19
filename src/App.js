import React, {useState, useEffect} from "react";
import Form from './Components/Form'
import formSchema from '../src/validation/formSchema'
import * as Yup from 'yup'

const initialFormValues = {
  name: '',
  size: 'Large',
  sauce: 'Red',
  toppings: {
    Pepperoni: false,
    Mushroom: false,
    Garlic: false,
    Anchovies: false,
  },
  instructions: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
}

const initalDisabled = true

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initalDisabled)

  const onInputChange = evt => {
    const {name, value} = evt.target
  
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    
    const {name, checked} = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    
    evt.preventDefault()

    const newPizza = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: Object.keys(formValues.toppings)
      .filter(toppingName => (formValues.toppings[toppingName] === true))
    }
  }

  useEffect(()=> {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      
      <h1>Lambda Eats</h1>
      <p>Your favorite food, delivered while coding</p>
      <button>Pizza?</button>
      
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />

    </div>
  );
};
export default App;
