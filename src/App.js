// import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename='/'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
