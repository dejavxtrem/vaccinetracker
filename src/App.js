import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import WelcomeScreenOne from './screens/WelcomeScreen/WelcomeScreenOne'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css'



const App = () => {
  return (
    <Router>

    <div>
    <Route path='/onboardingOne' component={WelcomeScreenOne} /> 
     <Route path='/' component={HomeScreen}   exact/>
    </div>
    </Router>




  )
}

export default App;
