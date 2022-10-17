import  React from 'react';
import Header from './Header';
import './App.css';
import './ToggleVisibility';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import BgLandingPage from './ToggleVisibility';


function App() {
  return (
    <Router>
    <div className='app'>
       
      <BgLandingPage>
        <Header />
        <AnimatedRoutes />
      </BgLandingPage>
    </div>
   </Router>
  );
}

export default App;
