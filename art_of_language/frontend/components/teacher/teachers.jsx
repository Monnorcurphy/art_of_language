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
                  <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255769/Liam_f6rips.jpg"/>
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
              <h2 className='heading'>Your Name Here</h2>
              <h4 className='heading'>Your Language</h4>
              <p>We are looking for diverse teachers, with different language
              backgrounds. Maybe you have lived in another country, you traveled
              extensively, you have made friends with different language
              proficiences, or something else! We want people who can reach our
              students, understand their needs, and are proficieint int their language
              of choice.</p>
          <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255772/Pillars_xfsjad.jpg"/>

            </div>
          </div>
          </div>
        </div>)
}}
}


export default withRouter(Teacher);
