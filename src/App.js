import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import WelcomeScreenOne from './screens/WelcomeScreen/WelcomeScreenOne'
import WelcomeScreenTwo from './screens/WelcomeScreenTwo/WelcomeScreenTwo'
import WorkFlow from './screens/WorlFlow'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css'



const App = () => {
  return (
    <Router>

    <div>
    <Route path='/WorkFlow' component={WorkFlow} /> 
    <Route path='/onboardingTwo' component={WelcomeScreenTwo} /> 
    <Route path='/onboardingOne' component={WelcomeScreenOne} /> 
     <Route path='/' component={HomeScreen}   exact/>
    </div>
    </Router>




  )
}

export default App;
