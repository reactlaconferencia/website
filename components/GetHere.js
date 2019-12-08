import React from 'react';
import styled from 'styled-components';
import { Paragraph, HeaderSmall } from './Typography';
import { buildImagePath } from '../utils/utils';
import { SectionWrapper } from './SectionWrapper';

const Image = styled.img`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: block;
  height: auto;
  margin-top: 15px;
  width: 100%;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  margin-top: 10px;
`;

const ContentWrapper = styled.article`
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

export function GetHere({ children, content, images }) {
  return (
    <>
      <ContentWrapper>
        <Paragraph>{content.airport}</Paragraph>
      </ContentWrapper>
      <ContentWrapper>
        <HeaderSmall>Hotels</HeaderSmall>
        <Ul>
          <Li>
            <a href={content.hotels[0].url}>{content.hotels[0].name}</a>
          </Li>
          <Li>
            <a href={content.hotels[1].url}>{content.hotels[1].name}</a>
          </Li>
        </Ul>
      </ContentWrapper>
    </>
  );
}
