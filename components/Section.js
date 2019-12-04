import React from 'react';
import styled from 'styled-components';
import { SectionBody, SectionTitle } from './Typography';
import { SectionWrapper } from './SectionWrapper';

const Title = styled(SectionTitle)`
  text-align: center;
`;

const Body = styled(SectionBody)`
  margin-top: 10px;
`;

export function Section({ title, content }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Body>{content}</Body>
    </SectionWrapper>
  );
}
