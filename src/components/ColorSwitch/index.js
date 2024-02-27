import React, { useState } from 'react';

const ColorSchemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', newColorScheme);
  };

  return (
    <button onClick={toggleColorScheme}>
      Toggle Color Scheme
    </button>
  );
};

export default ColorSchemeToggle;
