import React from 'react';
import { useHistory } from "react-router-dom";


function Background() {
    let history = useHistory();
    function handleClick() {
      history.push("/Text");
  
    }  
    return (
      <>
        <h1>First, select a background image then click 'next'.</h1>
        <button type ="button" onClick = {handleClick}> 
        Next
        </button>
      </>
    );
    
  }
  export default Background;