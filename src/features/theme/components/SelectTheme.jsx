import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../../text/components/H1';
import { ThemeSelectorContext } from './ThemeSelectorProvider';

const SelectTheme = () => {
  const { t } = useTranslation();
  const { isInDarkMode, setDarkMode } = useContext(ThemeSelectorContext);
  return (
    <>
      <H1>{t('theme.changeThemeTitle')}</H1>
      <label htmlFor="dark-mode-checkbox">
        <input
          checked={isInDarkMode}
          type="checkbox"
          onChange={() => setDarkMode(!isInDarkMode)}
          id="dark-mode-checkbox"
        />
        {t('theme.darkTheme')}
      </label>
    </>
  );
};

export default SelectTheme;
