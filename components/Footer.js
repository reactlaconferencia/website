import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphAccent } from './Typography';

const FooterWrapper = styled.footer`
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Content = styled(Paragraph)`
  font-weight: 700;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Content>Made with ❤️ in Medellín</Content>
      <ParagraphAccent
        as="a"
        href="/code-of-conduct"
        css={`
          display: inline-block;
          margin-top: 12px;
        `}
      >
        Code of Conduct
      </ParagraphAccent>
    </FooterWrapper>
  );
}
