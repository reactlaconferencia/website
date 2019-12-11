import React from 'react';
import styled from 'styled-components';
import { Section as PrimitiveSection } from './Sections';
import { HeaderLarge as ListItem } from './Typography';
import { PrimaryCTA } from './Buttons';

const Section = styled.div`
  display: grid;
  grid-row-gap: 15px;
  justify-items: center;
  padding: 35px 0;
`;

const List = styled.ul`
  display: grid;
  list-style: none;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
  justify-items: center;
  text-align: center;

  span {
    &:first-of-type {
      color: ${props => props.theme.text.accent};
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0;
    grid-template-rows: initial;

    span {
      display: block;
    }
  }
`;

export function Numbers({ content, cfpHref }) {
  return (
    <PrimitiveSection>
      <Section>
        <List>
          {content.map(c => (
            <ListItem key={c} as="li">
              {c}
            </ListItem>
          ))}
        </List>
        <PrimaryCTA
          css={`
            margin-top: 10px;
          `}
          href={cfpHref}
        >
          call for speakers
        </PrimaryCTA>
      </Section>
    </PrimitiveSection>
  );
}
