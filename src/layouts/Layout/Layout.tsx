import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import {ROUTES} from "../../routing/routes";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.routing}>
        <NavLink to={ROUTES.root()}><h3>Main</h3></NavLink>
        <NavLink to={ROUTES.info()}><h3>Info</h3></NavLink>
      </div>
      <Outlet/>
    </div>
  )
}