//Import React
import React from 'react';

//Declare Function
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse tarunnav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"> <a className="nav-link" href="#"></a></li>
                <li className="nav-item"><a href="#Introduction">Introduction</a></li>
               <li className="nav-item"> <a href="#About">About</a></li>
               <li className="nav-item">  <a href="#Timeline">Timeline</a></li>
               <li className="nav-item">  <a href="#Resume">Resume</a></li>
               <li className="nav-item"> <a href="#contact">Contact me</a></li>
        </ul>
        </div>
        </nav>
            
    );
}
//Export Function
export default Navbar;