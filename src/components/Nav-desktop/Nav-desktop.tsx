import { useState } from 'react';
import styles from './Nav-desktop.module.scss';
import { Link } from 'react-router-dom';
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
  const onTeamMouseEnter = () => {
    setStatusObject({project: false, team: true, contacts: false,});
  };
  const onContactsMouseEnter = () => {
    setStatusObject({project: false, team: false, contacts: true,});
  };
  const onCloseAll = () => {
    setStatusObject({project: false, team: false, contacts: false,});
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.div_for_link} onMouseEnter={onCloseAll}>
        <Link to="/" className={styles.link}>Головна</Link>
      </div>
      <div className={styles.div_for_link} onMouseEnter={onCloseAll}>
        <Link to="/about-us" className={styles.link}>Про нас</Link>
      </div>
      <div className={styles.div_for_link} onMouseEnter={onProjectMouseEnter}>
        <span className={styles.link}>Компанії та проєкти</span>
          { statusObject.project ? (
            <div className={styles.second_nav} onMouseLeave={onCloseAll}>
              <div className={styles.opac}></div>
              <SubMenu map={projectLinksMap} />
            </div>
          ) : null}
      </div>
      <div className={styles.div_for_link} onMouseEnter={onTeamMouseEnter}>
        <span className={styles.link}>Команда</span>
          { statusObject.team ? (
            <div className={styles.second_nav} onMouseLeave={onCloseAll}>
              <div className={styles.opac}></div>
              <SubMenu map={teamLinksMap} />
            </div>
          ) : null }
      </div>
      <div className={styles.div_for_link} onMouseEnter={onCloseAll}>
        <Link to="/vacancies" className={styles.link}>Вакансії</Link>
      </div>
      <div className={styles.div_for_link} onMouseEnter={onContactsMouseEnter}>
        <span className={styles.link}>Контакти</span>
          { statusObject.contacts ? (
            <div className={styles.second_nav} onMouseLeave={onCloseAll}>
              <div className={styles.opac}></div>
              <SubMenu map={contactsLinksMap} />
            </div>
          ) : null }
      </div>
    </nav>
  );
}