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
  justify-items: center;
  margin-top: 20px;
`;

function Partner({ name, image, country }) {
  return (
    <PartnerWrapper>
      <Avatar alt={`${name} community`} src={buildImagePath(image)} />
      <ParagraphSmallBold
        css={`
          margin-top: 10px;
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
