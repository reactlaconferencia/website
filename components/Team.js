import React from 'react';

import { Section } from '../components/Sections';
import { ParagraphSmall } from '../components/Typography';
import { People } from '../components/People';

export function Team({ children, title, people }) {
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
