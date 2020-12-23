import React from 'react';
import './ContactLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contact_link = (props) => (
  <a href={props.link} target="_blank" rel="noopener noreferrer" className="contact_link">
    <FontAwesomeIcon icon={['fab', props.icon]} />
  </a>
);

export default contact_link;