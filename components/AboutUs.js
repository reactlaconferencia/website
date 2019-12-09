import React from 'react';
import styled from 'styled-components';
import { SectionBody } from './Typography';
import { Section, SectionInverted } from './Sections';
import { ParagraphSmall } from './Typography';
import { SecondaryCTA } from './Buttons';

export function AboutUs({ children, title }) {
  return (
    <SectionInverted title={title}>
      <ParagraphSmall
        css={`
          text-align: center;
        `}
      >
        {children}
      </ParagraphSmall>
      <SecondaryCTA
        css={`
          margin: 20px auto 0;
        `}
        href="http://eepurl.com/gAAMLT"
      >
        Subscribe to our newsletter
      </SecondaryCTA>
    </SectionInverted>
  );
}
