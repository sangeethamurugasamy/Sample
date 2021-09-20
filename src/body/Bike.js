import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import bike1Desc from './bike1Desc';
import bike2Desc from './bike2Desc';
import bike3Desc from './bike3Desc';

export class Bike extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone">Bikes</h3>

        <div className="row" id="div1">
           
            <p className="col-4">
            <img src={require("../images/bike_image1.jpg").default} height={200} width={200} />
            <p id="para">
                RS.90,000/-
                <br></br>
                Duke 250
                <br/>
                <Router>
                <Link to="/Duke250">To know More</Link>
                <Route path="/Duke250" component={bike1Desc}/>
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
                <Link to="/PleasurePlus">To know More</Link>
                <Route path="/PleasurePlus" component={bike2Desc}/>
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
                <Link to="/Pulsar">To know More</Link>
                <Route path="/Pulsar" component={bike3Desc}/>
                </Router>
            </p>
            </p>
        </div>

        </div>
        </div>
    }
}


