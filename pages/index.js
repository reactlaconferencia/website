import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';
import { data } from '../data/data';
import { AboutUs } from '../components/AboutUs';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
    <div style={{ marginTop: 30 }}>
      <AboutUs title={data.about.title}>{data.about.content}</AboutUs>
    </div>
    <Team
      title={data.team.title}
      people={data.team.people}
      href={data.links.team}
    >
      {data.team.content}
    </Team>
    <Footer />
  </div>
);

export default Home;
