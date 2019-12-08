import React from 'react';
import styled from 'styled-components';
import { Hamburger } from './Hamburger';
import { Logo as LogoComponent } from '../Logo';

const NavigationWrapper = styled.nav`
  border-top: 4px solid ${props => props.theme.brand.purple500};
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

const Logo = styled(LogoComponent)`
  justify-self: center;
`;

export function Navigation() {
  return (
    <NavigationWrapper>
      <Logo width={40} />
    </NavigationWrapper>
  );
}
