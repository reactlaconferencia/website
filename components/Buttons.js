import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.a`
  border-radius: 5px;
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 6px;
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
