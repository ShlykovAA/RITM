import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { projectLinksMap, teamLinksMap, contactsLinksMap } from '../../consts/links-map';
import cn from 'classnames';
import styles from './Nav-mobile.module.scss';
import { SubMenu } from '../Submenu';
import telegram from '/telegram-240.png';
import insta from '/instagram-240.png';
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
        <NavLink to="/" className={styles.link} onClick={onClick}>Головна</NavLink>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <NavLink to="/about-us" className={styles.link} onClick={onClick}>Про нас</NavLink>
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
        <NavLink to="/vacancies" className={styles.link} onClick={onClick}>Вакансії</NavLink>
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
          <img src={telegram} alt="telegram" className={styles.lang_img}/>
          <img src={insta} alt="instagram" className={styles.lang_img}/>
        </div>
    </nav>
  );
};