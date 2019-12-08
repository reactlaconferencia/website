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

const PlatinumImage = styled(BaseImage)``;

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

function SponsorsList({ tier, sponsors }) {
  if (!sponsors.length) {
    return null;
  }

  return (
    <SponsorListWrapper>
      <SponsorListHeader as="h2">{tier}</SponsorListHeader>
      <ul>
        {sponsors.map(sponsor => (
          <li key={sponsor.name}>
            <BaseImage
              alt={`${sponsor.name} logo`}
              src={buildImagePath(sponsor.image)}
            />
          </li>
        ))}
      </ul>
    </SponsorListWrapper>
  );
}

export function Sponsors({ children, title, companies }) {
  return (
    <SectionInverted title={title}>
      <ParagraphSmall>{children}</ParagraphSmall>
      <SponsorsList tier="Platinum" sponsors={companies.platinum} />
      <SponsorsList tier="Gold" sponsors={companies.gold} />
      <SponsorsList tier="Silver" sponsors={companies.silver} />
      <SponsorsList tier="Bronze" sponsors={companies.bronze} />
      <ButtonWrapper>
        <SecondaryCTA href="#">Become a sponsor</SecondaryCTA>
      </ButtonWrapper>
    </SectionInverted>
  );
}
