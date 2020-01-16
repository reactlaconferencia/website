import React from 'react';
import styled from 'styled-components';

import { Section } from '../components/Sections';
import { ParagraphSmall, ParagraphSmallBold } from '../components/Typography';
import { People } from '../components/People';

export function Team({ children, title, people, href }) {
  return (
    <Section
      css={`
        margin-top: 60px;
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
    </Section>
  );
}
