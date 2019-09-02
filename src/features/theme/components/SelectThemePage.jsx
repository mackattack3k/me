import React, { useContext } from 'react';
import { ThemeSelectorContext } from './ThemeSelectorProvider';

const SelectThemePage = () => {
  const { isInDarkMode, setDarkMode } = useContext(ThemeSelectorContext);
  return (
    <div>
      <div>Select your theme here yo!</div>
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
