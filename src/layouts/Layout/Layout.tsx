import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import {ROUTES} from "../../routing/routes";
import {Suspense} from "react";

export const Layout = () => {
  // TODO: Fallback component
  return (
    <div className={styles.app}>
      <div className={styles.routing}>
        <NavLink to={ROUTES.root()}><h3>Main</h3></NavLink>
        <NavLink to={ROUTES.info()}><h3>Info</h3></NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}