import { NavLink } from 'react-router-dom';
import styles from './Vacancies.module.scss';

export const Vacancies = () => {
  return (
    <div className={styles.welcome}>
    <div className={styles.welcome_left}>
      <div className={styles.welcome_title}>
        <h1 className={styles.welcome_h1}>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ УСПІШНУ <br/> КАР’ЄРУ </span>У СФЕРІ НЕРУХОМОСТІ?</h1>
      </div>
      <p className={styles.welcome_p}>Наша компанія RITM ідеальне місце для Вашого розвитку. Приєднуйтесь до команди фахівців і станьте частиною успішної інноваційної компанії. Разом ми зможемо досягти великих результатів та реалізувати Ваш потенціал!</p>
      <button className={styles.btn_open_vac}>
        <NavLink to={"/vacancies#mail"} className={styles.link_open_vac}>
          <span>ВІДКРИТІ ВАКАНСІЇ</span>
        </NavLink>
      </button>
      <div id='page' className={styles.site}>
        <a href="#" className={styles.button}>
          <span>Hover</span>
        </a>
      </div>
    </div>
    <div className={styles.welcome_right}>

    </div>
    </div>
  );
};