import { NavLink } from 'react-router-dom';
import styles from './Submenu.module.scss';

interface ISubMenu {
  map: string[][];
};

export const SubMenu: React.FC<ISubMenu> = ({ map }) => {
  return (
    map.map((item, index) => {
      return (
        <NavLink to={item[0]} className={styles.link_inside} key={index}>{item[1]}</NavLink>
      )
      })
  );
};