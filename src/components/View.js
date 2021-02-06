import React from 'react';
import { useHistory } from "react-router-dom";

function View() {
    let history = useHistory();
    function handleClick() {
      history.push("/");
  
    }  
    return (
      <>
        <h1>Here's your meme!</h1>
        <button type ="button" onClick = {handleClick}> 
        Redo
        </button>
      </>
    );
    
  }
  export default View;

