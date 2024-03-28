import {NavLink} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import styles from './Navbar.module.scss';
import {memo} from "react";
import cn from "classnames";

export type NavbarProps = {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  return (
    <div className={cn(styles.root, className)}>
      <NavLink to={ROUTES.root()} className={({isActive}) => cn(styles.link, {[styles.active]: isActive})}>Main</NavLink>
      <NavLink to={ROUTES.info()} className={({isActive}) => cn(styles.link, {[styles.active]: isActive})}>Info</NavLink>
    </div>
  );
});
