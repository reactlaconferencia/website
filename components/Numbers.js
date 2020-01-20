import React from 'react';
import styled from 'styled-components';

import { Section as PrimitiveSection } from './Sections';
import { HeaderLarge as ListItem } from './Typography';
import { PrimaryCTA } from './Buttons';
import { withTranslation } from '../i18n';

const Section = styled.div`
  display: grid;
  grid-row-gap: 15px;
  justify-items: center;
  margin: 50px 0 0 0;
`;

const List = styled.ul`
  display: grid;
  list-style: none;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
  justify-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0;
    grid-template-rows: initial;

    span {
      display: block;
    }
  }
`;

function Numbers({ content, cfpHref, t }) {
  return (
    <PrimitiveSection>
      <Section>
        <List>
          {content.map((item, i) => (
            <ListItem key={i} as="li">
              <span>{t(item.value)}</span>
              <span>{t(item.label)}</span>
            </ListItem>
          ))}
        </List>
        <PrimaryCTA
          css={`
            margin-top: 10px;
          `}
          href={cfpHref}
        >
          {t('call_for_speakers')}
        </PrimaryCTA>
      </Section>
    </PrimitiveSection>
  );
}

export default withTranslation('common')(Numbers);
