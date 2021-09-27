import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
//import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Bike_ItemCard = (props) =>{
    //let history = useHistory();
    return (
            <div className="col-4" id="itemcard">
               <img src={props.img} width={200} height={200} />
                <div class="card-body">
                    <h5 className="title">{props.title}</h5>
                    <h7 className="price">{props.price}</h7>
                    <h5 className="description">{props.desc}</h5>
                    <button class="btn btn-success">Add To Cart</button>
                </div>
            </div>
       
    );
}

export default Bike_ItemCard;