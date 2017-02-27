import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
});

class Teacher extends React.Component{

  constructor(props){
    super(props);
    this.state = {};

  }



  render () {
    {
      return (<div>

          <div className= 'information-div'>
            <h2> </h2>
            <div className='orange about-wrapper'>
              <div className='inner-div liam-about'>
                <div className= 'teacher-images'>
                  <img src="assets/Liam.jpeg"/>
                </div>
                <span>
                  <h2 className='heading'>Liam Vogel</h2>
                  <h4 className='heading'>Spanish</h4>
                  <p>My name is Liam Vogel and I'm a professional Spanish
                  language teacher working out of Burbank.
                  I just moved back from Argentina in South America
                  and now I'm starting a private foreign language school.
                  I previously studied and lived in Mexico, Guatemala,
                  Colombia, and Argentina. </p>
                  <p>I am a distinguished alumni
                  of Mexico's Iberoamericana and la Universidad Católica
                  de la Argentina. I also am about to finish my BA in
                  Spanish Linguistics at Seattle University. Spanish is
                  my passion I would love to help you understand it and
                  teach you about the colorful cultures of Latin America.
                  Call or text me to schedule a lesson.</p>
              </span>
              </div>
            </div>

            <div className='red about-wrapper'>
            <div className='inner-div other-about'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src="assets/Pillars.jpg"/>

            </div>
          </div>
          </div>
        </div>)
}}
}


export default withRouter(Teacher);
