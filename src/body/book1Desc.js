import React from "react";
const book1Desc = () => {
    function message(){
        alert("Thank You For Purchasing!!!")
    }
    return ( 
        <div>
            <p>this is physical science book</p> 
            <button onClick={message}>Buy</button>   
        </div>
     );
}
 
export default book1Desc;