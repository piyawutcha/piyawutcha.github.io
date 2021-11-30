import React, { Component } from 'react';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import WorkExp from './WorkExp/WorkExp';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

class Profile extends Component {
  render() {
    return (
      <div>
        <Home/>
        <AboutMe/>
        <Education/>
        <WorkExp/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default Profile;