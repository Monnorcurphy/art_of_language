import React from 'react';
import { Link,  withRouter} from 'react-router';
import {demo} from '../../actions/session_actions';
import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
});

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {};



  }


  render () {
    {
      return (<div className= 'main-div'>
        <h2 className= 'information-title'></h2>
        <div className='blue'>
          <div className='inner-div'>
            <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255773/Moutains_scrovk.jpg"/>
            <span>
              <h2 className= 'heading'>ALI's Mission</h2>
          <p>ALI is committed to making you a citizen of your language.
            That means taking you past fluency, to understanding the
            values, the culture, and the history of where your language
            is spoken. Our teachers all have experience traveling, and
            understand what it means to navigate through new experiences
            in a new country, using a new language.</p>

          <p>Whether your goal is to travel to a new place, to bring
          multiculturalism to your business, or to just master a new
          skill ALI, is happy to adjust our teaching to meet your needs.</p>

          </span>
          </div>
        </div>

        <div className='green information'>
          <div className='inner-div'>
            <span>
              <h2 className= 'heading'>The purpose of ALI</h2>
            <p>Liam Vogel founded the school when he recognized an issue
              with the way languages are taught in schools. Most often,
              people feel forced to learn a language, becuase of the needs
              of their business, or because of academia. Liam wanted to
              bring his love of learning Spanish to others. He recognized
              that there was a larger demand than he could fill alone,
              and decided to found a business, with other teachers who
              shared his values.
            </p>
            <p>Today, Liam has founded the business to help students,
              professionals, and newbies in order to help them love the
              language they are learning. Textbooks often focus on a very
              clinical way of learning a language. We could look at art
              the same way, focusing on the skill involved, but when we
              do something the beauty is lost, and that is why Liam
              founded ALI.
            </p>
          </span>
            <img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1488255772/Pillars_xfsjad.jpg"/>
          </div>
        </div>

      </div>)
}}
}



export default withRouter(Main);
