import {createContext} from "react";
import {Theme} from "../../constants/theme";
import {ValueOf} from "../../types/utils";

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextParams {
  theme: ValueOf<typeof Theme>;
  setTheme: (theme: ValueOf<typeof Theme>) => void;
}

export const ThemeContext = createContext<ThemeContextParams | null>(null);
