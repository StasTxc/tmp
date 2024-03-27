import {ValueOf} from "../types/utils";
import {Theme} from "shared/constants/theme";
import {useCallback, useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "app/providers/ThemeProvider/ThemeContext";

export type UseThemeResult = {
  theme: ValueOf<typeof Theme>,
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.MAIN ? Theme.DARK : Theme.MAIN;

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme])


  return {
    theme,
    toggleTheme,
  }
}