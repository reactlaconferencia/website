import React from 'react';
import styled from 'styled-components';

import { SectionInverted } from './Sections';
import { ParagraphSmall, ParagraphAccent, HeaderSmall } from './Typography';
import { withTranslation, Trans } from '../i18n';

const Title = styled(HeaderSmall)`
  margin-top: 25px;
`;

const Accent = styled(ParagraphAccent)`
  font-size: 16px;
`;

const Paragraph = styled(ParagraphSmall)`
  margin-top: 10px;
`;

const Ul = styled.ul`
  padding-left: 15px;
`;

const Li = styled.li`
  list-style: unset;
`;

function AboutMedellin({ t }) {
  return (
    <SectionInverted
      css={`
        margin-top: 50px;
      `}
      title={t('about_medellin_title')}
    >
      <Title>{t('how_to_get_here_title')}</Title>
      <Paragraph>
        <Trans i18nKey="how_to_get_here_description">
          You'll arrive to <Accent as="span">Jose María Cordoba (MDE) Airport</Accent> which is just 25 minutes away from Medellín by Taxi/Uber
        </Trans>
      </Paragraph>
      <Title>{t('where_to_stay_title')}</Title>
      <Paragraph>
        <Trans i18nKey="where_to_stay_description">
          We recommend you these hotels in <Accent as="span">El Poblado</Accent>
        </Trans>
      </Paragraph>
      <Ul>
        <Li>
          <Paragraph>
            <Accent as="a" href="https://www.diezhotel.com/">
              {t('diez_hotel')}
            </Accent>
          </Paragraph>
        </Li>
        <Li>
          <Paragraph>
            <Accent as="a" href="https://www.viaggio.com.co/en/hotel-viaggio-medellin-in-antioquia/">
              {t('viaggio_hotel')}
            </Accent>
          </Paragraph>
        </Li>
      </Ul>
      <Title>{t('how_to_get_to_the_conference_title')}</Title>
      <Paragraph>
        <Trans i18nKey="how_to_get_to_the_conference_description">
          Medellín offers a metro system that will take you to the <Accent as="span">Universidad Station</Accent> that is just at 5 minute walk to the
          Venue in around 10 minutes from <Accent as="span">Poblado Station</Accent>
        </Trans>
      </Paragraph>
      <Title>{t('have_questions_title')}</Title>
      <Paragraph>
        <Trans i18nKey="have_questions_description">
          Shoot us a DM{' '}
          <Accent as="a" href="https://twitter.com/reactlaconf">
            @reactlaconf
          </Accent>{' '}
          or send us an email to{' '}
          <Accent as="a" href="mailto:reactconfcolombia@gmail.com">
            reactconfcolombia@gmail.com
          </Accent>
        </Trans>
      </Paragraph>
    </SectionInverted>
  );
}

export default withTranslation('common')(AboutMedellin);
