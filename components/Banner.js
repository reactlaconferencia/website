import React from 'react';
import styled from 'styled-components';

import { data } from '../data/data';
import {
  Header as HeaderPrimitive,
  Paragraph,
  ParagraphAccent,
  ParagraphXSmall,
  ParagraphXSmallAccent,
  ParagraphInverted,
} from './Typography';
import { Logo } from './Logo';
import { SectionWrapper } from './SectionWrapper';
import { PrimaryCTA, GreenCTA } from './Buttons';

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

const CTAWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
  }
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
        <ParagraphInverted>Medellín, July 18, 2020</ParagraphInverted>
        <ImageWrapper>
          <Logo width={128} />
        </ImageWrapper>
        <ParagraphXSmall>
          Complejo Ruta N Calle 67 Nº 52-20
          <br /> Piso 2 Torre A. Medellín - Colombia
        </ParagraphXSmall>
      </BannerWrapper>
      <SectionWrapper>
        <CTAWrapper>
          <GreenCTA href={data.links.cfp}>call for speakers</GreenCTA>
          <PrimaryCTA href={data.links.tickets}>get tickets</PrimaryCTA>
        </CTAWrapper>
      </SectionWrapper>
    </>
  );
}
