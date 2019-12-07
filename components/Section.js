import React from 'react';
import styled from 'styled-components';
import { SectionBody, SectionTitle } from './Typography';
import { SectionWrapper } from './SectionWrapper';

const Title = styled(SectionTitle)`
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
