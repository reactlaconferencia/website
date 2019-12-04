import React from 'react';
import styled from 'styled-components';

export const Title = styled.h2`
  color: ${props => props.theme.text.title};
  font-size: 36px;
  font-weight: 900;
`;

export const Subtitle = styled.h2`
  color: ${props => props.theme.text.secondary};
  font-size: 18px;
  font-weight: 500;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.text.title};
  font-size: 36px;
  font-weight: 700;
`;

export const Body = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: normal;
`;

export const SectionBody = styled.p`
  color: ${props => props.theme.text.secondary};
  font-size: 16px;
  font-weight: 400;
`;
