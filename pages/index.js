import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import Banner from '../components/Banner';
import Numbers from '../components/Numbers';
import { data } from '../data/data';
import AboutUs from '../components/AboutUs';
import Sponsors from '../components/Sponsors';
import { Venue } from '../components/Venue';
import { Team } from '../components/Team';
import { Speakers } from '../components/Speakers';
import Community from '../components/Community';
import AboutMedellin from '../components/AboutMedellin';
import Footer from '../components/Footer';
import { withTranslation } from '../i18n';

const Home = ({ t }) => (
  <div>
    <Navigation />
    <Banner />
    <div style={{ marginTop: 30 }}>
      <AboutUs title={t('about_us_title')}>{t('about_us_description')}</AboutUs>
    </div>
    <Numbers cfpHref={data.links.cfp} content={data.numbers.content} />
    <Sponsors title={t('sponsors_title')} companies={data.sponsors.companies} cta={data.links.sponsors}>
      {t('sponsors_subtitle')}
    </Sponsors>
    <Speakers title={t('speakers_title')} people={data.speakers.people}>
      {t('speakers_subtitle')}
    </Speakers>
    <Venue title={t('venue_title')}>{t('ruta_n_city')}</Venue>
    <Team title={t('team_title')} people={data.team.people} href={data.links.team}>
      {t('team_subtitle')}
    </Team>
    <Community title={t('community_partners_title')} partners={data.community.partners} href={data.links.community}>
      {t('community_partners_subtitle')}
    </Community>
    <AboutMedellin />
    <Footer />
  </div>
);

export default withTranslation('common')(Home);
