import React from 'react'

const DegradedBar = () => {
    return (
        <div className="container-degraded-bar">
            <div className="row-degraded-bar">
                <div className="item-degraded-bar ">
                    <div className="centered two-column">
                        <i className="far fa-bell-slash icon"></i>
                    </div>
                    <div className="centered ten-column">
                        <p>El 99.7% de los delitos de violencia sexual 
                        contra mujeres no se denuncia</p>
                    </div>
                </div>
                <div className="item-degraded-bar ">
                    <div className="centered two-column">
                        <i className="fas fa-arrow-up icon"></i>
                    </div>
                    <div className="centered ten-column">
                        <p>Durante la pandemia, la violencia contra la mujer aumento 20%</p>
                    </div>
                </div>
                <div className="item-degraded-bar ">
                    <div className="centered two-column">
                        <i className="fas fa-skull-crossbones icon"></i>
                    </div>
                    <div className="centered ten-column">
                        <p>10 mujeres son asesinadas cada día en México</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DegradedBar
