import styles from './Welcome.module.scss';
import { useMatchMedia } from '../../hooks';

export const Welcome = () => {
  const { isMobile }:any = useMatchMedia();
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_left}>
        <div className={styles.welcome_title}>
          { isMobile ? (
            <h1 className={styles.welcome_h1}>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ <br /> УСПІШНУ КАР’ЄРУ</span> <br />У СФЕРІ НЕРУХОМОСТІ?</h1>
          ) : (
            <h1 className={styles.welcome_h1}>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ УСПІШНУ <br/> КАР’ЄРУ </span>У СФЕРІ НЕРУХОМОСТІ?</h1>
          )}
        </div>
        <p className={styles.welcome_p}>
          Наша компанія RITM ідеальне місце для Вашого розвитку.
          Приєднуйтесь до команди фахівців і станьте частиною успішної
          інноваційної компанії. Разом ми зможемо досягти великих
          результатів та реалізувати Ваш потенціал!
        </p>
        <a href="#current_vacancies" className={styles.btn_open_vac}>
          <span>ВІДКРИТІ ВАКАНСІЇ</span>
        </a>
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
    </section>
  );
};