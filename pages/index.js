import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { Banner } from '../components/Banner';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
  </div>
);

export default Home;
