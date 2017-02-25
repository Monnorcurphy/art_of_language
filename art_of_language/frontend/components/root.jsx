import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'

// react components
// <Route path="/main" component={MovieIndexContainer} onEnter={_ensureLoggedIn} />
import SessionFormContainer from './session_form/session_form_container';
import Splash from './splash/splash_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    };
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Splash}/>
        </Route>



      </Router>
    </Provider>
  );
};


export default Root;