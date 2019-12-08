import React from 'react';
import styled from 'styled-components';
import { SectionWrapperInverted } from './SectionWrapperInverted';

const Wrapper = styled.ul`
  display: grid;
  list-style: none;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 20px;
  justify-items: center;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0;
    grid-template-rows: initial;
  }
`;

const Value = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 36px;
`;

const Label = styled.h3`
  color: ${props => props.theme.text.primary};
  font-size: 24px;
  text-transform: uppercase;
`;

const Fineprint = styled.p`
  color: ${props => props.theme.text.primary};
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
  font-style: italic;
`;

export function NumbersSection({ children, title, content, fineprint }) {
  return (
    <SectionWrapperInverted>
      <Wrapper>
        {content.map(c => (
          <li key={c.label}>
            <Value>{c.value}</Value>
            <Label>{c.label}</Label>
          </li>
        ))}
      </Wrapper>
      <Fineprint>{fineprint}</Fineprint>
    </SectionWrapperInverted>
  );
}
