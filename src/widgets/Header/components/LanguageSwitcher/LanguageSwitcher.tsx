import styles from './LanguageSwitcher.module.scss';
import {memo} from "react";
import {Language} from "shared/config/i18n";
import {useTranslation} from "react-i18next";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === Language.EN ? Language.RU : Language.EN)
  }

  return (
    <div className={styles.root}
         onClick={() => changeLanguageHandler()}>{i18n.language === Language.RU ? 'Ru' : 'En'}
    </div>
  );
});
