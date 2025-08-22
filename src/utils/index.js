import { icon } from '@fortawesome/fontawesome-svg-core'

export const educations = [
  {
    id: 1,
    name: 'University of Technology Sydney',
    degree: 'Master of Information Technology',
    major: 'Software Development',
    year: '2015-2017',
    logo: require('../assets/uts.png'),
  },
  {
    id: 2,
    name: 'Mahidol University',
    degree: 'Bachelor of Science, Information and Communication Technology',
    major: 'Computer Science',
    year: '2010-2013',
    logo: require('../assets/mahidol.png'),
  },
]

export const experiences = [
  {
    id: 1,
    name: 'Sentral Education',
    location: 'Sydney, Australia',
    position: 'Software Engineer',
    duration: 'Aug 2017 - Present',
    description: [
      `Developed and enhanced SPaRO Platform, the School Planning and Reporting Online
      (SPaRO) software platform to develop and deliver many School Excellence cycle
      components by using AngularJS, Vanilla JS, HTML, SCSS, AWS, Node.js and PHP`,
      `Developed and enhanced cloud-based school management platform trusted by more
      than 2,500 schools across Australia, by using HTML, jQuery, LESS and PHP`,
    ],
    logo: require('../assets/sentral.png'),
  },
  {
    id: 2,
    name: 'The IP Academy Pty Ltd',
    location: 'Sydney, Australia',
    position: 'Mobile Application Developer',
    duration: 'Sep 2015 - Jan 2017',
    description: [`Developed a greenfield iOS and Android Applications, "Suretek Project", that allows the
                  customer to configure video surveillances (MOBOTIX devices), add the devices into the
                  shopping cart, and export the ready-to-quote PDF for purchasing using Ionic
                  Framework and jsPDF.`],
    logo: require('../assets/ip.png'),
  }
]

export const contacts = [
  {
    id: 1,
    name: 'github',
    url: 'https://github.com/piyawutcha',
    icon: ['fab', 'github'],
  },
  {
    id: 2,
    name: 'linkedin',
    url: 'http://www.linkedin.com/in/piyawut-benz/',
    icon: ['fab', 'linkedin'],
  },
]