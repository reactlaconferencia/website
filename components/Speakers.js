import React from 'react';
import styled from 'styled-components';

import { Section } from '../components/Sections';
import { ParagraphSmall, ParagraphSmallBold } from '../components/Typography';
import { buildImagePath } from '../utils/utils';

const PersonWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const AvatarWrapper = styled.div`
  border: 3px solid ${props => props.theme.brand.purple500};
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
`;

const Avatar = styled.img`
  height: auto;
  width: 100%;
`;

const PeopleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 50px;
  justify-items: center;
  margin-top: 20px;
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 768px;
  }
`;

function Person({ name, image, company }) {
  return (
    <PersonWrapper>
      <AvatarWrapper>
        <Avatar alt={`${name} portrait`} src={buildImagePath(image)} />
      </AvatarWrapper>
      <ParagraphSmallBold
        css={`
          margin-top: 10px;
        `}
      >
        {name}
      </ParagraphSmallBold>
      <ParagraphSmall>{company}</ParagraphSmall>
    </PersonWrapper>
  );
}

function People({ people }) {
  return (
    <PeopleList>
      {people.map(person => (
        <li key={person.name}>
          <Person
            name={person.name}
            image={person.image}
            company={person.company}
          />
        </li>
      ))}
    </PeopleList>
  );
}

export function Speakers({ children, title, people }) {
  return (
    <Section
      css={`
        margin-top: 30px;
      `}
      title={title}
    >
      <ParagraphSmall
        css={`
          text-align: center;
        `}
      >
        {children}
      </ParagraphSmall>
      <People people={people} />
    </Section>
  );
}
