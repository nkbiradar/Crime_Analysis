import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Violent from './Components/Programs/Violent';
import Property from './Components/Property/Property';
import Cyber from './Components/cyber/cyber';
import WhiteCollar from './Components/whiteCollar/WhiteCollar';
import Juvenile from './Components/Juvenile/Juvenile';
import IPC from './Components/IPC/IPC';
import ChildAbuse from './Components/ChildAbuse/Child';
import ArrestedPersons from './Components/PersonArrested/IPC_SLL';
import PersonArrested from './Components/PersonArrested/IPC_SLL';
import CrimeAgainstWomen from './Components/CrimeAgainstWomen/Women';
import SpatialAnalysisMap from './Components/SpatialAnalysis/SpatialAnalysisMap';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* Uncomment this if you need to display a title */}
        {/* <Title subTitle='Violent crimes' title='Analyzing Patterns and Trends in Murder, Rape & Kidnapping' /> */}
        <Violent />
        <Property />
        <Cyber/>
        <WhiteCollar/>
        <Juvenile/>
        <IPC/>
        <ChildAbuse/>
        <PersonArrested/>
        <CrimeAgainstWomen/>
        <SpatialAnalysisMap/>
      </div>
    </div>
  );
}

export default App;
