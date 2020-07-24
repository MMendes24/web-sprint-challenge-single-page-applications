import React from 'react'

export default function Pizza(props) {
    const { values, 
            submit, 
            inputChange, 
            checkboxChange, 
            errors,
         } = props

      const onSubmit = e => {
          e.preventDefault()
          submit()
      }
      
      const onCheckboxChange = e => {
          const { name, checked } = e.target
          checkboxChange(name, checked)
      }
      
      const onInputChange = e => {
          const { name, value } = e.target
          inputChange(name, value)
      }

    return (
        <form>
          <div className='errors'>
            <p id="para-one">{errors.username}</p>
        </div>
            <div className='form-container' onSubmit={onSubmit}>
        <h2>Build your own pizza!</h2>
        <label>Name:&nbsp;
            <input 
            value={values.username}
            onChange={onInputChange}
            placeholder='your name here'
            name='username'
            type='text'
            />
        </label>
        <label>Pizza Size:&nbsp;
        <select name="size" value={values.size} onChange={onInputChange}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='x-large'>X-Large</option>
        </select>
        </label>
            <h3>Toppings</h3>
            <label>Pepperoni&nbsp;
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.toppings.pepperoni === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Jalapenos&nbsp;
          <input
            type="checkbox"
            name='jalapenos'
            checked={values.toppings.jalapenos === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Black Olives&nbsp;
          <input
            type="checkbox"
            name='blackOlives'
            checked={values.toppings.blackOlives === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Bacon&nbsp;
          <input
            type="checkbox"
            name='bacon'
            checked={values.toppings.bacon === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Special Instructions?&nbsp;
        <input 
            placeholder='Do you have any additional requests?'
            name='instructions'
            type='text'
            value={values.instructions}
            onChange={onInputChange}
            />
        </label>
        <button id="addButton">Add</button>
        </div>
    </form>
    )
}