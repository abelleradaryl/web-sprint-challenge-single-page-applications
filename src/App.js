import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import schema from './Components/Schema';
import Food from "./Components/Home";
import * as yup from 'yup';
import './App.css';
import pizzaImg from "./Pizza.jpg";

const initialData = {
  name: '',
  size: '',
  toppingOne: false,
  toppingTwo: false,
  toppingThree: false,
  toppingFour: false,
  specialInstructions: ''
}

const initialDataErrors = {
  name: '',
  size: '',
  specialInstructions: ''
}


const initialOrder = []

const App = () => {

  const [formValues, setFormValues] = useState(initialData)
  const [newOrder, setNewOrder] = useState(initialOrder)
  const [errors, setErrors] = useState(initialDataErrors)

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(()=> setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
  }

   const change = (name, value) =>{
    validate(name, value)
    setFormValues({...formValues, [name]: value})
   }

  const pizzaApi = ()=> {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(resp =>{
       setNewOrder([resp.data, ...newOrder])
       setFormValues(initialData)
    })}

    // useEffect(() => {
    //   axios.get('https://reqres.in/api/orders')
    //   .then(resp => {
    //     console.log(resp)
    //   })
    // })
  

    const submit = () =>{
      const newData = {
          name: formValues.name,
          size: formValues.size,
          toppingOne: formValues.toppingOne,
          toppingTwo: formValues.toppingTwo,
          toppingThree: formValues.toppingThree,
          toppingFour: formValues.toppingFour,
          specialInstructions: formValues.specialInstructions
      }
      pizzaApi(newData);
   }

  

  return (
    <div className="App">
      <header className="header">
        <h1>Bloomtech Eats</h1>
        <div className="nav">
          <Route path='/pizza'>
            <Link to='/'>
              <button className="button">Home</button>
            </Link>
          </Route>
          <button className="button">More Food</button>
          <button className="button">About Us</button>
        </div>
      </header>
      <div className="top-container">
        <div className="image-container">
          <img src={pizzaImg} />
          <h2>Best Pizza In Town!!</h2>
          <Route exact path='/'>
            <Link id='order-pizza'to='/pizza'>
              <button className="button">Order Now</button>
            </Link>
            <br/>
            <div className="moreFood">
            <h1>More Food!!</h1>
            </div>
            <div className="food container">
              <Food></Food>
            </div>
          </Route>
        </div>
      </div>
      <div>
      </div>
      <div className="form container">
        <Route path ='/pizza'>
          <PizzaForm 
            formValues={formValues}
            submit={submit}
            change={change}
            newOrder={newOrder}
            errors={errors}
          />
        </Route>
      </div>
  </div>
  );
};
export default App;

