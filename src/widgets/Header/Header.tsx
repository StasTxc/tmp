import styles from './Header.module.scss';
import {memo} from "react";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/hooks/useTheme";
import LogoIcon from 'assets/logo_icon.svg'
import {IconButton} from "shared/uikit/components/IconButton";
import {Theme} from "shared/constants/theme";
import SunIcon from "assets/sun.svg";
import MoonIcon from "assets/moon.svg";

type HeaderProps = {
}

export const Header = memo(({}: HeaderProps) => {
  const {theme, toggleTheme} = useTheme();
  const isMainTheme = theme === Theme.MAIN;

  return (
    <div className={styles.root}>
      <LogoIcon className={styles.icon}/>
      <Navbar />
      <IconButton onClick={toggleTheme}>{isMainTheme ? <MoonIcon className={styles.icon} /> : <SunIcon className={styles.icon} />}</IconButton>
    </div>
  );
});
