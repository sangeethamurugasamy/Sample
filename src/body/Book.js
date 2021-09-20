import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import book1Desc from './book1Desc';
import book2Desc from './book2Desc';
import book3Desc from './book3Desc';



export class Book extends React.Component{
    render(){
        return <div>
        <div className="container">
        <h3 id="hone" text-align="center">Books</h3>

        <div className="row" id="div1">
           
            <p className="col-4">
            <img src={require("../images/book_image1.jfif").default} height={200} width={200} />
            <p id="para">
                RS.400/-
                <br></br>
                Physical Science 
                <br/>
            <Router>
                <Link to="/physical science">To know More</Link>
                <Route path="/physical science" component={book1Desc}/>
            </Router>
            </p>
            </p>

            <p className="col-4">
            <img src={require("../images/book_image2.jfif").default} height={200} width={200} />
            <p id="para">
                RS.500/-
                <br></br>
                Oxford Dictionary 
                <br/>
                <Router>
                <Link to="/OxfordDictionary">To know More</Link>
                <Route path="/OxfordDictionary" component={book2Desc}/>
                </Router> 
            </p>
            </p>
                        
            <p className="col-4">
            <img src={require("../images/book_image3.jfif").default} height={200} width={200} />
            <p id="para">
                RS.350/-
                <br></br>
                Living Planet
                <br/>
                <Router>
                <Link to="/LivingPlanet">To know More</Link>
                <Route path="/LivingPlanet" component={book3Desc}/>
                </Router> 
            </p>
            </p>
        </div>

        </div>
        </div>
    }
}