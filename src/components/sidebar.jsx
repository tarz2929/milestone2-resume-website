//Import React
import React from 'react';

//Declare Function
function Sidebar() {
    return (
        <>
            <div class="sidenav">
            <h1 id=""><a href="index.html">Tarun Mulle</a></h1>
            <span className="email"><i className="icon-mail"></i> tarun.mulle@ualberta.ca</span>
                <a href="#Introduction">Introduction</a>
                <a href="#About">About</a>
                <a href="#Timeline">Timeline</a>
                <a href="#Resume">Resume</a>
                <a href="#contact">Contact me</a>

            
            </div>



        </>
    );
}
//Export Function
export default Sidebar;