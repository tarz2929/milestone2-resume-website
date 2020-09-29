import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/fontawesome.css';
import 'font-awesome/css/fontawesome.min.css';
import Contact from './components/Contact';




ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Introduction/>
    <AboutMe/>
    <Timeline/>
    <Resume/>
    <Contact/>
    

  
  </React.StrictMode>,
  document.getElementById('root')
);


