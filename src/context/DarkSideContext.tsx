import { createContext, ReactNode, useState } from 'react';
import { darkTheme, lightTheme, Theme } from '../theme/theme';

interface State {
  theme: Theme;
  toggleTheme: () => void;
  darkSide: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

export const DarkSideContext = createContext<State>({
  theme: lightTheme,
  toggleTheme: () => null,
  darkSide: false,
});

export const DarkSideProvider = ({ children }: ProviderProps) => {
  const [darkSide, setDarkSide] = useState(false);

  const toggleTheme = () => (darkSide ? setDarkSide(false) : setDarkSide(true));

  const theme = darkSide ? darkTheme : lightTheme;

  const value = {
    theme,
    toggleTheme,
    darkSide,
  };
  return <DarkSideContext.Provider value={value}>{children}</DarkSideContext.Provider>;
};
