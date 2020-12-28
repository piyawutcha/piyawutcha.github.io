import React, { Component } from 'react';
import './Education.css';
import School from '../../../components/School/School';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Education extends Component {
  state = {
    schools : [
      {
        abbr : 'MU',
        name : 'Mahidol University',
        degree : 'Bachelor of Science, Information and Communication Technology',
        major : 'Computer Science',
        period : '2010 - 2013',
      },
      {
        abbr : 'UTS',
        name : 'University of Techonlogy Sydney',
        degree : 'Master of Information Technology',
        major : 'Software Development',
        period : '2015 - 2017',
      },
    ]
  }

  render() {
    const schools = this.state.schools.map(school => {
      return (
        <School name={school.name} degree={school.degree} major={school.major} period={school.period} abbr={school.abbr} key ={school.abbr}/>
      )
    });

    return (
      <div className="education">
        <div className="school_container">
          <Grid container>
            <Grid item xs={12} sm={12}>
            <Typography variant="h2">Education</Typography>
            {schools}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Education;