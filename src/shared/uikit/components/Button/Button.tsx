import styles from './Button.module.scss';
import {memo} from "react";

export type ButtonProps = {
}

export const Button = memo(({}: ButtonProps) => {
  return (
    <div className={styles.root}>
      Button
    </div>
  );
});
