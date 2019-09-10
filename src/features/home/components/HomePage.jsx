import { Redirect } from '@reach/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FakeAutoCode from '../../codepreview/components/FakeAutoCode';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import HomeSection from './HomeSection';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HomeSection title={t('home.title1')} subTitle={t('home.section1')}>
        <FakeAutoCode />
      </HomeSection>
      <HomeSection title={t('home.title2')} subTitle={t('home.section2')}>
        git
      </HomeSection>
      <HomeSection title={t('home.title3')} subTitle={t('home.section3')}>
        <Redirect to={STATISTICS_PAGE}>{t('home.click_here')}</Redirect>
      </HomeSection>
    </>
  );
};

export default HomePage;
