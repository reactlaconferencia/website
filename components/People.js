import React from 'react';
import styled from 'styled-components';
import {
  ParagraphSmall,
  ParagraphSmallBold,
  Link,
} from '../components/Typography';
import { buildImagePath } from '../utils/utils';

const PersonWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`;

const AvatarWrapper = styled.div`
  border: 3px solid ${props => props.theme.brand.purple500};
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;

  &:hover {
    /* background-image: url(${buildImagePath('twitter.png')}); */
  }
`;

const Avatar = styled.img`
  height: auto;
  width: 100%;
`;

const PeopleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 50px;
  justify-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 500px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 768px;
  }
`;

export function Person({ name, image, extra, handle, website }) {
  return (
    <PersonWrapper>
      <AvatarWrapper>
        <a href={website} target="_blank">
          <Avatar alt={`${name} portrait`} src={buildImagePath(image)} />
        </a>
      </AvatarWrapper>
      <ParagraphSmallBold
        css={`
          margin-top: 10px;
        `}
      >
        {name} {extra}
      </ParagraphSmallBold>
      {handle && <Link href={website}>@{handle}</Link>}
    </PersonWrapper>
  );
}

export function People({ people }) {
  return (
    <PeopleList>
      {people.map(person => (
        <li key={person.name}>
          <Person
            name={person.name}
            image={person.image}
            company={person.company}
            extra={person.extra}
            handle={person.handle}
            website={person.website}
          />
        </li>
      ))}
    </PeopleList>
  );
}
