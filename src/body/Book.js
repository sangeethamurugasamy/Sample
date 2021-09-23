import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import book1Desc from './book1Desc';
// import book2Desc from './book2Desc';
// import book3Desc from './book3Desc';



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
                <Link to="/physical science" className="link">To know More</Link>
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
                <Link to="/OxfordDictionary" className="link">To know More</Link>
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
                <Link to="/LivingPlanet" className="link">To know More</Link>
                <Route path="/LivingPlanet" component={book3Desc}/>
                </Router> 
            </p>
            </p>
        </div>

        </div>
        </div>
    }
}

const book1Desc = () => {
    return ( 
        <div>
            <p>Physical science is the study of the inorganic world. That is, it does not study living things. (Those are studied in biological, or life, science.) The four main branches of physical science are astronomy, physics, chemistry, and the Earth sciences, which include meteorology and geology.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const book2Desc = () => {
    return ( <div>
        <p>A dictionary is a reference book about words and as such it describes the functioning of individual words (sometimes called lexical items). It does so by listing these words in alphabetical order in the form of headwords, the words listed as entries in the dictionary.</p> 
        <button id = "button" onClick={message}>Add To Cart</button>   
    </div>
    );
}

const book3Desc = () => {
    return (
        <div>
            <p>In The Living Planet, based on his BBC television series, David Attenbourough's searching eye, unfailing curiousty and infectious enthusiasm, explain and illuminate the intricate lives of these colonies - from the lonely heights of the Himalayas to the wild creatures which have established themselves in the most recent of environments, the city.</p> 
            <button id = "button" onClick={message}>Add To Cart</button>  
        </div>
      );
}

function message(){
    alert("Thank You For Purchasing!!!")
}