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
    this.demo = this.demo.bind(this);


  }

  componentWillReceiveProps(nextProps){
 if(nextProps.currentUser && nextProps.currentUser.id){
   this.props.router.push('/app');
   }
 }

 componentDidUpdate() {
   this.redirectIfLoggedIn();

 }

 redirectIfLoggedIn() {
   if (this.props.loggedIn){
     this.props.router.replace("/main");
   }
 }


  toggleForm(){
    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

  demo(){
    this.props.demo()
  }

  render () {
    {
      return (<div>
        <nav>
          <div>Links</div>
        </nav>

        <div>
          <div>
            <h1>ALI</h1>
            <h3>Art of Language Institute</h3>
          </div>
          <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1487980485/imageedit_2_2657821040_nyko6e.png"/>
        </div>

      </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
