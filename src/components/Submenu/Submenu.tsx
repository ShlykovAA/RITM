import { Link } from 'react-router-dom';
import styles from './Submenu.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { changeBurgerStatus } from '../../store/slice/burgerStatus';

interface ISubMenu {
  map: string[][];
};

export const SubMenu: React.FC<ISubMenu> = ({ map }) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(changeBurgerStatus(false))
  }
  return (
    map.map((item, index) => {
      return (
        <Link to={item[0]} className={styles.link_inside} key={index} onClick={onClick}>{item[1]}</Link>
      )
    })
  );
};