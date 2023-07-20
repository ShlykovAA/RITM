import { useState } from 'react';
import { NavMobile } from '../../components/Nav-mobile';
import { useMatchMedia } from '../../hooks';
import styles from './Header.module.scss';
import cn from 'classnames';
import imgLang from '/lang.png';
import telegram from '/telegram-240.png';
import insta from '/instagram-240.png';
import { NavDesktop } from '../../components/Nav-desktop';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { isMobile, isTablet, isDesktop }:any = useMatchMedia();
  const [isOpen, setOpen] = useState<boolean>(false);
  console.log('isMobile and tablet', isMobile || isTablet )
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo_link}>
        <img src="/RITM-logo-1-1489.png" alt="Ritm logo" className={styles.logo}/>
      </NavLink>
      { isMobile || isTablet ? <NavMobile isOpen={isOpen} /> : <NavDesktop />}
      { isDesktop ? (
        <div className={styles.lang}>
          <img src={telegram} alt="telegram" className={styles.lang_img}/>
          <img src={insta} alt="instagram" className={styles.lang_img}/>
        </div>
      ) : null}
      <div className={styles.lang}>
        <img src={imgLang} alt="lang planet" className={styles.lang_img} />
        <span className={styles.span_lang}>UA</span>
        <span className={styles.span_slash}>/</span>
        <span className={styles.span_lang}>ENG</span>
      </div>
      { isMobile || isTablet ? (
        <button
          onClick={() => setOpen(!isOpen)}
          className={cn(styles.burger, { [styles["burger_status"]]: isOpen})}
        >
          <span className={styles.brg_icon}></span>
        </button>
      ) : null}
    </header>
  );
};