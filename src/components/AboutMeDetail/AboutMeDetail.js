import React from 'react';
import './AboutMeDetail.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import about_me_img from '../../assets/aboutme.jpg';

const about_me_detail = () => (
  <div className="detail">
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" gutterBottom>About Me</Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis porta quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ultricies tortor at tempus fringilla.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Mauris interdum elit quam, quis ultricies lacus lacinia vitae. Phasellus in nibh cursus, hendrerit mi eu, auctor massa.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={about_me_img} width="100%" alt="about_me"/>
      </Grid>
    </Grid>
  </div>
);

export default about_me_detail;