import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import H1 from '../../text/components/H1';
import { ThemeSelectorContext } from './ThemeSelectorProvider';

const ToggleButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  color: ${props => props.theme.primary.text};
`;

const ToggleLabel = styled.span`
  margin-left: 8px;
`;

const SelectTheme = () => {
  const { t } = useTranslation();
  const { isInDarkMode, setDarkMode } = useContext(ThemeSelectorContext);
  const toggleDarkMode = () => setDarkMode(!isInDarkMode);
  const checkedIcon = isInDarkMode ? faCheckSquare : faSquare;
  return (
    <>
      <H1>{t('theme.changeThemeTitle')}</H1>
      <ToggleButton type="button" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={checkedIcon} />
        <ToggleLabel>{t('theme.darkTheme')}</ToggleLabel>
      </ToggleButton>
    </>
  );
};

export default SelectTheme;
