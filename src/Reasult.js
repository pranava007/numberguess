import React from "react";

function Reasult({secretnum, term}){
 let result;
   if(term){
    if(term > secretnum){
        result ='Higher';
    }
    else if(term < secretnum){
        result = 'Lower';
    }
    else if(term == secretnum){
        result = "Yipee! correct";
    }
    else{
        result = "Enter vaild inpute"
    }
   }
    return(
        <h3>Your Guessed : {result}</h3>
    )
}

export default Reasult;