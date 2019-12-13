import React from 'react';
import styled from 'styled-components';
import { SectionInverted } from './Sections';
import { HeaderSmall, Paragraph, ParagraphAccent } from './Typography';
import { SecondaryCTA } from './Buttons';

const Title = styled(HeaderSmall)`
  margin-top: 25px;
`;

const Accent = styled(ParagraphAccent)`
  /* font-size: 16px; */
`;

const P = styled(Paragraph)`
  text-align: left;
  margin-top: 12px;
  font-weight: 400;

  &:first-of-type {
    margin-top: 30px;
  }
`;

export function CodeOfConduct({ children, title }) {
  return (
    <SectionInverted
      css={`
        margin-top: 15px;
      `}
      title="Code of Conduct"
    >
      <P>
        All delegates, speakers, sponsors and volunteers are required to agree
        with the following code of conduct. Organizers will enforce this code
        throughout the event.
      </P>
      <Title>The super quick version</Title>
      <P>Be nice to everybody and enjoy the conference!</P>
      <Title>The quick version</Title>
      <P>
        <Accent as="span">
          We want you to have a wonderful time at the conference
        </Accent>
        , that's why we want to provide a harassment-free experience for
        everyone, regardless of gender, gender identity and expression, age,
        sexual orientation, disability, physical appearance, body size, race,
        ethnicity, religion (or lack thereof), or technology choices.
      </P>
      <P>
        <Accent as="span">
          We do not tolerate harassment in the conference in any form
        </Accent>{' '}
        Sexual, Violent, Racist or any kind of derogatory language is strictly
        prohibited. Breaking this code of conduct will get you sanctioned or
        expelled from the conference <Accent as="span">without a refund</Accent>{' '}
        at the discretion of the organisers
      </P>
      <P>
        We also expect participants to follow this rules during the conference
        day, in person and in any official online channel or social media
        profile
      </P>
      <Title>How to report any problem you may have</Title>
      <P>
        You can send us a DM to any of the organizers{' '}
        <Accent href="https://twitter.com/alejandronanez" as="a">
          @alejandronanez
        </Accent>
        ,{' '}
        <Accent href="https://twitter.com/JMGR2996" as="a">
          @JMGR2996
        </Accent>{' '}
        or{' '}
        <Accent href="https://twitter.com/simonhoyosdev" as="a">
          @simonhoyosdev
        </Accent>
        , or you can send us an email to{' '}
        <Accent href="mailto:reactconfcolombia@gmail.com" as="a">
          reactconfcolombia@gmail.com
        </Accent>{' '}
        we will guarantee 100% confidentiality. <br /> At the conference, you
        can reach out to any of the organizers, we're here to help you!
      </P>
    </SectionInverted>
  );
}
