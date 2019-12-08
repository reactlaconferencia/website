import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './Typography';

const FooterWrapper = styled.footer`
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
`;

const Content = styled(Paragraph)`
  font-weight: 700;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Content>Made with ❤️ in Medellín</Content>
    </FooterWrapper>
  );
}
