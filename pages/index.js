import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';
import { Section, SectionInverted } from '../components/Sections';
import { Numbers } from '../components/Numbers';
import { data } from '../data/data';
import { GetHere } from '../components/GetHere';
import { AboutUs } from '../components/AboutUs';
import { Sponsors } from '../components/Sponsors';
import { Venue } from '../components/Venue';
import { Team } from '../components/Team';
import { Community } from '../components/Community';
import { AboutMedellin } from '../components/AboutMedellin';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
    <div style={{ marginTop: 30 }}>
      <AboutUs title={data.about.title}>{data.about.content}</AboutUs>
    </div>
    <Numbers cfpHref={data.links.cfp} content={data.numbers.content} />
    <Sponsors title={data.sponsors.title} companies={data.sponsors.companies}>
      {data.sponsors.content}
    </Sponsors>
    <Venue title={data.venue.title}>{data.venue.content}</Venue>
    <Team title={data.team.title} people={data.team.people}>
      {data.team.content}
    </Team>
    <Community title={data.community.title} partners={data.community.partners}>
      {data.community.content}
    </Community>
    <AboutMedellin />
  </div>
);

export default Home;
