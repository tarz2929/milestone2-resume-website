//Import React
import React from 'react';

//Declare Function
function Navbar() {
    return (

<section className="top-nav">
  
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
  
    <ul className="menu">
    
                <li><a href="#Introduction">Introduction</a></li>
               <li> <a href="#About">About</a></li>
               <li>  <a href="#Timeline">Timeline</a></li>
               <li>  <a href="#Resume">Resume</a></li>
               <li> <a href="#ContactMe">Contact Me</a></li>
              
    </ul>
    
  </section>


        
      
            
    );
}
//Export Function
export default Navbar;