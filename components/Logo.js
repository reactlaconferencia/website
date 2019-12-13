import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: ${props => props.width}px;
`;

export function Logo({ width }) {
  return <LogoImg src="/images/logo.svg" width={width} />;
}
