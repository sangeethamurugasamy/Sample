import React from "react";

const lap3Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is Apple MacBook Pro</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default lap3Desc;