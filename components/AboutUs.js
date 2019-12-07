import React from 'react';
import styled from 'styled-components';
import { SectionBody } from './Typography';

const Body = styled(SectionBody)`
  margin-top: 10px;
`;

export function AboutUs({ content }) {
  return <Body>{content}</Body>;
}
