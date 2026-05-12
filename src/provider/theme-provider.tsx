import { createContext, FC, ReactNode, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  themeColors: { primary: string, secondary: string };
  onChangeTheme: () => void
}

const dark = {
  primary: '#fb923c',
  secondary: '#000000'
}
const light = {
  primary: '#fb923c',
  secondary: '#ffffff'
}

export const ThemeContext = createContext<ThemeContextType>({ themeColors: light, onChangeTheme: () => null });

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