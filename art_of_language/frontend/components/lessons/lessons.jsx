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
      return (<div className= 'information-div'>
        <h2 className= 'information-title'>You want I should learn you real good</h2>

        <div className='red'>
          <div className= 'inner-div'>
            <img src="assets/Carnival.jpg"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <h2 className='ali-h2'>Nonsense</h2>
        <div className='blue lessons'>
          <div className='inner-div'>
            <img src="assets/Pillars.jpg"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </div>

      </div>)
}}
}



export default withRouter(Lesson);
