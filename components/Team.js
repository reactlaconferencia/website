import React from 'react';
import styled from 'styled-components';

import { Section } from '../components/Sections';
import { ParagraphSmall, ParagraphSmallBold } from '../components/Typography';
import { PrimaryCTA } from '../components/Buttons';
import { People } from '../components/People';

export function Team({ children, title, people, href }) {
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
      <People people={people} />
      <PrimaryCTA
        css={`
          margin: 20px auto auto;
        `}
        href={href}
      >
        Join the team
      </PrimaryCTA>
    </Section>
  );
}
