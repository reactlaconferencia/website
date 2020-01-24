import React from 'react';
import styled from 'styled-components';
import { Logo as LogoComponent } from '../Logo';
import { withTranslation, i18n } from '../../i18n';
import { SelectPrimary } from '../Select';

const NavigationWrapper = styled.nav`
  border-top: 4px solid ${props => props.theme.brand.purple500};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
`;

const Logo = styled(LogoComponent)`
  justify-self: center;
`;

const LangSelect = styled(SelectPrimary)`
  position: absolute;
  right: 10px;
  font-size: 12px;
`;

function Navigation({ t }) {
  return (
    <NavigationWrapper>
      <Logo width={40} />
      <LangSelect
        onChange={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
        }
      >
        <option>{t('english')}</option>
        <option>{t('spanish')}</option>
      </LangSelect>
    </NavigationWrapper>
  );
}

export default withTranslation('common')(Navigation);
