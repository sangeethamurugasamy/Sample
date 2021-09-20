import React from "react";

const bike3Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>This is Pulsar Bike</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default bike3Desc;