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
      `Led development and enhancement of SPaRO, a web-based planning/reporting
      platform for the NSW Department of Education using AngularJS, Vanilla JS, HTML,
      SCSS, Node.js, PHP and AWS`,
      `Collaborated directly with stakeholders (NSW Department of Education) to define
      product goals, gather requirements and align project outcome with user needs and
      goals for SPaRO application`,
      `Engineered and maintained core features for Sentral, a cloud-based school
      management system widely used and trusted by thousands of schools in Australia by
      using HTML, jQuery, LESS and PHP`
    ],
    logo: require('../assets/sentral.png'),
  },
  {
    id: 2,
    name: 'The IP Academy Pty Ltd',
    location: 'Sydney, Australia',
    position: 'Mobile Application Developer',
    duration: 'Sep 2015 - Jan 2017',
    description: [`Designed and developed a Greenfield mobile application, Suretek Project, on iOS and
                  Android using Ionic Framework, enabling customers to configure MOBOTIX video
                  surveillance devices and generate ready-to-quote PDF proposals via jsPDF integration`],
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
    url: 'https://www.linkedin.com/in/piyawut-benz/',
    icon: ['fab', 'linkedin'],
  },
  {
    id: 3,
    name: 'facebook',
    url: 'https://www.facebook.com',
    icon: ['fab', 'facebook'],
  },
  {
    id: 4,
    name: 'youtube',
    url: 'https://www.youtube.com',
    icon: ['fab', 'youtube'],
  },
  {
    id: 5,
    name: 'x',
    url: 'https://www.twitter.com',
    icon: ['fab', 'twitter'],
  }
]