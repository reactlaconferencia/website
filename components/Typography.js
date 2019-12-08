import React from 'react';
import styled from 'styled-components';

export const HeaderSmall = styled.h1`
  color: ${props => props.theme.text.primary};
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
`;

export const Header = styled.h1`
  color: ${props => props.theme.text.primary};
  font-size: 36px;
  font-weight: 900;
`;

export const HeaderLarge = styled.h1`
  color: ${props => props.theme.text.primary};
  font-size: 48px;
  font-weight: 900;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 18px;
  font-weight: 500;
`;

export const ParagraphSmall = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: 500;
`;
