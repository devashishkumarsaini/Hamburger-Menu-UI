import React from 'react';
import './styles.css';

const Product = () => {
    return (
        <div className="product">
            <div className="one">
                <h6 className="mb-4">Thermal Steel</h6>
                <p>Windows</p>
                <p>Swing Door</p>
                <p>Sliding Door</p>
                <p>Window Walls</p>
                <p>Hurricane Impact Rated Series</p>
            </div>  
            <div className="two row">
                <div className="col-lg-4 col-md-6 col-sm">
                    <h6 className="mb-4">Thermal Aluminium</h6>
                    <p>Swing Doors</p>
                    <p>Hurricane Impact Rated Series</p>
                    <p>Sliding Door</p>
                    <p>Cold Weather Series</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm three">
                    <p>Window Walls</p>
                    <p>Windows</p>
                    <p>Steel Look Series</p>
                    <p>Large Group Series</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm four">
                    <h6>Non Thermal Aluminium</h6>
                    <p>Swing Doors</p>
                    <p>Windows</p>
                    <h6>Wood</h6>
                    <p>Windows</p>
                    <p>Doors</p>
                </div>
            </div>
        </div>
    )
}

export default Product
