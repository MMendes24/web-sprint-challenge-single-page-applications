import React, { useState, useEffect } from "react";
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import Pizza from './components/Pizza'
import Home from './components/Home.js'

// initial states

const initialFormValues = {
  username: '',
  size: "Small",
  toppings: {
    pepperoni: false,
    jalapenos: false,
    blackOlives: false,
    bacon: false,
  },
  instructions: '',
}

const initialPizzas = []

const App = () => {
  // state
const [pizzas, setPizzas] = useState(initialPizzas)
const [formValues, setFormValues] = useState(initialFormValues)

// axios calls
const postNewPizza = newPizza => {
  axios.post('https://reqres.in/', newPizza)
  .then(res => {
    setPizzas([res.data, ...pizzas])
    console.log('hello')
    setFormValues(initialFormValues)
  })
  .catch(err => {
    console.log("Sorry New Orleans no pizza!")
  })
}

// form functionality

const inputChange = (inputName, inputValue) => {
  const updatedFormValues = {...formValues, [inputName]: inputValue}
  setFormValues(updatedFormValues)
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    toppings: {
    ...formValues.toppings,
      [name]: isChecked,
    }
  })
}

  const submit = () => {
    const newPizza = {
      username: formValues.username.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top]),
      instructions: formValues.instructions.trim()
    } 
    postNewPizza(newPizza)
  }

  return (
    <div className="app-container">
      <h1>Lambda Eats</h1>
      <h2>Your favorite food, delivered while coding!</h2>
      <Link to='/'>Home</Link>
      <Link to ='/pizza'>Pizza?</Link>

      <Switch>
        <Route path='/pizza'>
          <Pizza 
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      </div>
  );

};

export default App;
