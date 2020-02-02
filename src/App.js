import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/profile/:name'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
