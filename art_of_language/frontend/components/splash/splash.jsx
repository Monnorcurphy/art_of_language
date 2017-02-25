import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
});

class Splash extends React.Component{

  constructor(props){
    super(props);
    this.state = {};



  }



  render () {
    {
      return (<div>


        <div className= 'main-splash-div'>
          <img className ='logo'src="http://res.cloudinary.com/dqiuefax1/image/upload/v1487980485/imageedit_2_2657821040_nyko6e.png"/>
            <div className= 'splash-text-div'>
              <div className='splash-main-text'>
                <h1 className= 'splash-main-a'>A</h1>
                <h1 className= 'splash-main-l'>L</h1>
                <h1 className= 'splash-main-i'>I</h1>
              </div>

              <div className='sub-heading-div'>
                <h2 className= 'splash-sub-text'>Art of Language Institute</h2>

              </div>
            </div>
        </div>

        <div className='splash-promotional'>
          <p className= 'tagline'>There is more to language <p className='burn'>than a textbook</p></p>

        </div>

      </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
