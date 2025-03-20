import styles from './IconButton.module.scss';
import {ButtonHTMLAttributes, memo, ReactNode} from "react";
import cn from "classnames";

export type IconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = memo((props: IconButtonProps) => {
  const {
    children,
    onClick,
    ...nativeProps
  } = props;

  return (
    <button {...nativeProps} className={cn(styles.button, styles.root)} onClick={onClick}>
      {children}
    </button>
  );
});
