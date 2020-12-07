import React from 'react';
import {BrowserRouter as Router, 
    Switch,
    Route,
    Redirect} from 'react-router-dom';
import EducativeModel from '../components/EducativeModel/EducativeModel';
import MainPage from '../components/MainPage';
import MarchWomanDay from '../components/MarchWomanDay/MarchWomanDay';
import ContainerMap from '../components/MexicoStates/ContainerMap';
import MexicoStatesMain from '../components/MexicoStates/MexicoStatesMain';
import MicromachismosMain from '../components/Micromachismos/MicromachismosMain';
import OlimpiaLaw from '../components/olimpiaLaw/OlimpiaLaw';
import TableMain from '../components/table/TableMain';
import WomenCrimes from '../components/WomenCrimes/WomenCrimes';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/Micromachismos" exact component={MicromachismosMain}/>
                <Route path="/FeminicidiosMexico2020" exact component={TableMain}/>
                <Route path="/MarchaDiaDeLaErradicacionDeLaViolenciaContraLaMujer" exact component={MarchWomanDay}/>
                <Route path="/ModeloEducativoConPerspectivaDeGenero" exact component={EducativeModel}/>
                <Route path="/LeyOlimpia" exact component={OlimpiaLaw}/>
                <Route path="/DelitosContraDeLasMujeres" exact component={WomenCrimes}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
