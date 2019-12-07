import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';
import { Section } from '../components/Section';
import { NumbersSection } from '../components/NumbersSection';
import { data } from '../data/data';
import { SectionContent } from '../components/SectionContent';
import { GetHere } from '../components/GetHere';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
    <div style={{ marginTop: 40 }}>
      <Section title={data.about.title}>
        <SectionContent>{data.about.content}</SectionContent>
      </Section>
    </div>
    <div style={{ marginTop: 20 }}>
      <NumbersSection
        title={data.numbers.title}
        content={data.numbers.content}
        fineprint={data.numbers.fineprint}
      />
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.getHere.title}>
        <GetHere content={data.getHere.content} images={data.getHere.images} />
      </Section>
    </div>
    <div style={{ marginTop: 20 }}>
      <Section title={data.sponsors.title} />
    </div>
  </div>
);

export default Home;
