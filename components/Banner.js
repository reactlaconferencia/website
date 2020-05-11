import React from 'react';
import styled from 'styled-components';

import { data } from '../data/data';
import {
  Header as HeaderPrimitive,
  HeaderAccent,
  Paragraph,
  ParagraphAccent,
} from './Typography';
import { Logo } from './Logo';

const BannerWrapper = styled.section`
  display: grid;
  grid-row-gap: 10px;
  margin-top: 20px;
  text-align: center;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  margin-top: 10px;
`;


const Header = styled(HeaderPrimitive)`
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
`;

const HeaderSubtitle = styled(Paragraph)`
  font-weight: 400;
  max-width: 290px;
`;

export function Banner() {
  return (
    <>
      <BannerWrapper>
        <Header>React La Conferencia</Header>
        <HeaderSubtitle>
          The{' '}
          <ParagraphAccent as="span">First React conference</ParagraphAccent>{' '}
          for Spanish speakers{' '}
          <ParagraphAccent as="span">in Latin America</ParagraphAccent>
        </HeaderSubtitle>
        <ImageWrapper>
          <Logo width={128} />
        </ImageWrapper>
        <Header>
          React La Conf has been{' '}
          <HeaderAccent as="span">cancelled</HeaderAccent>, See you next
          year!
        </Header>
      </BannerWrapper>
    </>
  );
}
