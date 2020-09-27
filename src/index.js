import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/fontawesome.css';
import 'font-awesome/css/fontawesome.min.css';




ReactDOM.render(
  <React.StrictMode>
    <Sidebar/>
    <Introduction/>
    <AboutMe/>
    <Timeline/>
    <Resume/>
    

  
  </React.StrictMode>,
  document.getElementById('root')
);


