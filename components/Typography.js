import React from 'react';
import styled from 'styled-components';

export const HeaderSmall = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
`;

export const Header = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 36px;
  line-height: 30px;
  font-weight: 900;
`;

export const HeaderAccent = styled(Header)`
  color: ${props => props.theme.text.accent};
`;

export const HeaderLarge = styled.h2`
  color: ${props => props.theme.text.primary};
  font-size: 48px;
  font-weight: 900;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 18px;
  font-weight: 500;
`;

export const ParagraphInverted = styled.p`
  background-color: ${props => props.theme.text.primary};
  color: ${props => props.theme.text.light};
  font-size: 18px;
  font-weight: 700;
  padding: 8px 16px;
`;

export const ParagraphAccent = styled(Paragraph)`
  color: ${props => props.theme.text.accent};
  font-weight: 700;
`;

export const ParagraphSmall = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: 400;
`;

export const ParagraphSmallBold = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: 700;
`;

export const ParagraphXSmall = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 14px;
  font-weight: 500;
`;

export const ParagraphXSmallAccent = styled(ParagraphXSmall)`
  color: ${props => props.theme.text.accent};
  font-weight: 700;
`;

export const Link = styled.a`
  color: ${props => props.theme.text.accent};
  font-size: 16px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
