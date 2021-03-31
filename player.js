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
             minlength="4" maxlength="8" size="10"></input><br></br>
           Player 2 :  
          <input type="text" id="name" name="name" required
             minlength="4" maxlength="8" size="10"></input>   
          
        </p>
      </div>
    );
  }
}
 
export default Stuff;