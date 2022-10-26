import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Canvas from './components/canvas/Canvas';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import logo from './images/logo.png';

import { FaTrash } from 'react-icons/fa'
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr'
import { TbDeviceFloppy } from 'react-icons/tb'
import { FiLogOut } from 'react-icons/fi'

function App (){

  const [user, setUser] = useState('Dunder');
  const [layout, setLayout] = useState({
    name: 'Sítio Refúgio dos Pássaros Layout'
  });

  function resetMenu(){
    let elements = document.getElementsByClassName('guide__toggle');
    let menuItens = document.getElementsByClassName('menu__item');
    
    for(var i = 0; i < elements.length; i++){
        if(elements[i].classList.contains('hide')){
        }else{
            elements[i].classList.add('hide'); 
        }
        if(menuItens[i].classList.contains('light-green-bg')){
            menuItens[i].classList.remove('light-green-bg');
        }
    }
  }

  function menuSelectLayout(){
      resetMenu();
      if(document.hasFocus()){
          document.querySelector('.selectLayout').classList.remove('hide');
          document.querySelector('.btn-selectLayout').classList.add('light-green-bg');
      }
  }
  function menuBuild(){
      resetMenu()
      if(document.hasFocus()){
          document.querySelector('.build').classList.remove('hide');
          document.querySelector('.btn-build').classList.add('light-green-bg');
      }
  }
  function menuObjects(){
      resetMenu()
      if(document.hasFocus()){
          document.querySelector('.objects').classList.remove('hide');
          document.querySelector('.btn-objects').classList.add('light-green-bg');
      }
  }
  function menuExport(){
      resetMenu()
      if(document.hasFocus()){
          document.querySelector('.export').classList.remove('hide');
          document.querySelector('.btn-export').classList.add('light-green-bg');
      }
  }

    return (
      <div className="App">
        <header className="App-header">
          <div className='topbar__logo-wrapper'>
            <img className='middle' src={logo} alt='logo'></img>
          </div>


          <div className="topbar__commands centralizeY">
            <i><FaTrash/></i>
            <i><GrRotateLeft/></i>
            <i><GrRotateRight/></i>
            <i><TbDeviceFloppy/></i>
          </div>

          <div className="topbar__layout-name centralizeY">
            <input type="text" className='centralize-topbar' value={layout.name} onChange={(e) => setLayout({name: e.target.value})}/>
          </div>

          <div className="topbar__user centralizeY">
            <span>{user}</span>
            <i><FiLogOut/></i>
          </div>
        </header>

        <div className='body'>

            <Router>
              <Sidebar/>
              <Canvas/>
            </Router>

        </div>
      </div>
    );
  
}

export default App;
