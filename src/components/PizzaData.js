import React from 'react'

export default function PizzaData({details}) {
    if(!details) {
        return <h2>Sorry cowboy, still riding!</h2>
    }

    return (
        <div className='pizza-container'>
            <h2>{details.username}</h2>
            <h3>{details.size}</h3>
            <h3>{details.instructions}</h3>
            {
            !!details.terms && details.terms.length &&
          <ul>
              {details.toppings.includes("pepperoni") ? <li>works</li> : <li>doesn't work</li>}
              {details.toppings.includes("jalapenos") ? <li>works</li> : <li>doesn't work</li>}
              {details.toppings.includes("blackOlives") ? <li>works</li> : <li>doesn't work</li>}
              {details.toppings.includes("bacon") ? <li>works</li> : <li>doesn't work</li>}
          </ul>
      }
        </div>
    )
}