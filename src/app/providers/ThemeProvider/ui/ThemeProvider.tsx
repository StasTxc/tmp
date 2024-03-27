import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "../ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";
import {ValueOf} from "../../../../shared/types/utils";
import {Theme} from "shared/constants/theme";

type ThemeProviderProps = {
  children?: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<ValueOf<typeof Theme>>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.MAIN);

  const themeContext = useMemo(() => ({
    theme,
    setTheme
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
