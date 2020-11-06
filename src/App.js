import React, { useState } from 'react';
import logo from './assests/logo.svg';
import cancel from './assests/cancel.svg';
import './App.css';

import Home from './Component/Home';
import Product from './Component/Product';
import Innovation from "./Component/Innovation";

const App = () => {

  const [menu,setMenu]=useState(false);
  const [componentData,setComponentData]=useState("home");

  return (
    <div className="App">

      <header className="d-flex align-items-center header" >
        {!menu && <><img src={logo} alt="Logo" className="logo"></img>
        <div className="ml-auto">
          <div className="hamburger" onClick={()=>setMenu(true)}>
            <div className="one"> </div>
            <div className="two"> </div>
            <div className="three"></div>
          </div>
        </div></>}
      </header>


      <div className="menu" style={
        menu ? {left:"0"} : {left:"-100%"}
      }>
        <header className="d-flex align-items-center header" >
          <img src={logo} alt="Logo" className="logo"></img>
          <img src={cancel} alt="Close" className="close ml-auto" onClick={()=>setMenu(false)}></img>
        </header>
        <div className="row">
          
          <div className="col-lg-5 col-md-5 menu-items justify-content-center">
            <div>
              <div className="item" >
                <div style={{display:"block"}}>
                  <p style={{display:"inline"}} onMouseOver={()=>setComponentData("home")}>Home</p>
                </div>
              </div>
              <div className="item" >
                <div style={{display:"block"}}>
                  <p style={{display:"inline"}} onMouseOver={()=>setComponentData("product")}>Product</p>
                </div>
              </div>
              <div className="item">
                <div style={{display:"block"}}>
                  <p style={{display:"inline"}} onMouseOver={()=>setComponentData("inspiration")}>Inspiration Gallery</p>
                </div>
              </div>
              <div className="item">
                <div style={{display:"block"}}>
                  <p style={{display:"inline"}} onMouseOver={()=>setComponentData("innovation")}>Innovation</p>
                </div>
              </div>
              <div className="item">
                <div style={{display:"block"}}>
                  <p style={{display:"inline"}} onMouseOver={()=>setComponentData("distributor")}>Find a Distributor</p>
                </div>
              </div>
            </div>
            <div className="links">
              <div className="link">
                <div style={{display:"block"}}>
                  <a href="#" style={{display:"inline"}} onMouseOver={()=>setComponentData("link-one")}>Media</a>
                </div>
              </div>
              <div className="link">
                <div style={{display:"block"}}>
                  <a href="#" style={{display:"inline"}} onMouseOver={()=>setComponentData("link-two")}>Professionals</a>
                </div>
              </div>
              <div className="link">
                <div style={{display:"block"}}>
                  <a href="#" style={{display:"inline"}} onMouseOver={()=>setComponentData("link-three")}>Company</a>
                </div>
              </div>
              <div className="link">
                <div style={{display:"block"}}>
                  <a href="#" style={{display:"inline"}} onMouseOver={()=>setComponentData("link-four")}>Support & Service</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 col-md-7 sub-menu">
            {
              componentData==="home" && <Home url="https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            
            {
              componentData==="inspiration" && <Home url="https://images.pexels.com/photos/3551216/pexels-photo-3551216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            {
              componentData==="innovation" && <p><Innovation/></p>
            }
            {
              componentData==="distributor" && <Home url="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            {
              componentData==="link-one" && <Home url="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            {
              componentData==="link-two" && <Home url="https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            {
              componentData==="link-three" && <Home url="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            }
            {
              componentData==="link-four" && <Home url="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            }
          </div>
        
        </div>    
      </div>
    </div>
  );
}

export default App;