import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
});

class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state = {};



  }



  render () {
    {
      return (<div className= 'information-div'>
        <h2 className= 'information-title'> </h2>
        <div className= 'green'>
          <div className='inner-div'>
            <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255772/IMG_0209_okurs7.jpg"/>
            <span>
              <h2 className='heading'>Coming soon!</h2>
              <p>A-L-I is currently looking for teachers to make sure that we can service a broad range of students. We expect to have our business up and running around July of 2017. We appreciate your excitement, and look forward to seeing you then!</p>
              </span>
        </div>
        </div>


        <div className='orange contact'>
          <div className='inner-div'>

            <span>
              <h2 className='heading'>Interested in Teaching for A-L-I</h2>
            <p>Our teachers should be diverse, and should recognize that there is more to language
            than teaching nouns, adjectives, and various cognates. We want teachers who are
            both proficient in their language, and know how to make the subject interesting for
            the diverse students we service. You might be helping business leaders, people who are
            bettering themselves, or students, be they college, or high school age. This means
            you must be adatable, and help your students in their own unqiue way. If you think you
            can meet these requirements, let us know!</p>
          </span>
          <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255775/Carnival_nwbdun.jpg"/>
          </div>
        </div>

      </div>)
}}
}




export default withRouter(Contact);
