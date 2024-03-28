import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import {Suspense} from "react";
import cn from "classnames";
import {useTheme} from "shared/hooks/useTheme";
import {Header} from "widgets/Header";

export const Layout = () => {
  const {theme} = useTheme();

  // TODO: Fallback component
  return (
    <div className={cn(styles.app, styles[theme])}>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}