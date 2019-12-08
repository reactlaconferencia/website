import React from 'react';
import styled from 'styled-components';

import { data } from '../data/data';
import {
  Header,
  Paragraph,
  ParagraphAccent,
  ParagraphXSmall,
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
  grid-row-gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
`;

export function Banner() {
  return (
    <SectionWrapper>
      <BannerWrapper>
        <Header>React La Conferencia</Header>
        <Paragraph>
          The{' '}
          <ParagraphAccent as="span">First React conference</ParagraphAccent>{' '}
          for Spanish speakers{' '}
          <ParagraphAccent as="span">in Latin America</ParagraphAccent>
        </Paragraph>
        <ParagraphXSmall>
          Medellín
          <br />
          July 17 - 18, 2020
        </ParagraphXSmall>
        <ImageWrapper>
          <Logo width={128} />
        </ImageWrapper>
        <ParagraphXSmall>
          Complejo Ruta N Calle 67 Nº 52-20
          <br /> Piso 2 Torre A. Medellín - Colombia
        </ParagraphXSmall>
      </BannerWrapper>
      <CTAWrapper>
        <GreenCTA href={data.links.cfp}>call for speakers</GreenCTA>
        <PrimaryCTA>get tickets</PrimaryCTA>
      </CTAWrapper>
    </SectionWrapper>
  );
}
