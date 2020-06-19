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
        
        <button disabled={disabled}>Place order</button>

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
      <label>Red &nbsp;
        <input
          checked={values.sauce === 'Red'}
          value='Red'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>

      <label>White &nbsp;
        <input
          checked={values.sauce === 'White'}
          value='White'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>

      <label>No Sauce &nbsp;
        <input
          checked={values.sauce === 'No Sauce'}
          value='No Sauce'
          onChange={onInputChange}
          name='sauce'
          type='radio'
        />
      </label>

      <h4>Add Toppings</h4>
        
        <label>Pepperoni
          <input
            name='Pepperoni'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Pepperoni}
          />
        </label>

        <label>Mushrooms
          <input
            name='Mushrooms'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Mushrooms}
          />
        </label>

        <label>Garlic
          <input
            name='Garlic'
            type='checkbox'
            onChange={onCheckboxChange}
            checked={values.toppings.Garlic}
          />
        </label>

      <label>Special Instructions &nbsp;
        <input
          value={values.instructions}
          onChange={onInputChange}
          name='instructions'
          type='text'
        />
      </label>

    </div>

    </form>
  )
}