import styles from './Header.module.scss';
import {memo} from "react";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/hooks/useTheme";
import LogoIcon from 'assets/logo_icon.svg'

type HeaderProps = {
}

export const Header = memo(({}: HeaderProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={styles.root}>
      <LogoIcon />
      <Navbar/>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
});
