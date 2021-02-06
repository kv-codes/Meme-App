import React from 'react';
import { useHistory } from "react-router-dom";

function Text() {
    let history = useHistory();
    function handleClick() {
      history.push("/View");
  
    }  
    return (
      <>
        <h1>Almost there! Now enter the header/footer text then click 'View' to see your meme!</h1>
        <button type ="button" onClick = {handleClick}> 
        Next
        </button>
      </>
    );
    
  }
  export default Text;

