import React from 'react';
import './School.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import uts_logo from '../../assets/uts.png';
import mahidol_logo  from '../../assets/mahidol.png';

const school = (props) => (
  <div className="school">
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item alignItems="center" xs={2}>
        <img alt="test" className="school_logo" src={props.abbr === 'MU' ? mahidol_logo : uts_logo} width="100%"/>
      </Grid>
      <Grid item xs={10} container direction="column" style={{paddingLeft: 24}}>
        <Typography variant="h6" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {props.degree}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {props.major}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.period}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default school;