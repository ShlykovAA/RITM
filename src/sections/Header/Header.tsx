import { NavMobile } from '../../components/Nav-mobile';
import { useMatchMedia } from '../../hooks';
import styles from './Header.module.scss';
import cn from 'classnames';
import imgLang from '/lang.png';
import { NavDesktop } from '../../components/Nav-desktop';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { changeBurgerStatus, useBurgerStatusSelector } from '../../store/slice/burgerStatus';

export const Header = () => {
  const dispatch = useAppDispatch();
  const burgerIsOpen = useBurgerStatusSelector();
  const { isMobile, isTablet, isDesktop }:any = useMatchMedia();
  const onClick = () => {
    dispatch(changeBurgerStatus(!burgerIsOpen))
  };
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo_link}>
        <img src="/RITM-logo-1-1300.png" alt="Ritm logo" className={styles.logo}/>
      </NavLink>
      { isMobile || isTablet ? <NavMobile /> : <NavDesktop />}
      <div className={styles.icon_container}>
        { isDesktop ? (
          <div className={styles.contacts_messenger}>
            <a href="https://www.tiktok.com/@ritm.ukraine">
              <img src="/tiktok.png" alt="TikTok" className={styles.contacts_img} />
            </a>
            <a href="https://t.me/Ritm2Job">
              <img src="/telegram-240.png" alt="Telegram" className={styles.contacts_img} />
            </a>
            <a href="https://www.facebook.com/ritm2.ukraine">
              <img src="/facebook.png" alt="Facebook" className={styles.contacts_img} />
            </a>
            <a href="https://instagram.com/ritm_ukraine">
              <img src="/instagram-240.png" alt="Instagram" className={styles.contacts_img} />
            </a>
          </div>
        ) : null}
        <div className={styles.lang}>
          <img src={imgLang} alt="lang planet" className={styles.lang_img} />
          <span className={styles.span_lang}>UA</span>
          <span className={styles.span_slash}>/</span>
          <span className={styles.span_lang}>ENG</span>
        </div>
      </div>
      { isMobile || isTablet ? (
        <button
          onClick={onClick}
          className={cn(styles.burger, { [styles["burger_status"]]: burgerIsOpen})}
        >
          <span className={styles.brg_icon}></span>
        </button>
      ) : null}
    </header>
  );
};