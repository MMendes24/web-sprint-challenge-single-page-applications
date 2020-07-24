import React from 'react'

export default function Pizza(props) {

    return (
        <form>
            <div className='form-container'>
        <h2>Build your own pizza!</h2>
        <label>Name:&nbsp;
            <input 
            placeholder='your name here'
            name='name'
            type='text'
            />
        </label>
        <label>Pizza Size:&nbsp;
        <select>
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
          />
        </label>
        <label>Jalapenos&nbsp;
          <input
            type="checkbox"
            name='jalapenos'
          />
        </label>
        <label>Black Olives&nbsp;
          <input
            type="checkbox"
            name='blackOlives'
          />
        </label>
        <label>Bacon&nbsp;
          <input
            type="checkbox"
            name='bacon'
          />
        </label>
        <label>Special Instructions?&nbsp;
        <input 
            placeholder='Do you have any additional requests?'
            name='instructions'
            type='text'
            />
        </label>
        <button>Add</button>
        </div>
    </form>
    )
}