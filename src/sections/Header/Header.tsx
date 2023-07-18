import { useState } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import imgLang from '/lang.png';
import { Nav } from '../../components/Nav';

export const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <img src="/RITM-logo-1-1489.png" alt="Ritm logo" className={styles.logo}/>
      <Nav isOpen={isOpen} />
      <div className={styles.lang}>
        <img src={imgLang} alt="lang planet" className={styles.lang_img} />
        <span className={styles.span_lang}>UA</span>
        <span className={styles.span_slash}>/</span>
        <span className={styles.span_lang}>ENG</span>
      </div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={cn(styles.burger, { [styles["burger_status"]]: isOpen})}
      >
        <span className={styles.brg_icon}></span>
      </button>
    </header>
  );
};