import React from 'react';
import styled from 'styled-components';

import { Paragraph, ParagraphAccent } from './Typography';
import { withTranslation } from '../i18n';

const FooterWrapper = styled.footer`
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Content = styled(Paragraph)`
  font-weight: 700;
`;

function Footer({ t }) {
  return (
    <FooterWrapper>
      <Content>{t('made_by')}</Content>
      <ParagraphAccent
        as="a"
        href="/code-of-conduct"
        css={`
          display: inline-block;
          margin-top: 12px;
        `}
      >
        {t('coc')}
      </ParagraphAccent>
    </FooterWrapper>
  );
}

export default withTranslation('common')(Footer);
