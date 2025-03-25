import styles from './Sidebar.module.scss';
import {memo, useState} from "react";
import cn from "classnames";
import {useTranslation} from "react-i18next";

export type SidebarProps = {
}

export const Sidebar = memo(({}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const onClick = () => setCollapsed(state => !state);

  return (
    <div className={cn(styles.root, {[styles.collapsed]: collapsed})} onClick={onClick}>
      {collapsed ? t('Открыть') : t('Закрыть')}
    </div>
  );
});
