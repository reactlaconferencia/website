import React from 'react';
import styled from 'styled-components';
import { SectionBody } from './Typography';
import { Section, SectionInverted } from './Sections';
import { ParagraphSmall, ParagraphAccent, HeaderSmall } from './Typography';

const Title = styled(HeaderSmall)`
  margin-top: 25px;
`;

const Accent = styled(ParagraphAccent)`
  font-size: 16px;
`;

const Paragraph = styled(ParagraphSmall)`
  margin-top: 10px;
`;

const Ul = styled.ul`
  padding-left: 15px;
`;

const Li = styled.li`
  list-style: unset;
`;

export function AboutMedellin() {
  return (
    <SectionInverted
      css={`
        margin-top: 50px;
      `}
      title="About Medellín"
    >
      <Title>How to get here</Title>
      <Paragraph>
        You'll arrive to{' '}
        <Accent as="span">Jose María Cordoba (MDE) Airport</Accent> which is
        just 25 minutes away from Medellín by Taxi/Uber.
      </Paragraph>
      <Title>Where to stay</Title>
      <Paragraph>
        We recommend you these hotels in <Accent as="span">El Poblado</Accent>
      </Paragraph>
      <Ul>
        <Li>
          <Paragraph>
            <Accent as="a" href="https://www.diezhotel.com/">
              Diez Hotel
            </Accent>
          </Paragraph>
        </Li>
        <Li>
          <Paragraph>
            <Accent
              as="a"
              href="https://www.viaggio.com.co/en/hotel-viaggio-medellin-in-antioquia/"
            >
              Hotel Viaggio
            </Accent>
          </Paragraph>
        </Li>
      </Ul>
      <Title>How to get to the Conference?</Title>
      <Paragraph>
        Medellín offers a metro system that will take you to the{' '}
        <Accent as="span">Universidad Station</Accent> that is just at 5 minute
        walk to the Venue in around 10 minutes from{' '}
        <Accent as="span">Poblado Station</Accent>
      </Paragraph>
      <Title>Have questions?</Title>
      <Paragraph>
        Shoot us a DM{' '}
        <Accent as="a" href="https://twitter.com/reactlaconf">
          @reactlaconf
        </Accent>{' '}
        or send us an email to{' '}
        <Accent as="a" href="mailto:reactconfcolombia@gmail.com">
          reactconfcolombia@gmail.com
        </Accent>
      </Paragraph>
    </SectionInverted>
  );
}
