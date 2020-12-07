import React from 'react';
import { NavLink } from 'react-router-dom';

const EducativeModel = () => {
    return (
        <div className="body-Educative-model animate__animated animate__fadeIn">
            <div className="container-shadow">
                <div className="educ-container-main-image">
                    <div className="educ-main-image">
                    </div>
                </div>
                <div className="educ-container-content">
                    <div className="container-title-image">
                        <div className="title-image">
                            <div className="title-text seven-column">
                                <h2>¿Cuales son los modelos educativos actuales?,
                                    y que hay de malo con ellos?
                                </h2>
                            </div>
                            <div className="educ-image five-column"></div>
                        </div>
                    </div>
                    <div className="educ-p">
                        <p>
                            La educación impartida en los niños y jovenes es muy influyente
                            en el comportamiento y personalidad que desarrollan los adultos,
                            ya que es un lugar en el que se desarrollan desde pequeños hasta
                            la etapa adulta.
                        </p>
                    </div>
                    <div className="traditional-model">
                        <h3>1.- Modelo Educativo Tradicionalista</h3>
                        <div className="traditional-container-image">
                            <div className="traditional-image"></div>
                        </div>
                        <p className="educ-p">
                            Un Modelo educativo tradicionalista propone al docente como emisor desde 
                            donde fluye la información, como la persona que ejerce el control y el 
                            poder autoritario sobre el conocimiento y sobre la conducta del alumnado. 
                            Las personas que se educan bajo este modelo se convierten en receptores del 
                            conocimiento, generalmente su participación tiende a ser pasiva y serán un 
                            eslabón más de la sociedad tradicionalista.
                        </p>
                        <p className="educ-p"> 
                            Este modelo, al enmarcarse en ideas de construcción natural, ubica a los
                            hombres y a las mujeres en espacios sociales que se piensan naturales e 
                            inmutables. No son visibilizados como seres con iguales derechos e iguales
                            oportunidades de realización. Asimismo, al considerar el mundo como 
                            inmutable, se fomenta una lucha para hacer que el mundo, es decir, las 
                            relaciones sociales no cambien. Difícilmente desde una postura 
                            tradicionalista se construyen relaciones equitativas.
                        </p>
                    </div>
                    <div className="Liberal-model">
                        <h3>2.- Modelo Educativo Liberal</h3>
                        <div className="liberal-container-image">
                            <div className="liberal-image"></div>
                        </div>
                        <p className="educ-p">
                            El modelo liberal propone cambios en las personas que forman parte del
                            proceso educativo, por ejemplo, el profesorado debe ejercer autoridad 
                            y no autoritarismo, deben orientar y guiar en función de los intereses
                            de los alumnos. Se propone que el alumnado sea activo y responsable 
                            de su propio auto conocimiento, con una apertura mental y una 
                            voluntad para construir posturas conscientes de la realidad que 
                            pueden pasar desapercibidas, para elaborar crítica constructiva de 
                            los problemas del entorno social e histórico que les tocó vivir. Por 
                            ejemplo, problemas de orden político, educativo, laborales, pobreza,
                            represión, impunidad, violencia, concentración de la riqueza, pérdida 
                            del poder adquisitivo, deterioro ecológico, contaminación, desigualdad, 
                            exclusión e inequidad en las relaciones entre hombres y mujeres, entre otros.
                        </p>
                        <p className="educ-p"> 
                            Desde esta propuesta, la Epistemología del conocimiento debe basarse en 
                            a enseñanza de capacidades de análisis, comparación, elección, 
                            confrontación, así como en la posibilidad de sustentar la elección 
                            personal y los proyectos con argumentos racionales.
                        </p>
                        <p className="educ-p">
                        El pensamiento respecto a las mujeres tiene tintes feministas, propone que 
                        se concedan a las mujeres los mismos derechos y la misma protección de las 
                        leyes. Los grandes temas en una agenda de equidad de género siguen siendo 
                        el acceso de las mujeres a los mismos derechos otorgados a los hombres, 
                        obtener la misma protección legal e igualdad en el acceso de oportunidades.
                        </p>
                    </div>
                    <h2>Entonces, ¿qué modelo educativo se propone?, si los anteriores
                        no son los mas adecuados
                    </h2>
                    <div className="educative-model">
                        <h3>3.- Modelo Educativo con Perspectiva de Género</h3>
                        <div className="educative-container-image">
                            <div className="educative-image"></div>
                        </div>
                        <p className="educ-p">
                            Un Modelo educativo con perspectiva de género debe de tomar en cuenta lo 
                            siguiente:
                        </p>
                        <p className="educ-p"> 
                            <span>I- </span>Redistribución equitativa de las actividades entre los sexos,
                            en la esfera pública y privada,
                        </p>
                        <p className="educ-p"> 
                            <span>II-</span> Justa valoración de los distintos trabajos que realizan las mujeres y los hombres,
                        </p>
                        <p className="educ-p"> 
                            <span>III-</span> modificación de las estructuras sociales, reglas, horarios, mecanismos, prácticas y
                            valoresque reproducen desigualdades
                        </p>
                        <p className="educ-p"> 
                            <span>IV-</span>IV- fortalecimiento del poder de gestión y decisión de las mujeres.
                        </p>
                        <p className="educ-p"> 
                            Virginia Woolf indica que hace siglos que las mujeres han servido de 
                            espejos dotados de la virtud mágica y deliciosa de reflejar la figura del
                            hombre, dos veces agrandada (Woolf, 2000: 97). Este aprendizaje de que las
                            mujeres sean espejos y los hombres las utilicen para proyectar su ser se 
                            ha generado en la familia y también en la escuela, y no es una idea que refleje 
                            equidad.
                        </p>
                    </div>
                    <p className="educ-p-thanks">
                        Esta información se extrajo del artículo de la profesora Rosa María González
                        Ortíz, docente de la UNAM.
                    </p>
                    <div className="container-return-button ">
                        <NavLink to="/">
                            <button className="pointer">Regresar</button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EducativeModel
