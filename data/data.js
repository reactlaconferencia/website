import React from 'react';

export const data = {
  links: {
    cfp: 'https://forms.gle/Js2ohTHi8yvENuNs9',
    team: 'https://forms.gle/GnDZ5f5zDPF79wxB8',
    community: 'https://forms.gle/hBXbTV7DYBsRXiQTA',
    sponsors: 'https://forms.gle/MnJNbzU4K5WohuhN9',
    tickets: 'https://ti.to/react-la-conferencia/2020/',
    cssConf: 'https://cssconf.co/tickets',
  },
  about: {
    title: 'About us',
    content:
      'We are the first React conference for Spanish speakers in Latin America. This is an event by the community to the community! Come and find the latest knowledge and awesome experiences around React in Medellín, Colombia.',
  },
  numbers: {
    title: 'The conference in numbers',
    fineprint: 'July 18 - Conference',
    content: [
      <>
        <span>300+</span>
        <span>people</span>
      </>,
      <>
        <span>1</span> <span>track</span>
      </>,
      <>
        <span>11</span> <span>speakers</span>
      </>,
    ],
  },
  tickets: {
    title: 'Tickets 🎟',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper neque nunc mattis id gravida porttitor.',
  },
  getHere: {
    title: 'Get here 🌍',
    content: {
      medellin:
        'Medellín is the Colombian tech hub. With a strong presence of different tech companies from different parts of the world.',
      airport:
        'You’ll arrive at Jose María Córdoba International airport, located in Rionegro which is a 25 minute drive from Medellín',
      hotels: [
        { name: 'Diez Hotel', url: 'https://www.diezhotel.com/' },
        { name: 'Viaggio hotel', url: 'https://www.viaggiomedellin.com/' },
      ],
    },
    images: {
      medellin: 'medellin.jpg',
    },
  },
  schedule: {
    title: 'Schedule 📅',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper neque nunc mattis id gravida porttitor.',
  },
  sponsors: {
    title: 'Sponsors',
    content: 'This wonderful event is posible thanks to this amazing companies',
    companies: {
      platinum: [
        {
          name: 'Ruta N',
          image: 'rutan.png',
        },
      ],
      gold: [],
      silver: [],
      bronze: [],
    },
  },
  venue: {
    title: 'Venue',
    content: 'Complejo Ruta N Calle 67 Nº 52-20, Medellín - Colombia',
  },
  team: {
    title: 'Team',
    content: 'Brought you by these awesome folks',
    people: [
      {
        name: 'Mateo Garcia',
        image: 'team/mateo.jpeg',
        company: 'Globant',
        website: 'https://twitter.com/JMGR2996',
        handle: 'JMGR2996',
      },
      {
        name: 'Alejandro Nanez',
        image: 'team/alejo.jpeg',
        company: 'Zapier',
        website: 'https://twitter.com/alejandronanez',
        handle: 'alejandronanez',
      },
      {
        name: 'Simón Hoyos',
        image: 'team/simon.jpeg',
        company: 'Make it Real',
        website: 'https://twitter.com/simonhoyosdev',
        handle: 'simonhoyosdev',
      },
      {
        name: 'Jorge Morales',
        image: 'team/jorge.jpeg',
        company: '',
        website: 'https://twitter.com/jorgeenlaolla',
        handle: 'jorgeenlaolla',
      },
      {
        name: 'Willy Prado',
        image: 'team/willy.jpeg',
        company: '',
        website: 'https://twitter.com/willyprados',
        handle: 'willyprados',
      },
      {
        name: 'Angela Ordoñez',
        image: 'team/angela.jpeg',
        company: 'Globant',
        website: 'https://twitter.com/angelitaooo',
        handle: 'angelitaooo',
      },
      {
        name: 'Alejandro Garcìa',
        image: 'team/alejandro.jpeg',
        company: '',
        website: 'https://twitter.com/alejogs4',
        handle: 'alejogs4',
      },
      {
        name: 'Lina Marìa Montaño',
        image: 'team/lina.jpeg',
        company: '',
        website: 'https://twitter.com/calypsobronte',
        handle: 'calypsobronte',
      },
      {
        name: 'Juan Naranjo',
        image: 'team/juan.jpeg',
        company: '',
        website: 'https://twitter.com/reactlaconf',
        handle: '',
      },
    ],
  },
  speakers: {
    title: 'Speakers',
    content: 'We are honored to have such a great initial lineup.',
    people: [
      {
        name: 'Donavon West',
        image: 'speakers/donavon.jpg',
        extra: '🇺🇸',
        website: 'https://twitter.com/donavon',
        handle: 'donavon',
      },
      {
        name: 'Maria Fernanda Serna',
        image: 'speakers/maria-fernanda.jpg',
        extra: '🇨🇴',
        website: 'https://twitter.com/mafesernaarbole',
        handle: 'mafesernaarbole',
      },
      {
        name: 'Ely Alvarado',
        image: 'speakers/ely.png',
        extra: '🇻🇪',
        website: 'https://twitter.com/elyalvarado',
        handle: 'elyalvarado',
      },
      {
        name: 'Stacie Taylor-Cima',
        image: 'speakers/stacie.jpg',
        extra: '🇺🇸',
        website: 'https://twitter.com/the_real_stacie',
        handle: 'the_real_stacie',
      },
      {
        name: 'Max Stoiber',
        image: 'speakers/max.jpeg',
        extra: '🇦🇹',
        website: 'https://twitter.com/mxstbr',
        handle: 'mxstbr',
      },
      {
        name: 'Andrew Levine',
        image: 'speakers/andrew.png',
        extra: '🇺🇸',
        website: 'https://twitter.com/drewml',
        handle: 'drewml',
      },
      {
        name: 'CFP is open!',
        image: 'speakers/avatar.svg',
        extra: '🌍',
        website: 'https://forms.gle/Js2ohTHi8yvENuNs9',
      },
    ],
  },
  community: {
    title: 'Community Partners',
    content: 'Different countries, one community.',
    partners: [
      {
        name: 'React Medellín',
        image: 'community/react-medellin.svg',
        country: 'Colombia',
        website: 'https://meetup.com/react-medellin/',
      },
      {
        name: 'React Bolivia',
        image: 'community/react-bolivia.png',
        country: 'Bolivia',
        website: 'https://twitter.com/reactbolivia',
      },
      {
        name: 'Horchata JS',
        image: 'community/horchata-js.png',
        country: 'El Salvador',
        website: 'https://twitter.com/HorchataJS',
      },
      {
        name: 'React New York',
        image: 'community/react-new-york.svg',
        country: 'USA',
        website: 'https://reactnewyork.com/',
      },
      {
        name: 'React Norway',
        image: 'community/react-norway.svg',
        country: 'Norway',
        website: 'https://reactnorway.com/',
      },
      {
        name: 'React Finland',
        image: 'community/react-finland.svg',
        country: 'Finland',
        website: 'https://twitter.com/reactfinland',
      },
      {
        name: 'React Native EU',
        image: 'community/react-native-europe.png',
        country: 'Poland',
        website:
          'https://www.react-native.eu/?utm_source=partner&utm_medium=referral&utm_campaign=ReactLaConferencia',
      },
      {
        name: 'Dev.to',
        image: 'community/devto.png',
        country: '🌍',
        website: 'https://dev.to',
      },
      {
        name: 'MedellínJS',
        image: 'community/medellin-js.svg',
        country: 'Colombia',
        website: 'https://meetup.com/MedellinJS',
      },
      {
        name: 'ReactJS Cali',
        image: 'community/react-cali.svg',
        country: 'Colombia',
        website: 'https://twitter.com/reactjscali',
      },
      {
        name: 'React Panama',
        image: 'community/react-panama.png',
        country: 'Panamá',
        website: 'https://www.meetup.com/React-Panama/',
      },
    ],
  },
};
