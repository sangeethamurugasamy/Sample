import React from "react";

const bike1Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is Duke bike</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default bike1Desc;