import React from 'react';
import { useTranslation } from 'react-i18next';
import FakeAutoCode from './FakeAutoCode';
import HomeSection from './HomeSection';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HomeSection title={t('home.title1')}>
        {t('home.section1')}
        <FakeAutoCode />
      </HomeSection>
      <HomeSection title={t('home.title2')}>{t('home.section2')}</HomeSection>
      <HomeSection title={t('home.title3')}>{t('home.section3')}</HomeSection>
    </>
  );
};

export default HomePage;
