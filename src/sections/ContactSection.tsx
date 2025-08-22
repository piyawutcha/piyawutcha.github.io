import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { contacts } from '../utils/index';

const ContactSection = () => {
  return (
    <section className="bg-contact">
      <div className="flex flex-space-between justify-center items-center gap-5 py-4 text-white">
        { contacts.map(contact => {
          return (
            <div key={contact.id}  className="border-solid border-white border-[3px] w-20 h-20 rounded-full cursor-pointer hover:border-main hover:bg-main flex justify-center items-center">
              <a href={contact.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={contact.icon as IconProp} size="3x" />
              </a>
            </div>
          )
          })
        }
      </div>
    </section>
  )
}
export default ContactSection