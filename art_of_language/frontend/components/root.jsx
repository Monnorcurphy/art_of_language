import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'

// react components
import SessionFormContainer from './session_form/session_form_container';
import Splash from './splash/splash_container';
import Main from './main/main_container';
import Teachers from './teacher/teachers_container';
import Contact from './contact/contact_container';
import Lesson from './lessons/lessons_container';


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
            <Route path="/main" component={Main} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/contact" component={Contact} />
            <Route path="/lessons" component={Lesson} />

        </Route>


      </Router>
    </Provider>
  );
};


export default Root;
