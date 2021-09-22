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
            <p>HP Pavilion x360 14-dh1011tu 8GB02PA#ACJ Core i5 10th Gen Windows 10 Home Laptop (8 GB RAM, 1 TB HDD + 256 GB SSD, Intel UHD Graphics, 35.56cm, Natural Silver)</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

const lap2Desc = () => {
    return ( 
        <div>
            <p>10th Generation Intel® Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)laptop Windows 10 Home Single Language, English Intel® UHD Graphics with shared graphics memory 8GB, 8GBx1, DDR4, 2666MHz, 1TB 5400 rpm 2.5" SATA Hard Drive, Dune color cover for non-touch LCD

</p> 
            <button id = "button" onClick={message}>Add To Cart</button> 
        </div>
     );
}

const lap3Desc = () => {
    return ( 
        <div>
            <p>Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.Battery Life (up to hours): 10. Operating system: macOS</p> 
            <button id = "button" onClick={message}>Add To Cart</button>   
        </div>
     );
}

function message(){
    alert("Thank You For Purchasing!!!")
}