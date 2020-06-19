import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom'
import Form from './Components/Form'
import formSchema from '../src/validation/formSchema'
import * as Yup from 'yup'
import axios from 'axios'


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

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users?page=2', newPizza)
    .then(response => {
      console.log(response)
    })
    .finally(() => {
      setFormValues(initialFormValues)
      }
    )
  }

  const onInputChange = evt => {
    const {name, value} = evt.target

    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
  
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
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: Object.keys(formValues.toppings)
      .filter(toppingName => (formValues.toppings[toppingName] === true)),
      instructions: formValues.instructions.trim(),
    }
    postNewPizza(newPizza)
  }

  useEffect(()=> {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div id="appBody">
      <div  >
      <Route exact path ='/'>
        <h1>Lambda Eats</h1>
        <p>Your favorite food, delivered while coding</p>
        <button><Link to={`./Pizza`}>Pizza?</Link></button>
      </Route>
      
      <Route path ='/Pizza'>
        <Form 
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      </div>
    </div>
  );
};
export default App;
