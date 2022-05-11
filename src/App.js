import {BrowserRouter as Router, Switch,Link,Route,Routes, NavLink} from 'react-router-dom'
import React, { Component } from 'react';
import idea from './idea.jpg';

import './App.css';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         enablespinner1:false,
         enablespinner2:false,
         enablespinner3:false,
         enablespinner4:false,
         enablespinner5:false,
         count:0,
         poNumber:'',
         AccountNumberSAP:'',


      }
    }







   
      render(){
      return (
      




      
<div className='Home'>
 

         
      
<div className='header1'>
         <ul>
           <li>
            <NavLink to={'/'}>
              Home
            </NavLink>
            </li>
            <li>
            <NavLink to={'/About'}>
              About
            </NavLink>
            </li>
            <li>
            <NavLink to={'/Contact'}>
              Contact
            </NavLink>
            </li>
            </ul>
           
            
            </div>


            <div className='backpic' style={{'backgroundImage':{idea}}}>
             
              <h1 id='pictext'>Hello there</h1>
              <h3 id='picsecondtext'>this is my personla websites</h3>
             
            </div>
         
          </div>
         
       
      
     


      );//render
      }

  }

 