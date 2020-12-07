import React, { useState } from 'react';
import { headings } from '../../data/headingsMicromachismos';
import { descriptions } from '../../data/descriptionsMicromachismos';
import { NavLink } from 'react-router-dom';

const MicromachismosMain = () => {
    
    const [imageNumber, setimageNumber] = useState(1);
    

    const increment = () => {
        if(imageNumber == 10)setimageNumber(1);
        else setimageNumber(imageNumber + 1);
    }

    const decrement = () => {
        if( imageNumber == 1 ) setimageNumber(10);
        else setimageNumber(imageNumber - 1);
    }


    return (
        <div className="micro-container animate__animated animate__fadeIn">
            <div className="micro-container-title">
                <h1>Micromachismos, un problema grave, que no es considerado como tal</h1>
            </div>
            <div className="container-micro-introduction">
                <div className="micro-introduction">
                    <h2>
                        Qué son los micromachismos,
                        ¿Porque nunca había escuchado sobre ellos?
                    </h2>
                    <p>
                        La razón por la cual muchas personas no los conocen, o no habían
                        escuchado hablar respecto a ellos, es porque son considerados
                        "normales" e "inofensivos". 
                    </p>
                    <h3>{imageNumber}.- {headings[imageNumber-1]}</h3>
                    <div className="centered-image">
                        <div style={{backgroundImage: `url(../assets/img/q${imageNumber}.jpg)`}} 
                         className="micro-container-images">
                            <div className="left-button pointer" onClick={decrement}>
                                <i className="fas fa-angle-left"></i>
                            </div>
                            <div className="right-button pointer" onClick={increment}>
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <p className="p-micro-description">
                        {descriptions[ imageNumber - 1] }
                    </p>
                    <div className="sentence">
                    <h4>
                        Mi papá me dijo: "¿Saben qué van a lograr? 
                        que ya no les digamos más nada en la calle,
                        ya nadie las va a mirar" ...Esperemos que sea así
                    </h4>
                    </div>
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

export default MicromachismosMain
