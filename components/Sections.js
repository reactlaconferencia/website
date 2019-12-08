import React from 'react';
import styled from 'styled-components';
import { Header } from './Typography';
import { SectionWrapper } from './SectionWrapper';
import { SectionWrapperInverted } from './SectionWrapperInverted';

const Title = styled(Header)`
  text-align: center;
  margin-bottom: 10px;
`;

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

export function SectionInverted({ title, children }) {
  return (
    <SectionWrapperInverted>
      <Title>{title}</Title>
      {children}
    </SectionWrapperInverted>
  );
}
