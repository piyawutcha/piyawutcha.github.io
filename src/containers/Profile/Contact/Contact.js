import React, { Component } from 'react';
import './Contact.css';
import ContactLink from '../../../components/ContactLink/ContactLink';

class Contact extends Component {
  state = {
    contacts : [
      {
        title : 'GitHub',
        link : 'https://github.com/piyawutcha',
        icon : 'github',
      },
      // {
      //   title : 'Instagram',
      //   link : '',
      //   icon : 'instagram',
      // },
      // {
      //   title : 'Twitter',
      //   link : '',
      //   icon : 'twitter',
      // },
      {
        title : 'Linkedin',
        link : 'https://www.linkedin.com/in/piyawut-chantasrisawat-bab2953a/',
        icon : 'linkedin-in',
      },
    ]
  }

  render() {
    const contact_links = this.state.contacts.map(contact => {
      return (
        <ContactLink title={contact.title} icon={contact.icon} link={contact.link} key={contact.title}/>
      )
    })
    return (
      <div className="contact">
        {contact_links}
      </div>
    )
  }
}

export default Contact;