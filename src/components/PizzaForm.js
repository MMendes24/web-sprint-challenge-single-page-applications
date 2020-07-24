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
        </div>
    </form>
    )
}