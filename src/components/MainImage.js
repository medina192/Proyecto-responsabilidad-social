import React from 'react';
import { NavLink } from 'react-router-dom';


const MainImage = () => {
    return (
        <div className="container-main-image">
            <div className="main-image">
                <h1>Mujer, mereces respeto<span>!</span></h1>
                <p>Debemos poner un alto a estas injusticias</p>
                <div className="main-image-icons">
                    <i className="fas fa-female"></i>
                    <i className="far fa-heart color-orange"></i>
                </div>
            </div>
        </div>
    )
}

export default MainImage
