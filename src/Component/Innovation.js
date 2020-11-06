import React, { useState } from 'react'
import Home from "./Home";
import './styles.css'
const Innovation = () => {

    const [componentValue, setComponentValue] = useState("first");

    return (
        <div className="row innovation">
            <div className="col-lg-6 one">
                <h3 onMouseOver={()=>setComponentValue("first")}>Steel Technology</h3>
                <h3 onMouseOver={()=>setComponentValue("second")}>Steel Look</h3>
                <h3 onMouseOver={()=>setComponentValue("third")}>Accoya Wood</h3>
                <h3 onMouseOver={()=>setComponentValue("four")}>Sustainability</h3>
                <h3 onMouseOver={()=>setComponentValue("five")}>Enginerring Expertise</h3>
            </div>
            <div className="col-lg-6 two">
                {
                    componentValue==="first" && <Home url="https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                }
                {
                    componentValue==="second" && <Home url="https://images.pexels.com/photos/1684910/pexels-photo-1684910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                }
                {
                    componentValue==="third" && <Home url="https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                }
                {
                    componentValue==="four" && <Home url="https://images.pexels.com/photos/1684910/pexels-photo-1684910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                }
                {
                    componentValue==="five" && <Home url="https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                }
                
            </div>
        </div>
    )
}

export default Innovation
