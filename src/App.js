import logo from './logo.svg';
import './App.css';
//import { Chatbot } from './Chatbot';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeComp from './Home/HomeComp';
import BikeComp from './Bike/BikeComp';
import BookComp from './Book/BookComp';
import LapComp from './Laptop/LapComp';

function App() {
  return(
    <>
    <HomeComp/>
    <BikeComp/>
    <BookComp/>
    <LapComp/>
    </>
  );
}

export default App;
