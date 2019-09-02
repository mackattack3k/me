import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeSection from './HomeSection';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HomeSection title="Home">{t('home.section1')}</HomeSection>
      <HomeSection title="Home is where the heart is">
        {t('home.section2')}
      </HomeSection>
      <HomeSection title="Home is good but away is better">
        {t('home.section3')}
      </HomeSection>
    </div>
  );
};

export default HomePage;
