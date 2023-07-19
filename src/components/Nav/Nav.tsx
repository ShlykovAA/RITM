import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import cn from 'classnames';
import { useState } from 'react';

interface INav {
  isOpen: boolean;
};

// const linksMap: string[][] = [
//   ['/','Головна'],
//   ['/about-us','Про нас'],
//   ['/companies-and-projects','Компанії та проєкти'],
//   ['/team','Команда'],
//   ['/vacancies','Вакансії'],
//   ['/contacts','Контакти'],
// ];

const projectLinksMap: string[][] = [
  ['/residential-real-estate', 'Житлова нерухомість'],
  ['/commercial-real-estate','Комерційна нерухомість'],
  ['/investment-in-carpathians','Інвестиційна нерухомість у Карпатах'],
  ['/real-estate-abroad','Нерухомість за кордоном'],
  ['/teaching','Навчання'],
  ['/it-platform-for-the-sale','IT-платформа з продажу новобудов'],
];

const teamLinksMap: string[][] = [
  ['/ceo','СEO'],
  ['/managers','Менеджери'],
  ['/contact-center','Контакт-центр'],
  ['/marketing-department','Відділ маркетингу'],
  ['/hr-department','HR-відділ'],
  ['/administration','Адміністрація'],
];

const contactsLinksMap: string[][] = [
  ['/kyiv','Київ'],
  ['/lviv','Львів'],
  ['/ivano-frankivsk','Івано-Франківськ'],
  ['/ternopil','Тернопіль'],
  ['/chernivtsi','Чернівці'],
];

interface IStatusObject {
  project: boolean;
  team: boolean;
  contacts: boolean;
}

export const Nav: React.FC<INav> = ({ isOpen }) => {
  const [statusObject, setStatusObject] = useState<IStatusObject>({
    project: false,
    team: false,
    contacts: false,
  });
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
    <nav className={cn(styles.nav, {[styles['nav_off']]: !isOpen})}>
      <div className={styles.div_for_link}>
        <NavLink to="/" className={styles.link}>Головна</NavLink>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <NavLink to="/about-us" className={styles.link}>Про нас</NavLink>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        {/* <NavLink to="/companies-and-projects" className={styles.link} onClick={onProject}>Компанії та проєкти</NavLink> */}
        <span className={styles.link} onClick={onProject}>Компанії та проєкти</span>
        <div className={styles.second_nav}>
          { statusObject.project ? (
            projectLinksMap.map((item, index) => {
              return (
                <NavLink to={item[0]} className={styles.link_inside} key={index}>{item[1]}</NavLink>
              )
            })
          ) : null}
        </div>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        {/* <NavLink to="/team" className={styles.link} onClick={onTeam}>Команда</NavLink> */}
        <span className={styles.link} onClick={onTeam}>Команда</span>
        <div className={styles.second_nav}>
          { statusObject.team ? (
            teamLinksMap.map((item, index) => {
              return (
                <NavLink to={item[0]} className={styles.link_inside} key={index}>{item[1]}</NavLink>
              )
            })
          ) : null }
        </div>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        <NavLink to="/vacancies" className={styles.link}>Вакансії</NavLink>
      </div>
        <div className={styles.line}></div>
      <div className={styles.div_for_link}>
        {/* <NavLink to="/contacts" className={styles.link} onClick={onContacts}>Контакти</NavLink> */}
        <span className={styles.link} onClick={onContacts}>Контакти</span>
        <div className={styles.second_nav}>
          { statusObject.contacts ? (
            contactsLinksMap.map((item, index) => {
              return (
                <NavLink to={item[0]} className={styles.link_inside} key={index}>{item[1]}</NavLink>
              )
            })
          ) : null }
        </div>
      </div>
      <div className={styles.line}></div>
    </nav>
  );
};