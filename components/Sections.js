import React from 'react';
import styled from 'styled-components';
import { Header } from './Typography';
import { SectionWrapper } from './SectionWrapper';

const Title = styled(Header)`
  text-align: center;
  margin-bottom: 10px;
`;

const SectionWrapperInverted = styled.div`
  background-color: ${props => props.theme.bg.default};
  padding-top: 25px;
  padding-bottom: 25px;
`;

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
}

export function SectionInverted({ title, children }) {
  return (
    <SectionWrapperInverted>
      <SectionWrapper>
        <Title>{title}</Title>
        {children}
      </SectionWrapper>
    </SectionWrapperInverted>
  );
}
