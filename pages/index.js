import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';
import { Section, SectionInverted } from '../components/Sections';
import { Numbers } from '../components/Numbers';
import { data } from '../data/data';
import { SectionContent } from '../components/SectionContent';
import { GetHere } from '../components/GetHere';
import { AboutUs } from '../components/AboutUs';
import { Sponsors } from '../components/Sponsors';

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
    <div style={{ marginTop: 20 }}>
      <Section title={data.sponsors.title} />
    </div>
  </div>
);

export default Home;
