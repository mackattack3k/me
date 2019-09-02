import React from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import NavLink from './NavLink';

const HeaderNavigation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>mackattack3k</div>
      <nav>
        <NavLink to={HOME_PAGE}>{t('routes.home')}</NavLink>
        <NavLink to={CONTACT_PAGE}>{t('routes.contact')}</NavLink>
        <NavLink to={STATISTICS_PAGE}>{t('routes.statistics')}</NavLink>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
