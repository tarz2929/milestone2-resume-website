import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Timeline from './components/Timeline'
import Resume from './components/Resume'


ReactDOM.render(
  <React.StrictMode>
    <AboutMe/>
    <Introduction/>
    <Timeline/>
    <Resume/>

  
  </React.StrictMode>,
  document.getElementById('root')
);


