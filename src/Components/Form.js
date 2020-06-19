import React from 'react'

export default function Form(props){
  const {
    values,
    onSubmit,
    onInputChange,
    onCheckboxChange,
    disabled,
    errors,
    } = props

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Order a pizza</h2>
        
        <button class="submitBtn" disabled={disabled}>Add to Order</button>
        <h4 class="nameInput">What's do people call you?</h4>
        <label>&nbsp;
        <input
          value={values.name}
          onChange={onInputChange}
          name='name'
          type='text'
        />
      </label>

        <div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>
      </div>

    <div>
      <h4>Build Your Own Pizza</h4>

      <label>Choice of Size &nbsp;
        <select
          onChange={onInputChange}
          value={values.size}
          name='size'        
        >
          <option value=''>- Select a Size -</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
      </label>

      <h5>Choice of Sauce</h5>
      <label>Red
        <input
          checked={values.sauce === 'Red'}
          value='Red'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>
      
      &nbsp;
      &nbsp;

      <label>White
        <input
          checked={values.sauce === 'White'}
          value='White'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>

      &nbsp;
      &nbsp;

      <label>No Sauce 
        <input
          checked={values.sauce === 'No Sauce'}
          value='No Sauce'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>

      &nbsp;
      &nbsp;

      <h4>Add Toppings</h4>
        
        <label>Pepperoni
          <input
            name='Pepperoni'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Pepperoni}
          />
        </label>

        &nbsp;
        &nbsp;

        <label>Mushrooms
          <input
            name='Mushrooms'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Mushrooms}
          />
        </label>

        &nbsp;
        &nbsp;

        <label>Garlic
          <input
            name='Garlic'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Garlic}
          />
        </label>

        &nbsp;
        &nbsp;

        <label>Anchovies
          <input
            name='Anchovies'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Anchovies}
          />
        </label>

        &nbsp;
        &nbsp;

      <br></br>

      <h4>Customize your Pie</h4>
      <label>Special Instructions &nbsp;
        <input
          value={values.instructions}
          onChange={onInputChange}
          name='instructions'
          type='text'
        />
      </label>

    </div>
    
    <br></br>
    <br></br>

    <a href='/'>Back Home</a>
    
    </form>
    
  )
}