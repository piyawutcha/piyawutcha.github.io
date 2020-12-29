import React from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import profile_picture from '../../../assets/profile.jpg';

const home = () => (
  <div className="home">
    <img src={profile_picture} width="200" alt="home_img" className="profile_picture"/>
    <Typography variant="h2">Piyawut Chantasrisawat</Typography>
    <Typography variant="h2" gutterBottom>(Benz)</Typography>
    <Typography variant="h4" gutterBottom>Software Developer based in Sydney, Australia.</Typography>
  </div>
);

export default home;