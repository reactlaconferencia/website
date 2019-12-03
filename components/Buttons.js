import React from 'react';
import styled from 'styled-components';

export const PrimaryCTA = styled.a`
  background-color: ${props => props.theme.brand.default};
  border-radius: 5px;
  color: ${props => props.theme.text.inverted};
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 6px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${props => props.theme.brand.inverted};
    cursor: pointer;
  }
`;
