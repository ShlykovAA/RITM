import { useEffect, useState } from 'react';
import styles from './Nav-desktop.module.scss';
import { NavLink } from 'react-router-dom';
import { SubMenu } from '../Submenu';
import { contactsLinksMap, projectLinksMap, teamLinksMap } from '../../consts/links-map';

interface IStatusObject {
  project: boolean;
  team: boolean;
  contacts: boolean;
}

export const NavDesktop = () => {
  const [statusObject, setStatusObject] = useState<IStatusObject>({
    project: false,
    team: false,
    contacts: false,
  });
  const onProjectMouseEnter = () => {
    setStatusObject({project: true, team: false, contacts: false,});
  };
  const onProjectMouseLeave = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, project: false}});
  };
  const onTeamMouseEnter = () => {
    setStatusObject({project: false, team: true, contacts: false,});
  };
  const onTeamMouseLeave = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, team: false}});
  };
  const onContactsMouseEnter = () => {
    setStatusObject({project: false, team: false, contacts: true,});
  }
  const onContactsMouseLeave = () => {
    setStatusObject((prevStatus) => {return {...prevStatus, contacts: false}});
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.div_for_link}>
        <NavLink to="/" className={styles.link}>Головна</NavLink>
      </div>
      <div className={styles.div_for_link}>
        <NavLink to="/about-us" className={styles.link}>Про нас</NavLink>
      </div>
      <div className={styles.div_for_link} onMouseEnter={onProjectMouseEnter}>
        <span className={styles.link}>Компанії та проєкти</span>
          { statusObject.project ? (
            <div className={styles.second_nav} onMouseLeave={onProjectMouseLeave}>
              <div className={styles.opac}></div>
              <SubMenu map={projectLinksMap} />
            </div>
          ) : null}
      </div>
      <div className={styles.div_for_link} onMouseEnter={onTeamMouseEnter}>
        <span className={styles.link}>Команда</span>
          { statusObject.team ? (
            <div className={styles.second_nav} onMouseLeave={onTeamMouseLeave}>
              <div className={styles.opac}></div>
              <SubMenu map={teamLinksMap} />
            </div>
          ) : null }
      </div>
      <div className={styles.div_for_link}>
        <NavLink to="/vacancies" className={styles.link}>Вакансії</NavLink>
      </div>
      <div className={styles.div_for_link} onMouseEnter={onContactsMouseEnter}>
        <span className={styles.link}>Контакти</span>
          { statusObject.contacts ? (
            <div className={styles.second_nav} onMouseLeave={onContactsMouseLeave}>
              <div className={styles.opac}></div>
              <SubMenu map={contactsLinksMap} />
            </div>
          ) : null }
      </div>
    </nav>
  );
}