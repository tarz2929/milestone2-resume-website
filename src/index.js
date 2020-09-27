import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <React.StrictMode>
    <AboutMe/>
    <Introduction/>
    <Timeline/>
    <Resume/>
    <Sidebar/>

  
  </React.StrictMode>,
  document.getElementById('root')
);


