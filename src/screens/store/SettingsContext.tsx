import React, { createContext, useContext, useState } from 'react';

type FontSize = 'small' | 'medium' | 'large';

interface SettingsContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  getFontSizeMultiplier: () => number;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Multipliers to apply to text styles across the app
  const getFontSizeMultiplier = () => {
    switch (fontSize) {
      case 'small':
        return 0.85;
      case 'large':
        return 1.25;
      default:
        return 1.0;
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        fontSize,
        setFontSize,
        getFontSizeMultiplier,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};