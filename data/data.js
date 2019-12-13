import React from 'react';

export const data = {
  links: {
    cfp: 'https://forms.gle/Js2ohTHi8yvENuNs9',
    team: 'https://forms.gle/GnDZ5f5zDPF79wxB8',
    community: 'https://forms.gle/hBXbTV7DYBsRXiQTA',
    sponsors: 'https://forms.gle/MnJNbzU4K5WohuhN9',
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
        extra: '🇨🇴',
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
    ],
  },
};
