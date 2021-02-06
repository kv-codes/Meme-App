import React from 'react';
import { useHistory } from "react-router-dom";


function Home() {
  let history = useHistory();
  function handleClick() {
    history.push("/Background");

  }  
  return (
    <>
      <h1>Welcome to the Meme Generator!</h1>
      <h2>Create | Laugh | Enjoy</h2>
      <p>Click 'start' to begin, have fun!</p>
      <button type ="button" onClick = {handleClick}> 
      Start!
      </button>
    </>
  );
  
}
export default Home;
