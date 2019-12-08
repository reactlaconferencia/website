import React from 'react';
import styled from 'styled-components';
import { SectionBody } from './Typography';
import { Section, SectionInverted } from './Sections';
import { SectionContent } from './SectionContent';

export function AboutUs({ children, title }) {
  return (
    <SectionInverted title={title}>
      <SectionContent>{children}</SectionContent>
    </SectionInverted>
  );
}
