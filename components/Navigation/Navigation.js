import React from 'react';
import styled from 'styled-components';
import { Hamburger } from './Hamburger';
import { Logo as LogoComponent } from '../Logo';

const NavigationWrapper = styled.nav`
  align-items: center;
  border-top: 4px solid ${props => props.theme.brand.default};
  display: grid;
  grid-template-columns: 80px auto;
`;

const Logo = styled(LogoComponent)`
  justify-self: center;
  margin-left: -80px;
`;

export function Navigation() {
  return (
    <NavigationWrapper>
      <Hamburger />
      <Logo width={40} />
    </NavigationWrapper>
  );
}
