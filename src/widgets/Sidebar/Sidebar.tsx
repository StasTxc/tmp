import styles from './Sidebar.module.scss';
import {memo, useState} from "react";
import cn from "classnames";

export type SidebarProps = {
}

export const Sidebar = memo(({}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onClick = () => setCollapsed(state => !state);

  return (
    <div className={cn(styles.root, {[styles.collapsed]: collapsed})} onClick={onClick}>
      {collapsed ? 'Open' : 'Closed'}
    </div>
  );
});
