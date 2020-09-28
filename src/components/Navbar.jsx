//Import React
import React from 'react';

//Declare Function
function Navbar() {
    return (

<section class="top-nav">
  
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
  
    <ul class="menu">
    
                <li><a href="#Introduction">Introduction</a></li>
               <li> <a href="#About">About</a></li>
               <li>  <a href="#Timeline">Timeline</a></li>
               <li>  <a href="#Resume">Resume</a></li>
               <li> <a href="#ContactMe">Contact me</a></li>
              
    </ul>
    
  </section>


        
      
            
    );
}
//Export Function
export default Navbar;