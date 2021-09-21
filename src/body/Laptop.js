import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import lap1Desc from './lap1Desc';
// import lap2Desc from './lap2Desc';
// import lap3Desc from './lap3Desc';

export class Laptop extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone">Laptops</h3>

        <div className="row" id="div1">
           
            <p className="col-4">
            <img src={require("../images/lap_image1.jfif").default} height={200} width={200} />
            <p id="para">
                RS.64,000/-
                <br></br>
                HP Pavilion x360
                <br/>
            <Router>
                <Link to="/HPPavilion">To know More</Link>
                <Route path="/HPPavilion" component={lap1Desc}/>
            </Router>
            </p>
            </p>

            <p className="col-4">
            <img src={require("../images/lap_image2.jfif").default} height={200} width={200}/>
            <p id="para">
                RS.35,500/-
                <br></br>
                Dell Vostro 15 350
                <br/>
            <Router>
                <Link to="/Dell">To know More</Link>
                <Route path="/Dell" component={lap2Desc}/>
            </Router>
            </p>
            </p>
                        
            <p className="col-4">
            <img src={require("../images/lap_image3.jfif").default} height={200} width={200}/>
            <p id="para">
                RS.95,000/-
                <br></br>
                Apple MacBook Pro
                <br/>
            <Router>
                <Link to="/Apple">To know More</Link>
                <Route path="/Apple" component={lap3Desc}/>
            </Router>
            </p>
            </p>
        </div>

        </div>
        </div>
    }
}

const lap1Desc = () => {
    return ( 
        <div>
            <p>this is HP Laptop</p> 
            <button id = "button" onClick={message}>Buy</button>   
        </div>
     );
}

const lap2Desc = () => {
    return ( 
        <div>
            <p>this is DELL Laptop</p> 
            <button id = "button" onClick={message}>Buy</button> 
        </div>
     );
}

const lap3Desc = () => {
    return ( 
        <div>
            <p>this is Apple MacBook Pro</p> 
            <button id = "button" onClick={message}>Buy</button>   
        </div>
     );
}

function message(){
    alert("Thank You For Purchasing!!!")
}