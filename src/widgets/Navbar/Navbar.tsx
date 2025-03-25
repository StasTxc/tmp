import {NavLink} from "react-router-dom";
import {ROUTES} from "shared/config/routes";
import styles from './Navbar.module.scss';
import {memo} from "react";
import cn from "classnames";
import {useTranslation} from "react-i18next";

export type NavbarProps = {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.root, className)}>
      <NavLink to={ROUTES.root()} className={({isActive}) => cn(styles.link, {[styles.active]: isActive})}>{t('Главная')}</NavLink>
      <NavLink to={ROUTES.info()} className={({isActive}) => cn(styles.link, {[styles.active]: isActive})}>{t('Информация')}</NavLink>
    </div>
  );
});
