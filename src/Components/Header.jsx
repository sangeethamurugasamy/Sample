import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,Route,Switch} from 'react-router-dom'
import './Styling/Header.css'
import {Login} from './Login';
// import {Sell} from './Sell';
import img1 from './Images/olxLogo.png';
import {Nav} from 'react-bootstrap'

export class Header extends React.Component{
    constructor(){
        super();
        this.state={city:"Chennai"}
    }
    changeCity(event){
        this.setState({city : event.target.value})
    }
    render(){
        <Login/>
        return(
            <nav className="header">
                    {/* <Link to="/"><h2>OLX</h2></Link> */}
                <Nav.Link as={Link} to="/">
                    <img className="headLogo" src={img1} alt=""/>
                </Nav.Link>
                <div className="location">
                    Location: :
                    <input className='label' placeholder='Your location' value={this.state.city}
                    onChange={this.changeCity.bind(this)}/>
                </div>
                <div className="actions">
                    <Nav.Link as={Link} to="/Login" className="login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/Sell" className="sell">Sell</Nav.Link>
                    {/* <div>
                        <button className="sell" onClick={Sell}>Sell</button>
                    </div> */}
                    <Nav.Link as={Link} to="/Cart" className="cart">
                        Cart
                    </Nav.Link>
                    {/* <Switch>
                        <Route path="/cart" component={cart}/>
                    </Switch> */}
                    {/* <Switch>
                        <Route path="/Login" component={Login}/>s
                    </Switch> */}
                </div>

            </nav>
        );
    }
}
// function Sell(){
//     alert("Clicked");
//     return <h1>Enter product details</h1>
// }