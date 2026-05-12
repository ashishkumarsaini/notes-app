import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeColorsType = { primary: string, secondary: string }

type ThemeContextType = {
  themeColors: ThemeColorsType;
  onChangeTheme: () => void
}

const dark = {
  main: '#fb923c',
  primary: '#000000',
  secondary: '#ffffff'
}
const light = {
  main: '#fb923c',
  primary: '#ffffff',
  secondary: '#000000'
}

export const ThemeContext = createContext<ThemeContextType>({ themeColors: light, onChangeTheme: () => null });

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(colorScheme);

  const value = {
    themeColors: theme === 'dark' ? dark : light,
    onChangeTheme: () => {
      setTheme((prevValue) => prevValue === 'dark' ? 'light' : 'dark');
    }
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}