import styles from './Header.module.scss';
import {memo, useEffect} from "react";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/hooks/useTheme";
import LogoIcon from 'assets/logo_icon.svg'
import {IconButton} from "shared/uikit/components/IconButton";
import {Theme} from "shared/constants/theme";
import SunIcon from "assets/sun.svg";
import MoonIcon from "assets/moon.svg";
import {LanguageSwitcher} from "widgets/Header/components/LanguageSwitcher/LanguageSwitcher";

export const Header = memo(() => {
  const {theme, toggleTheme} = useTheme();
  const isMainTheme = theme === Theme.MAIN;

  return (
    <div className={styles.root}>
      <LogoIcon className={styles.icon}/>
      <Navbar />
      <IconButton onClick={toggleTheme}>{isMainTheme ? <MoonIcon className={styles.icon} /> : <SunIcon className={styles.icon} />}</IconButton>
      <LanguageSwitcher />
    </div>
  );
});
