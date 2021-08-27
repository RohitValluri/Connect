import React, { Component } from "react";

<style>
  #myText{

  }
</style>
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Players</h2>
        <p>Player 1 :  
          <input type="text" id="name" name="name" required
             minLength="4" maxLength="8" size="10"></input><br></br>
           Player 2 :  
          <input type="text" id="name" name="name" required
             minLength="4" maxLength="8" size="10"></input>   
          
        </p>
      </div>
    );
  }
}
 
export default Stuff;