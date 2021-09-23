import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//import bike1Desc from './bike1Desc';
//import bike2Desc from './bike2Desc';
//import bike3Desc from './bike3Desc';

export class Bike extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone">Bikes</h3>

        <div className="row" id="div1">
            
            <p  className="col-4">
            <img src={require("../images/bike_image1.jpg").default} height={200} width={200} />
            <p id="para">
                RS.90,000/-
                <br></br>
                Duke 250
                <br/>
                <Router>
                <Link to="/Duke250" className="link">To know More</Link>
                <Route exact path="/Duke250" component={bike1Desc}/>
                </Router>

            </p>
            </p>

            <p className="col-4">
            <img src={require("../images/bike_image2.webp").default} height={200} width={200}/>
            <p id="para">
                RS.84,000/-
                <br></br>
                Hero Pleasure Plus Platinum
                <br/>
                <Router>
                <Link to="/PleasurePlus" className="link">To know More</Link>
                <Route exact path="/PleasurePlus" component={bike2Desc}/>
                </Router>
            </p>
            </p>
                        
            <p className="col-4">
            <img src={require("../images/bike_image3.jfif").default} height={200} width={200}/>
            <p id="para">
                RS.70,000/-
                <br></br>
                Pulsar
                <br/>
                <Router>
                <Link to="/Pulsar" className="link">To know More</Link>
                <Route exact path="/Pulsar" component={bike3Desc}/>
                </Router>
            </p>
            </p>
        </div>

        </div>
        </div>
    }
}

const bike1Desc = () => {
    return ( 
        <div>
            <p>The 250 Duke is KTM's quarter-litre street bike which sits in between its 200 Duke and 390 Duke in terms of price, displacement, features and components. The motorcycle received an upgrade in 2020 in the form of an LED headlight that is similar to the unit on the 390 Duke.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike2Desc = () => {
    return ( 
        <div>
            <p>Hero Pleasure Plus Platinum Engine and Transmission: It is powered by 110.9 cc engine and puts a power of 8.1 PS. Torque remains at 8.7 Nm.
Max Torque: 8.7 Nm @ 5500 rpm</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const bike3Desc = () => {
    return ( 
        <div>
            <p>A pulsar is a highly magnetized rotating compact star (usually neutron stars but also white dwarfs) that emits beams of electromagnetic radiation out of its magnetic poles. The periods of pulsars make them very useful tools for astronomers.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

function message(){
    alert("Thank You For Purchasing!!!")
}