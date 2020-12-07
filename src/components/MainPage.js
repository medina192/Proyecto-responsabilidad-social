import React from 'react';
import NavBar from '../components/NavBar';
import MainImage from '../components/MainImage'
import InformativeCards from './InformativeCards';
import DegradedBar from '../components/DegradedBar'
import LawOlimpia from './LawOlimpia';
import WomenHelp from './WomenHelp';
import Footer from './Footer';

const MainPage = () => {
    return (
        <>
          {/*<NavBar/>*/} 
          <MainImage/>
          <DegradedBar/>
          <InformativeCards/>
          <LawOlimpia/>
          <WomenHelp/>
          <Footer/>
        </>
    );
}

export default MainPage
