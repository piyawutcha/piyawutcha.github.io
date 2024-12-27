import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { contacts } from '../utils/index'

const ContactSection = () => {
  return (
    <section className="bg-contact">
      <div className="flex flex-space-between justify-center gap-5 items-center py-4 text-white">
        { contacts.map(contact => {
          return (
            <a href={contact.url} target="_blank" rel="noreferrer" className="border-solid border-white border-[3px] rounded-full p-4 cursor-pointer hover:border-main hover:bg-main">
              <FontAwesomeIcon icon={contact.icon} size="3x" />
            </a>
          )
        })
      }
      </div>
    </section>
  )
}

export default ContactSection