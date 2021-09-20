import React from "react";

const lap1Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is HP Laptop</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default lap1Desc;