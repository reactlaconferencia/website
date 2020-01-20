import React from 'react';

import { SectionInverted } from './Sections';
import { ParagraphSmall } from './Typography';
import { SecondaryCTA } from './Buttons';
import { withTranslation } from '../i18n';

function AboutUs({ children, title, t }) {
  return (
    <SectionInverted title={title}>
      <ParagraphSmall
        css={`
          text-align: center;
        `}
      >
        {children}
      </ParagraphSmall>
      <SecondaryCTA
        css={`
          margin: 20px auto 0;
        `}
        href="http://eepurl.com/gAAMLT"
      >
        {t('newsletter_subscribe_cta')}
      </SecondaryCTA>
    </SectionInverted>
  );
}

export default withTranslation('common')(AboutUs);
