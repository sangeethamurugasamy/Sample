import React from "react";

const lap2Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is DELL Laptop</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default lap2Desc;