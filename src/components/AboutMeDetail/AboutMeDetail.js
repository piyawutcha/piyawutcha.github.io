import React from 'react';
import './AboutMeDetail.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import about_me_img from '../../assets/aboutme.jpg';

const about_me_detail = () => (
  <div className="detail">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="subtitle1" gutterBottom>
          I'm Benz, Thai software developer based in Sydney who has a Bachelor of Sciences in Computer Science from Mahidol University, Thailand and Master of IT from University of Technology Sydney, Australia.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Now, I'm working with Sentral Education, a cloud-based school management platform trusted by more than 3,000 schools across Australia.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={about_me_img} width="100%" alt="about_me"/>
      </Grid>
    </Grid>
  </div>
);

export default about_me_detail;