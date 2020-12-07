import React from 'react';
import { NavLink } from 'react-router-dom';

const MarchWomanDay = () => {
    return (
        <div className="march-body animate__animated animate__fadeIn">
            <div className="marcha-container">
                <div className="march-container-main-image">
                    <div className="march-main-image"></div>
                </div>
                <div className="march-container-degraded-bar">
                    <p>#25DeNoviembre</p>
                    <p>#DiaNaranja</p>
                    <p>#NiUnaMenos</p>
                </div>
                <div className="march-container-framework">
                    <div className="march-framework">
                        <div className="march-framework-title-image">
                            <div className="march-container-title-img five-column">
                                <img src="../assets/img/b.png" className="march-title-img" />
                            </div>
                            <div className="march-content seven-column">
                                <h2>
                                    <span>#DíaNaranja:</span> Mujeres protestan en CDMX; exigen seguridad
                                </h2>
                                <p>
                                    A las 16:00 horas comenzó la marcha del 25 de noviembre, fecha en
                                    la que se conmemora el Día Internacional de la Eliminación de 
                                    Violencia contra las mujeres. La movilización salió el Monumento
                                    a la Revolución. Con pancartas y al grito de Ni una menos, 
                                    cientos mujeres exigen que se erradique la violencia contra la 
                                    mujer. Algunas de las manifestantes plasmaron en pancartas 
                                    consignas como Vivas nos queremos, la fotografía de víctimas de 
                                    feminicidio o denuncias sobre violencia de género.
                                </p>
                            </div>
                        </div>
                        <div className="march-description">
                            <p> 
                                La manifestación terminará en el Zócalo de la Ciudad de México. 
                                Cerca de las 16:45 horas, el contingente ya se encontraba frente al
                                Palacio de Bellas Artes. El Día Naranja fue decretado por la 
                                Organización de las Naciones Unidas en 1999. Actualmente es un día es 
                                para visibilizar la violencia que sufren las mujeres y niñas en todo 
                                el mundo, de acuerdo con la Comisión Nacional para Prevenir y 
                                Erradicar la Violencia contra las Mujeres.
                            </p>
                            <p>
                            Datos de ONU Mujeres México retomados por la dependencia revelan 
                            que 43.9% de las mujeres que viven en México han enfrentado algún 
                            tipo de agresión por parte de su esposo o pareja. En tanto, 53.1% 
                            de fue agredida por alguien distinto a su pareja. Datos del INEGI 
                            de 2019 recalcan que en México matan a 10 mujeres al día. En México 
                            se conmemora el Día Naranja los días 25 de cada mes, siendo el 
                            primordial el 25 de noviembre.
                            </p>
                        </div>
                        <div className="march-container-comments">
                            <div className="march-comment">
                                <p>
                                    <i>"Estamos enojadas, asustadas, porque la violencia incrementa,
                                    lejos de disminuir"</i>
                                </p>
                            </div>
                            <div className="march-comment">
                                <p>
                                   <i> "Nos queremos vivas, libres y sin miedo. No puedo creer que
                                    siga protestando por esta mierda en 2020."</i>
                                </p>
                            </div>
                            <div className="march-comment">
                                <p>
                                    <i>"Para como está el estado, debería arder todo y sería pacifico
                                    Pero ahora queremos diferenciarnos de quienes destruyen
                                    mobiliario solo por destruirlo, que no se vea que nos sumamos
                                    a actos de destruir por destruir."</i>
                                </p>
                            </div>
                        </div>
                        
                        <div className="march-container-video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/xGUNwQICVW4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="march-sentence">
                            <h3>Por último, una frase para reflexionar</h3>
                            <p><i>
                                El feminismo es la idea radical que sostiene que las mujeres
                                somos personas
                            </i></p>
                            <p className="march-sentense-author">-Angela Davis</p>
                        </div>
                        <div className="container-return-button ">
                        <NavLink to="/">
                            <button className="pointer">Regresar</button>
                        </NavLink>
                    </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default MarchWomanDay
