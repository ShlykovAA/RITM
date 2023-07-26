import { NavMobile } from '../../components/Nav-mobile';
import { useMatchMedia } from '../../hooks';
import styles from './Header.module.scss';
import cn from 'classnames';
import imgLang from '/lang.png';
import telegram from '/telegram-240.png';
import insta from '/instagram-240.png';
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