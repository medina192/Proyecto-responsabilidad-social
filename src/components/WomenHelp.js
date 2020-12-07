import React from 'react';
import { NavLink } from 'react-router-dom';

const WomenHelp = () => {
    return (
        <div className="help-body">
            <div className="help-container">
                <div className="help-container-image">
                    <div className="help-Image">

                    </div>          
                </div>
                <div className="help-text" >
                    <h4>
                        ¿Conoces cuales son, y donde puedes denunciar los delitos en contra de 
                        la mujer?
                    </h4>
                    <p> Muchas mujeres que sufren de la violencia de género no denuncian porque
                        no estan 100% si lo que acaban de sufrir es algo ilegal ante la justicia
                        gubernamental, además, no tienen conocimiento alguno sobre a quien acudir 
                        en estos casos. Da click en el botón, para seguir el enlace donde podrás
                        descubrir como.
                    </p>
                    <div className="help-container-button">
                        <NavLink to="/DelitosContraDeLasMujeres">
                            <button>Saber más</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WomenHelp
