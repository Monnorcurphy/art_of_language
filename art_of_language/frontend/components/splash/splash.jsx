import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';
mo
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

// ADD A MOVIE-SEARCH DIV, CHECK APPLICATION CSS FOR NAME

  render () {
    {
    return (<div className='splash-div'>
    <nav className='header'>
      <div className='logo-div'><Link to="/" className="header-bar">
          <h1 className= 'splash logo'></h1>
      </Link>
    </div>

      <div className='login-signup'>
        <div className= 'login-div'>
          <button className= 'login'>Login</button>
        </div>
        <div className='signup-div'>
        <button className= 'signup'>Sign up</button>
        </div>
      </div>

         <SessionFormContainer formType={this.state.formType}
          />

    </nav>


    <div className ='over-demo'>
      <div>
      <h2 className='attention-line'>Tons of Trailers</h2>
      </div>
      <div>
      <p className='tag-line'>Only a few clicks away.</p>
      </div>
      <div>
      <button className='splash-demo' onClick= {this.demo}>Demo Login</button>
      </div>
    </div>




        <nav className= 'footer'>
          <div className='legal'>
          <p className="copyright">© 2016 Fakeflix. All rights reserved.</p>
          </div>
          <div className="contact-info">
            <div className='linkedin-div'>
              <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="linkedin ">
                LinkedIn</a>
            </div>
            <div className= 'github-div' >
              <a href="https://github.com/Monnorcurphy/fullstack" className="github">
                Github</a>
            </div>
          </div>
      </nav>
  </div>)
}}
}

Splash.contextTypes = {
  store: React.PropTypes.object
}

export default withRouter(Splash);
