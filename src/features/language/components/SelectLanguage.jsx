import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../button/components/Button';
import { AVAILABLE_LANGUAGES } from '../initLanguage';
import H1 from '../../text/components/H1';

const SelectLanguage = () => {
  const { t } = useTranslation();
  const changeLanguage = async () => {
    const currentLanguage = i18next.language;
    const oppositeLanguage =
      currentLanguage === AVAILABLE_LANGUAGES.ENGLISH
        ? AVAILABLE_LANGUAGES.SWEDISH
        : AVAILABLE_LANGUAGES.ENGLISH;
    await i18next.changeLanguage(oppositeLanguage);
  };
  return (
    <>
      <H1>{t('theme.changeLanguageTitle')}</H1>
      <Button type="button" onClick={changeLanguage}>
        {t('theme.changeLanguage')}
      </Button>
    </>
  );
};

export default SelectLanguage;
