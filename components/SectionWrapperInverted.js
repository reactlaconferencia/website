import React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from './SectionWrapper';
import { SectionContent } from './SectionContent';

export const SectionWrapperInverted = styled(SectionWrapper)`
  background-color: ${props => props.theme.bg.default};
  padding-top: 25px;
  padding-bottom: 25px;
`;
