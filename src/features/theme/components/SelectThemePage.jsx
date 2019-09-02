import React, { useContext } from 'react';
import H1 from '../../text/components/H1';
import { ThemeSelectorContext } from './ThemeSelectorProvider';

const SelectThemePage = () => {
  const { isInDarkMode, setDarkMode } = useContext(ThemeSelectorContext);
  return (
    <div>
      <H1>Select your theme here yo!</H1>
      <label>
        <input
          checked={isInDarkMode}
          type="checkbox"
          onClick={() => setDarkMode(!isInDarkMode)}
        />
        dark theme
      </label>
    </div>
  );
};

export default SelectThemePage;
