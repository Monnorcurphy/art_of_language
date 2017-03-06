import React from 'react';
import { Link } from 'react-router';
import Splash from './splash/splash_container';

const App = ({ children }) => (
  <div>
    <nav>
      <div className= 'nav-bar'>
        <div className= 'trendy'>
        <div><Link to="/teachers">Teachers</Link></div>
        <div><Link to="/main">Information</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/lessons">Lessons</Link></div>

        </div>
      </div>
    </nav>
    <div><Link to='/'><img className='splash-logo' src="http://res.cloudinary.com/dqiuefax1/image/upload/v1487980485/imageedit_2_2657821040_nyko6e.png"/></Link></div>
    {children}
    <nav className = 'nav-bar bottom'>
      <div className= 'trendy'>
      <div><a href="http://monnorcurphy.github.io">
                  Website Designer</a></div>
      </div>
    </nav>
  </div>
);

export default App;
