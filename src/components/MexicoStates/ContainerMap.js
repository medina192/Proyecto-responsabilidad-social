import React from 'react'
import MexicoStatesMain from './MexicoStatesMain'

const ContainerMap = () => {
    return (
        <div>
            <MexicoStatesMain
                googleMapUrl= "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCfX_V0z7cccCjONreO3fG0Ti5ABC7FDpw"
                containerElement= {<div style={{height: '400px'}} />} 
                mapElement= {<div style={{height: '100%'}} /> }
                loadingElement= {<p>Loading...</p>}
            />
        </div>
    )
}

export default ContainerMap
