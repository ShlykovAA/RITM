import { NavLink } from 'react-router-dom';
import styles from './Vacancies.module.scss';

export const Vacancies = () => {
  return (
    <div className={styles.welcome}>
    <div className={styles.welcome_left}>

      {/* <div className={styles.welcome_text_container}> */}
        <div className={styles.welcome_title}>
          <h1 className={styles.welcome_h1}>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ УСПІШНУ <br/> КАР’ЄРУ </span>У СФЕРІ НЕРУХОМОСТІ?</h1>
        </div>
        <p className={styles.welcome_p}>Наша компанія RITM ідеальне місце для Вашого розвитку.<br />Приєднуйтесь до команди фахівців і станьте частиною успішної інноваційної компанії. Разом ми зможемо досягти великих результатів та реалізувати Ваш потенціал!</p>
      {/* </div> */}
      <NavLink to="#" className={styles.btn_open_vac}>
            <span>ВІДКРИТІ ВАКАНСІЇ</span>
      </NavLink>
    </div>

    <div className={styles.welcome_right}>
      <div className={styles.frame_blc}>
        {/* <iframe
          src="https://www.youtube.com/embed/ZbYsPs44MxE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <iframe
          src="https://www.youtube.com/embed/rprf7LEraU4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

    </div>
    </div>
  );
};