import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { contacts } from '../utils/index';

const Footer = () => {
  return (
    <footer className="bg-contact w-full flex items-center justify-between px-4">
      <div className="w-52 text-sm font-light">
        By Piyawut C.
      </div>
      <div>
        <div className="flex justify-center items-center grow gap-5 py-4 text-white">
          { contacts.map(contact => {
            return (
              <div key={contact.id}  className="cursor-pointer flex justify-center items-center flex-1">
                <a href={contact.url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={contact.icon as IconProp} className="text-2xl hover:scale-125" />
                </a>
              </div>
            )
            })
          }
        </div>
      </div>
      <div className="w-52 text-sm text-right font-light">
        © 2025 piyawutcha.github.io
      </div>
    </footer>
  )
}
export default Footer