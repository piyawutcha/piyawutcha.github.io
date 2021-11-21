import React, { Component } from 'react';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import WorkExp from './WorkExp/WorkExp';
import Achievement from './Achievement/Achievement';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Menu from '../../components/Menu/Menu';

class Profile extends Component {
  render() {
    return (
      <div>
        {/* <Menu/> */}
        <Home/>
        <AboutMe/>
        <Education/>
        <WorkExp/>
        {/* <Achievement/> */}
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default Profile;