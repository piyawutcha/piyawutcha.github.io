import React, { Component } from 'react';
import './WorkExp.css';
import Work from '../../../components/Work/Work';
import Typography from '@material-ui/core/Typography';

class WorkExp extends Component {
  state = {
    works : [
      {
        id : 1,
        abbr : 'sen',
        name : 'Sentral Education',
        location : 'Sydney, Australia',
        position : 'Full Stack Developer',
        type : 'Full Time',
        period : 'Aug 2017 - Present',
        description : 'Developed and enhanced cloud-based school management platform trusted by more than 2,800 schools across Australia, by using PHP, HTML5, jQuery and LESS',
      },
      {
        id : 2,
        abbr : 'mx',
        name : 'The IP Academy Pty Ltd',
        location : 'Sydney, Australia',
        position : 'Mobile Application Developer',
        type : 'Casual',
        period : 'Sep 2015 - Jan 2017',
        description : 'Developed iOS and Android applications, that allows the customer to configure video surveillances, add the devices into the shopping cart, and export the ready-to-quote PDF for purchasing using Ionic Framework',
      },
    ]
  }

  render() {
    const works = this.state.works.map(work => {
      return (
        <Work
          id={work.id}
          name={work.name}
          location={work.location}
          position={work.position}
          type={work.type}
          period={work.period}
          description={work.description}
          abbr={work.abbr}
          key={work.abbr}
        />
      )
    })
    return (
      <div className="work_exp">
        <div className="work_container">
          <Typography variant="h2" gutterBottom>Work Experience</Typography>
          {works}
          <Work id="blank"/>
        </div>
      </div>
    )
  }
}

export default WorkExp;