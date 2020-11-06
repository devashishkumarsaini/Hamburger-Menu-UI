import React from 'react';
const Home = (props) => {
    return (
        <div style={{width:"100%",overflowX:"hidden"}}>
            <img src={props.url} alt="Home" style={{width:"100%"}}></img>
        </div>
    )
}

export default Home;
