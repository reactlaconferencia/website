import React from 'react';
import styled from 'styled-components';

import { Section } from '../components/Sections';
import { ParagraphSmall, ParagraphSmallBold } from '../components/Typography';
import { PrimaryCTA } from '../components/Buttons';
import { buildImagePath } from '../utils/utils';

const PartnerWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const Avatar = styled.img`
  height: auto;
  width: 150px;
`;

const PartnersList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 22px;
  justify-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 50px;
  }
`;

function Partner({ name, image, country, website }) {
  return (
    <PartnerWrapper>
      <a href={website} target="_blank" rel="noopener">
        <Avatar alt={`${name} community`} src={buildImagePath(image)} />
      </a>
      <ParagraphSmallBold
        css={`
          margin-top: 0;
        `}
      >
        {name}
      </ParagraphSmallBold>
      <ParagraphSmall>{country}</ParagraphSmall>
    </PartnerWrapper>
  );
}

function Partners({ partners }) {
  return (
    <PartnersList>
      {partners.map(partner => (
        <li key={partner.name}>
          <Partner
            name={partner.name}
            image={partner.image}
            country={partner.country}
            website={partner.website}
          />
        </li>
      ))}
    </PartnersList>
  );
}

export function Community({ children, title, partners, href }) {
  return (
    <Section
      css={`
        margin-top: 30px;
      `}
      title={title}
    >
      <ParagraphSmall
        css={`
          text-align: center;
        `}
      >
        {children}
      </ParagraphSmall>
      <Partners partners={partners} />
      <PrimaryCTA
        css={`
          margin: 20px auto auto;
        `}
        href={href}
      >
        Become a partner
      </PrimaryCTA>
    </Section>
  );
}
