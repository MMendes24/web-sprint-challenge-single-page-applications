import React from "react";
import { Switch, Link, Route } from 'react-router-dom'
import PizzaForm from './components/PizzaForm'
import Home from './components/Home.js'


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to='/'>Home</Link>
      <Link to ='/pizza'>Pizza?</Link>

      <Switch>
        <Route path='/pizza/'>
          <PizzaForm />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
