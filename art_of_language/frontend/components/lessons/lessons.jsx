import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
});

class Lesson extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }


  render () {
    {
      return (<div>
        <h2 className= 'information-title'> </h2>

        <div className='red'>
          <div className='inner-div'>
            <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255775/Carnival_nwbdun.jpg"/>
            <span>
              <h2 className='heading'>Our rates</h2>
              <p>We understand that our students want to learn, and they don't want to
              pay too much. Our rates are cheaper than other tutoring services, and we
              guarentee that you will be more fulfilled from them. We want you to learn
              and make sure you are having fun while you are doing it.</p>
              </span>
            </div>
        </div>


        <div className='blue lessons'>
          <div className='inner-div'>

            <span>
              <h2 className='heading'>Different Teachers</h2>
            <p>We recognize that teachers might have different proficiencies,
            and therefore might meet your needs in different ways. Becuase of
            this each teacher chooses their own rate, since they have to
            determine what is best for them. We have every teacher's rate
            listed along with their background and experience, so that you
            can choose the best one for you.
            </p>
          </span>
          <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255772/Pillars_xfsjad.jpg"/>
          </div>
        </div>

      </div>)
}}
}



export default withRouter(Lesson);
