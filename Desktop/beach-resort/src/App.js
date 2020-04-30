import React from 'react';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import About from './components/pages/About';
import Error from './components/pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/rooms" exact  component={Rooms} />
     <Route path="/about" exact component={About} />
     <Route path="/rooms/:delaquash" exact  component={SingleRoom} />
     <Route  component={Error} />
    </Switch>
    </>
  );
}

export default App;
