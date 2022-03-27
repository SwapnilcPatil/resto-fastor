
import './App.css';
import React from 'react';  
import ReactDOM, { render } from 'react-dom';  
import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/sign-in';
import Otp from './components/otp';
import RestaurantList from './components/restaurant-list';
import RestaurantDetails from './components/restaurant-details';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>  
     
      <Route path="/" element={<SignIn/>}/>
      <Route path="otp" element={<Otp/>} />  
      <Route path="restaurant-list" element={<RestaurantList/>} />
      <Route path="restaurant-details" element={<RestaurantDetails/>} />   
 
  </Routes> 
  </BrowserRouter>
  ) 
} 
// function App() {
//   return  <SignIn/>
// }

export default App;
