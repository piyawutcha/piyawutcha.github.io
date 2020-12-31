import React from 'react';
import './Work.css';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sentral_logo from '../../assets/works/sentral.png';
import ip_logo from '../../assets/works/ip.png';

const work = (props) => (
  <div className={props.id !== 'blank' ? 'work' : 'work_blank'}>
    <div className="work_logo">
      {props.id !== 'blank' ?
        <img src={props.abbr === 'sen' ? sentral_logo : ip_logo} alt={props.name} width="80%"/>
      : <FontAwesomeIcon icon="graduation-cap"/>}
    </div>
    {props.id !== 'blank' ?
    <div className={props.id % 2 === 0 ? 'work_details work_details_right' : 'work_details work_details_left'}>
      <Typography variant="h6" gutterBottom display="inline">
        {props.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom display="inline">
        &nbsp;-&nbsp;{props.location}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {props.position} ({props.type})
      </Typography>
      <Typography variant="body2"gutterBottom>
        {props.period}
      </Typography>
      <Typography variant="body2">
        {props.description}
      </Typography>
    </div>
    : '' }
  </div>
);

export default work;