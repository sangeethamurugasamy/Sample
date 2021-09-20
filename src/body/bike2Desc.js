import React from "react";

const bike2Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is Pleasure Plus Platinum</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default bike2Desc;