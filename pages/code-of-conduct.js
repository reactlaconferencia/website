import React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/Navigation/Navigation';
import { CodeOfConduct } from '../components/CodeOfConduct';

const CoC = () => (
  <main>
    <Navigation />
    <CodeOfConduct />
  </main>
);

export default CoC;
