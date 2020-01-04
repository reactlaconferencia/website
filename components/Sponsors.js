import React from 'react';
import styled from 'styled-components';

import { SectionInverted } from './Sections';
import { HeaderSmall, ParagraphSmall } from './Typography';
import { SecondaryCTA } from './Buttons';
import { buildImagePath } from '../utils/utils';

const BaseImage = styled.img`
  height: auto;
  width: 100%;
`;

const PlatinumImage = styled(BaseImage)`
  display: flex;
  justify-self: center;
  max-width: 200px;
  margin: 0 auto;
`;

const SponsorListHeader = styled(HeaderSmall)`
  text-align: center;
`;

const SponsorListWrapper = styled.section`
  display: grid;
  grid-row-gap: 10px;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

function SponsorsList({ cta, tier, sponsors }) {
  if (!sponsors.length) {
    return null;
  }

  return (
    <SponsorListWrapper>
      <SponsorListHeader as="h2">{tier}</SponsorListHeader>
      <ul>
        {sponsors.map(sponsor => (
          <li key={sponsor.name}>
            <PlatinumImage
              alt={`${sponsor.name} logo`}
              src={buildImagePath(sponsor.image)}
            />
          </li>
        ))}
      </ul>
    </SponsorListWrapper>
  );
}

export function Sponsors({ children, title, companies, cta }) {
  return (
    <SectionInverted css={`margin-top: 50px`} title={title}>
      <ParagraphSmall
        css={`
          text-align: center;
        `}
      >
        {children}
      </ParagraphSmall>
      <SponsorsList tier="Platinum" sponsors={companies.platinum} />
      <SponsorsList tier="Gold" sponsors={companies.gold} />
      <SponsorsList tier="Silver" sponsors={companies.silver} />
      <SponsorsList tier="Bronze" sponsors={companies.bronze} />
      <ButtonWrapper>
        <SecondaryCTA href={cta}>Become a sponsor</SecondaryCTA>
      </ButtonWrapper>
    </SectionInverted>
  );
}
