import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const InformativeCards = () => {
    return (
        <div className="container-informative-cards">
            <div className="cards ten-column">
                <div className="card three-column card-one">
                    <div className="container-h3">
                        <h3>Micromachismos, más comunes de lo que piensas</h3>
                    </div>
                    <div className="container-p">
                        <p>
                            Se les llama "Micro" debido a que son considerados algo normal e
                            inofensivo
                        </p>
                    </div>
                    <div className="container-button">
                    
                        <div className="button-next pointer">
                            <NavLink to="/Micromachismos">
                                <i className="fas fa-chevron-right"></i>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="card three-column card-two">
                    <div className="container-h3">
                        <h3>Estado de México, entidad con más feminicidios en el 2020</h3>
                    </div>
                    <div className="container-p">
                        <p>
                            Conoce cuales son los estados con mas feminicidios en el país
                        </p>
                    </div>
                    <div className="container-button">
                        <div className="button-next pointer">
                            <NavLink to="/FeminicidiosMexico2020">
                                <i className="fas fa-chevron-right"></i>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="card three-column card-three">
                    <div className="container-h3">
                        <h3>Inicia marcha por violencia contra la mujer</h3>
                    </div>
                    <div className="container-p">
                        <p>La marcha por el Día Internacional para Eliminar la Violencia 
                            contra la Mujer dio inicio en la Ciudad de México.
                        </p>
                    </div>
                    <div className="container-button">
                        <div className="button-next pointer">
                            <NavLink to="/MarchaDiaDeLaErradicacionDeLaViolenciaContraLaMujer">
                                <i className="fas fa-chevron-right"></i>
                            </NavLink>
                        </div>
                    </div>    
                </div>
                <div className="card three-column card-four">
                    <div className="container-h3">
                        <h3>Un modelo educativo para la equidad de género</h3>
                    </div>
                    <div className="container-p">
                        <p>
                            Conoce este modelo educativo, que podríamos verlo ejercer en un
                            futuro próximo
                        </p>
                    </div>
                    <div className="container-button">
                        <div className="button-next pointer">
                            <NavLink to="/ModeloEducativoConPerspectivaDeGenero">
                                <i className="fas fa-chevron-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformativeCards
