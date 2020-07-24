import React from "react";
import { Switch, Link, Route } from 'react-router-dom'
import Pizza from './components/PizzaForm'
import Home from './components/Home.js'


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <h2>Your favorite food, delivered while coding!</h2>
      <Link to='/'>Home</Link>
      <Link to ='/pizza'>Pizza?</Link>

      <Switch>
        <Route path='/pizza'>
          <Pizza />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
