import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import {ROUTES} from "../../routing/routes";
import {Suspense} from "react";
import cn from "classnames";
import {useTheme} from "../../hooks/useTheme";

export const Layout = () => {
  const {theme, toggleTheme} = useTheme();

  // TODO: Fallback component
  return (
    <div className={cn(styles.app, styles[theme])}>
      <div className={styles.routing}>
        <NavLink to={ROUTES.root()}><h3>Main</h3></NavLink>
        <NavLink to={ROUTES.info()}><h3>Info</h3></NavLink>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}