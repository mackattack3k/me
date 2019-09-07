import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../../text/components/H1';

const SelectLanguage = () => {
  const { t } = useTranslation();
  const changeLanguage = async () => {
    const currentLanguage = i18next.language;
    const oppositeLanguage = currentLanguage === 'en' ? 'sv' : 'en';
    await i18next.changeLanguage(oppositeLanguage);
  };
  return (
    <>
      <H1>{t('theme.changeLanguageTitle')}</H1>
      <button type="button" onClick={changeLanguage}>
        {t('theme.changeLanguage')}
      </button>
    </>
  );
};

export default SelectLanguage;
