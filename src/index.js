import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Link,Route,Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import About from './About'
import Navigation from './Nav'
import Contact from './Contact'

ReactDOM.render(
  <Router>
     <Routes>
      <Route element = {<Navigation/>}/>
      <Route  path='/'  element={<App/>}/>
      <Route  path='/Home' element={<Home/>}/>
      <Route  path='/About' element={<About/>}/>
      <Route  path='/Contact' element={<Contact/>}/>
      <Route  path='/Projects' element={<Home/>}/>
   
     </Routes>
  </Router>,
    
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
