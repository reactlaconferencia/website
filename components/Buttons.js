import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.a`
  border-radius: 20px;
  display: block;
  font-size: 14px;
  font-weight: 900;
  padding: 12px;
  max-width: 300px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  transition: background-color 250ms ease;

  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryCTA = styled(BaseButton)`
  background-color: ${props => props.theme.cta.primary.background};
  color: ${props => props.theme.cta.primary.text};

  &:hover {
    background-color: ${props => props.theme.cta.primary.hover};
  }
`;

export const SecondaryCTA = styled(BaseButton)`
  background-color: ${props => props.theme.cta.secondary.background};
  color: ${props => props.theme.cta.secondary.text};

  &:hover {
    background-color: ${props => props.theme.cta.secondary.hover};
  }
`;

export const GreenCTA = styled(BaseButton)`
  background-color: ${props => props.theme.cta.green.background};
  color: ${props => props.theme.cta.green.text};

  &:hover {
    background-color: ${props => props.theme.cta.green.hover};
  }
`;
