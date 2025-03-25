import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import {Suspense} from "react";
import cn from "classnames";
import {useTheme} from "shared/hooks/useTheme";
import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar/Sidebar";

export const Layout = () => {
  const {theme} = useTheme();

  // TODO: Fallback component
  return (
    <div className={cn(styles.app, styles[theme])}>
      <Suspense fallback="">
        <Header/>
        <div className={styles.body}>
          <Sidebar/>
          <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.page}>
              <Outlet/>
            </div>
          </Suspense>
        </div>
      </Suspense>
    </div>
  )
}