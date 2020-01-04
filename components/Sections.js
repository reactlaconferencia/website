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
  padding-top: 35px;
  padding-bottom: 35px;
`;

export function Section({ title, children, className }) {
  return (
    <SectionWrapper className={className}>
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
}

export function SectionInverted({ title, children, className }) {
  return (
    <SectionWrapperInverted className={className}>
      <SectionWrapper>
        {title && <Title>{title}</Title>}
        {children}
      </SectionWrapper>
    </SectionWrapperInverted>
  );
}
