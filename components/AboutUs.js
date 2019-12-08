import React from 'react';
import styled from 'styled-components';
import { SectionBody } from './Typography';
import { Section, SectionInverted } from './Sections';
import { ParagraphSmall } from './Typography';

export function AboutUs({ children, title }) {
  return (
    <SectionInverted title={title}>
      <ParagraphSmall>{children}</ParagraphSmall>
    </SectionInverted>
  );
}
