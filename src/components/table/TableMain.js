import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { coordinates } from '../../data/coordinates';
import  AreaChart   from './Chart';

const TableMain = () => {
    const displayBubble = false;


    const [hoverBurbles, sethoverBurbles] = useState({
        hoverBurble1: false,
        hoverBurble2: false,
        hoverBurble3: false,
    });

    const {hoverBurble1, hoverBurble2, hoverBurble3} = hoverBurbles;

    const openBurble1 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble1: true
        });
    }

    const closeBurble1 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble1: false
        });
    }

    const openBurble2 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble2: true
        });
    }

    const closeBurble2 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble2: false
        });
    }


    const openBurble3 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble3: true
        });
    }

    const closeBurble3 = () => {
        sethoverBurbles({
            ...hoverBurbles,
            hoverBurble3: false
        });
    }

    
    return (
        <div>
            <div>
                <div className="class-background-chart animate__animated animate__fadeIn">
                    <div className="table-centered-content">
                        <h2>Estadisticas importantes sobre los feminicidios en México</h2>
                        <h3>Número de feminicidios y homicidios dolosos de mujeres en todos estados hasta 
                            noviembre del 2020</h3>
                        <div className="container-table">
                            <table className="table-class">
                                <thead>
                                    <tr>
                                        <th>Estado</th>
                                        <th>Feminicidios</th>
                                        <th>Homicidios dolosos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                        {coordinates.map((state,i)=>(
                                            <tr key={i}>
                                                <td>{state.Name}</td>
                                                <td>{state.message}</td>
                                                <td>{state.homicide}</td>
                                            </tr>   
                                        ))}
                                    
                                </tbody>
                            </table>
                        </div>
                        <div  className="container-chart">
                            <AreaChart/>
                        </div>
                        <div className="table-text-content">
                            <div className="table-text-content-div">
                                <div className={`burbble1 ${hoverBurble1 ? "" : "hide-burble"}`}  >
                                    <div className="speech-bubble">                                          
                                        <p>
                                            Del 2015 al 2019
                                            se incremento a mas del doble el número de feminicidios, lo que indica una
                                            tendencia muy a la alta </p>  
                                        <button className="pointer" onClick={closeBurble1}>Cerrar</button>
                                    </div>
                                </div>
                                <div className={`burbble2 ${hoverBurble2 ? "" : "hide-burble"}`}  >
                                    <div className="speech-bubble">                                          
                                        <p>
                                            Las autoridades en muchas de las 
                                            ocaciones se niegan a ayudar, ya que algunas conductas 
                                            violentalas las consideran "normales".
                                         </p>  
                                        <button className="pointer" onClick={closeBurble2}>Cerrar</button>
                                    </div>
                                </div>
                                <div className={`burbble3 ${hoverBurble3 ? "" : "hide-burble"}`}  >
                                    <div className="speech-bubble">                                          
                                        <p>
                                            La mayoria de los delitos no se investigan, simplemente
                                            se archivan y se guardan para nunca más volver a saber de
                                            ellos
                                         </p>  
                                        <button className="pointer" onClick={closeBurble3}>Cerrar</button>
                                    </div>
                                </div>

                                <div className="table-content">
                                    <div className="table-icons">
                                            <div className="hover-burble pointer" onClick={openBurble1}><i className="fas fa-chart-line"></i></div>
                                            <div className="hover-burble pointer" onClick={openBurble2}><i className="fas fa-handshake-slash"></i></div>
                                            <div className="hover-burble pointer" onClick={openBurble3}><i className="fas fa-archive"></i></div>
                                        </div>
                                        <div className="table-information">
                                            <h4>Información importante</h4>
                                            <hr/>
                                            <p>
                                                2,240 mujeres fueron asesinadas, durante los primeros 
                                                siete meses del año 2020, de acuerdo a las Cifras del
                                                Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública
                                            </p>
                                            <p>
                                                1,674 casos de homicidios dolosos y 566 feminicidios {"(777 hasta noviembre)"}, aunque cabe 
                                                recalcar que en México muchos feminicidios no son clasificados como tales,
                                                ya que algunos son clasificados como homicidios en razón de parentesco.
                                            
                                            </p>
                                            <p>
                                                Una estadística inesperada, es, El número de llamadas a las 
                                                líneas telefónicas de asistencia se ha quintuplicado en algunos
                                                 países como consecuencia del incremento de las tasas de 
                                                 violencia de pareja provocado por la pandemia de COVID-19.
                                            </p>
                                            <p>
                                                Hasta septiembre de 2020, 48 países habían 
                                                integrado la prevención y respuesta a la
                                                 violencia contra las mujeres y niñas en sus 
                                                 planes de respuesta a la COVID-19, lo que significa
                                                 que antes de la pandemia, no existían estas respuestas
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="container-return-button table-margin-button">
                        <NavLink to="/">
                            <button  className="pointer">Regresar</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableMain
