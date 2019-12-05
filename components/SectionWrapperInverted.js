import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from './SectionWrapper';

const Wrapper = styled.div`
  background-color: ${props => props.theme.brand.wash};
  padding: 30px;
`;

const Content = styled.section`
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

export function SectionWrapperInverted({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
