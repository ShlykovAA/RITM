import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectLinksMap, teamLinksMap, contactsLinksMap } from '../../consts/links-map';
import cn from 'classnames';
import styles from './Nav-mobile.module.scss';
import { SubMenu } from '../Submenu';
import { useAppDispatch } from '../../store/hooks';
import { changeBurgerStatus, useBurgerStatusSelector } from '../../store/slice/burgerStatus';

interface IStatusObject {
  project: boolean;
  team: boolean;
  contacts: boolean;
}

export const NavMobile: React.FC = () => {
  const dispatch = useAppDispatch();
  const burgerIsOpen = useBurgerStatusSelector();
  const [statusObject, setStatusObject] = useState<IStatusObject>({
    project: false,
    team: false,
    contacts: false,
  });
  const onClick = () => {
    dispatch(changeBurgerStatus(false))
  }
  const onProject = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, project: !statusObject.project}})
  };
  const onTeam = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, team: !statusObject.team}})
  };
  const onContacts = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, contacts: !statusObject.contacts}})
  }
  return (
    <nav className={cn(styles.nav, {[styles['nav_off']]: !burgerIsOpen})}>
      <div className={styles.div_for_link}>
        <Link to="/" className={styles.link} onClick={onClick}>Головна</Link>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <Link to="/about-us" className={styles.link} onClick={onClick}>Про нас</Link>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <span className={styles.link} onClick={onProject}>Компанії та проєкти</span>
        <div className={styles.second_nav}>
          { statusObject.project ? (<SubMenu map={projectLinksMap} />) : null}
        </div>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <span className={styles.link} onClick={onTeam}>Команда</span>
        <div className={styles.second_nav}>
          { statusObject.team ? (<SubMenu map={teamLinksMap} />) : null }
        </div>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <Link to="/vacancies" className={styles.link} onClick={onClick}>Вакансії</Link>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <span className={styles.link} onClick={onContacts}>Контакти</span>
        <div className={styles.second_nav}>
          { statusObject.contacts ? (<SubMenu map={contactsLinksMap} />) : null }
        </div>
      </div>
      <div className={styles.line}></div>
      
      <div className={styles.lang}>
        <a href="https://www.tiktok.com/@ritm.ukraine">
          <img src="/tiktok.png" alt="TikTok" className={styles.lang_img} />
        </a>
        <a href="https://t.me/Ritm2Job">
          <img src="/telegram-240.png" alt="Telegram" className={styles.lang_img} />
        </a>
        <a href="https://www.facebook.com/ritm2.ukraine">
          <img src="/facebook.png" alt="Facebook" className={styles.lang_img} />
        </a>
        <a href="https://instagram.com/ritm_ukraine">
          <img src="/instagram-240.png" alt="Instagram" className={styles.lang_img} />
        </a>
      </div>
    </nav>
  );
};