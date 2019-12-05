import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';
import { Section } from '../components/Section';
import { NumbersSection } from '../components/NumbersSection';
import { data } from '../data/data';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
    <div style={{ marginTop: 40 }}>
      <Section title={data.about.title} content={data.about.content} />
    </div>
    <div style={{ marginTop: 20 }}>
      <NumbersSection
        title={data.numbers.title}
        content={data.numbers.content}
        fineprint={data.numbers.fineprint}
      />
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.tickets.title} content={data.tickets.content} />
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.getHere.title} content={data.getHere.content} />
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.schedule.title} content={data.schedule.content} />
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.sponsors.title} content={data.sponsors.content} />
    </div>
  </div>
);

export default Home;
