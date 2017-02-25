import React from 'react';
import { Link } from 'react-router';
import Splash from './splash/splash_container';

const App = ({ children }) => (
  <div>
    <nav>
      <div className= 'nav-bar'>
        <div className= 'trendy'>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/main">Information</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/lessons">Lessons</Link></div>

        </div>
      </div>
    </nav>
    {children}
    <nav className = 'nav-bar bottom'>
      <div className= 'trendy'>
      <div><Link to="/">Logo and Tagline</Link></div>
      <div><a href="http://monnorcurphy.github.io">
                  Website Designer</a></div>
      </div>
    </nav>
  </div>
);

export default App;
