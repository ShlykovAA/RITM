import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import cn from 'classnames';

interface INav {
  isOpen: boolean;
}

interface ILinkMap {
  '/': string;
  '/about-us': string;
  '/companies-and-projects': string;
  '/team': string;
  '/vacancies': string;
  '/contacts': string;
}

const linkMap: ILinkMap = {
  '/': 'Головна',
  '/about-us': 'Про нас',
  '/companies-and-projects': 'Компанії та проєкти',
  '/team': 'Команда',
  '/vacancies': 'Вакансії',
  '/contacts': 'Контакти',
}

export const Nav: React.FC<INav> = ({ isOpen }) => {
  const arrLinkMap = Object.entries(linkMap);
  return (
    <nav className={cn(styles.nav, {[styles['nav_off']]: !isOpen})}>
      {/* <ul className={styles.ul_nav}> */}
          { arrLinkMap.map((item, index) => {
            return (
              <>
                <NavLink to={item[0]} className={styles.link} key={index}>{item[1]}</NavLink>
                <span className={styles.line}></span>
              </>
            )
          })}
        {/* <li className={styles.li_first}>
          <NavLink to="/" className={styles.link}>Головна</NavLink>
          <span className={styles.line}></span>
        </li>
        <li className={styles.li_first}>
          <NavLink to="/about-us" className={styles.link}>Про нас</NavLink>
          <span className={styles.line}></span>
        </li>
        <li className={styles.li_first}>
          <NavLink to="/companies-and-projects" className={styles.link}>Компанії та проєкти</NavLink>
          <ul className={styles.ul_second_lvl}>
            <li className={styles.li_second}>
              <NavLink to="/residential-real-estate" className={styles.link_inside}>Житлова нерухомість</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/commercial-real-estate" className={styles.link_inside}>Комерційна нерухомість</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/investment-in-carpathians" className={styles.link_inside}>Інвестиційна нерухомість у Карпатах</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/real-estate-abroad" className={styles.link_inside}>Нерухомість за кордоном</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/teaching" className={styles.link_inside}>Навчання</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/it-platform-for-the-sale" className={styles.link_inside}>IT-платформа з продажу новобудов</NavLink>
            </li>
          </ul>
          <span className={styles.line}></span>
        </li>
        <li className={styles.li_first}>
          <NavLink to="/team" className={styles.link}>Команда</NavLink>
          <ul className={styles.ul_second_lvl}>
            <li className={styles.li_second}>
              <NavLink to="/ceo" className={styles.link_inside}>СEO</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/managers" className={styles.link_inside}>Менеджери</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/contact-center" className={styles.link_inside}>Контакт-центр</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/marketing-department" className={styles.link_inside}>Відділ маркетингу</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/hr-department" className={styles.link_inside}>HR-відділ</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/administration" className={styles.link_inside}>Адміністрація</NavLink>
            </li>
          </ul>
          <span className={styles.line}></span>
        </li>
        <li className={styles.li_first}>
          <NavLink to="/vacancies" className={styles.link}>Вакансії</NavLink>
          <span className={styles.line}></span>
        </li>
        <li className={styles.li_first}>
          <NavLink to="/contacts" className={styles.link}>Контакти</NavLink>
          <ul className={styles.ul_second_lvl}>
            <li className={styles.li_second}>
              <NavLink to="/kyiv" className={styles.link_inside}>Київ</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/lviv" className={styles.link_inside}>Львів</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/ivano-frankivsk" className={styles.link_inside}>Івано-Франківськ</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/ternopil" className={styles.link_inside}>Тернопіль</NavLink>
            </li>
            <li className={styles.li_second}>
              <NavLink to="/chernivtsi" className={styles.link_inside}>Чернівці</NavLink>
            </li>
          </ul>
          <span className={styles.line}></span>
        </li> */}
      {/* </ul> */}
    </nav>
  );
}