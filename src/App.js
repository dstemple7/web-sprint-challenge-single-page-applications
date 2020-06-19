import React, {useState, useEffect} from "react";
import Form from './Components/Form'
import { initial } from "cypress/types/lodash";

const initialFormValues = {
  size: 'Large',
  sauce: 'Red',
  toppings: {
    Pepperoni: false,
    Mushroom: false,
    Garlic: false,
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

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Your favorite food, delivered while coding</p>
      <button>Pizza?</button>
      <Form />
    </>
  );
};
export default App;
