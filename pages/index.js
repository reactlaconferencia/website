import React from 'react';
import Head from 'next/head';

const theme = {
  background: '#0075ff',
  fontColor: '#F5F7FA',
};

const Home = () => (
  <div>
    <Head>
      <title>
        React LaConf - La primera conferencia de React para hispanoparlantes en
        Latinoamérica
      </title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="container">
        <article>
          <h1 className="visually-hidden">React LaConf</h1>
          <h2 className="visually-hidden">Julio, 2020</h2>
          <img src="/images/logo-v3.png" />
        </article>
      </section>
    </main>

    <style jsx global>{`
      body,
      h1,
      h2,
      h3 {
        margin: 0;
      }

      html,
      body,
      html #__next,
      html #__next > div {
        height: 100%;
        min-height: 100%;
      }
    `}</style>

    <style jsx>{`
      main {
        background-color: ${theme.background};
        color: ${theme.fontColor};
        font-family: 'Roboto', sans-serif;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .container {
        max-width: 560px;
        margin: 0 auto;
        height: 315px;
        width: 100%;
      }

      img {
        height: auto;
        width: 100%;
      }

      .logo {
        max-width: 550px;
      }

      .visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      h1 {
        font-size: 56px;
      }

      h2 {
        font-size: 36px;
      }
    `}</style>
  </div>
);

export default Home;
