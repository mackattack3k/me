import i18next from 'i18next';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../../text/components/H1';
import { ThemeSelectorContext } from './ThemeSelectorProvider';

const SelectThemePage = () => {
  const { t } = useTranslation();
  const { isInDarkMode, setDarkMode } = useContext(ThemeSelectorContext);
  const changeLanguage = async () => {
    const currentLanguage = i18next.language;
    const oppositeLanguage = currentLanguage === 'en' ? 'sv' : 'en';
    await i18next.changeLanguage(oppositeLanguage);
  };
  return (
    <>
      <H1>{t('theme.changeThemeTitle')}</H1>
      <label>
        <input
          checked={isInDarkMode}
          type="checkbox"
          onChange={() => setDarkMode(!isInDarkMode)}
        />
        {t('theme.darkTheme')}
      </label>
      <H1>{t('theme.changeLanguageTitle')}</H1>
      <button onClick={changeLanguage}>{t('theme.changeLanguage')}</button>
    </>
  );
};

export default SelectThemePage;
