import React from 'react';
import { NavLink } from 'react-router-dom';

const LawOlimpia = () => {
    return (
        <div className="container-law-olimpia">
            <div className="container-content-law-olimpia">
                <div className="container-two-colors">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div className="law-olimpia-content">
                    <div className="law-olimpia-image "></div>
                    <div className="law-olimpia-text ">
                        <h2 >Por fin es aprobada la ley Olimpia¡</h2>
                        <p> La ley olimpia por fin fue aprobada,
                            una gran noticia para México
                        </p>
                        <NavLink to="/LeyOlimpia">
                            <button className="pointer">Conoce más...</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LawOlimpia
