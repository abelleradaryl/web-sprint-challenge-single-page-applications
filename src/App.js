import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import schema from './Components/Schema';
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
      pizzaApi(newData)
   }

  

  return (
    <div className="App">
    <header className="header">
      <h1>Bloomtech Eats</h1>
      <Route className="homeBtn" path='/pizza'>
        <Link to='/'>Home</Link>
      </Route>
    </header>
    <div className="top-container">
      <div className="image-container">
        <img src={pizzaImg} />
        <Route className="orderBtn" exact path='/'>
          <Link id='order-pizza'to='/pizza'>Order Now</Link>
        </Route>
      </div>
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

