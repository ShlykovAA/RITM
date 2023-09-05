import { Link as ScrollLink } from 'react-scroll';
import { useMatchMedia } from '../../hooks';
import styles from './Welcome.module.scss';

export const Welcome = () => {
  const { isMobile }:any = useMatchMedia();
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome_left}>
        <div className={styles.welcome_title}>
          { isMobile ? (
            <h2>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ <br /> УСПІШНУ КАР’ЄРУ</span> <br />У СФЕРІ НЕРУХОМОСТІ?</h2>
          ) : (
            <h2>МРІЄТЕ <span className={styles.orange}>ПОБУДУВАТИ УСПІШНУ <br/> КАР’ЄРУ </span>У СФЕРІ НЕРУХОМОСТІ?</h2>
          )}
        </div>
        <p className={styles.welcome_p}>
          Наша компанія RITM ідеальне місце для Вашого розвитку.
          Приєднуйтесь до команди фахівців і станьте частиною успішної
          інноваційної компанії. Разом ми зможемо досягти великих
          результатів та реалізувати Ваш потенціал!
        </p>
        <ScrollLink to="current_vacancies" spy={true} smooth={true} offset={-100} duration={500} className={styles.btn_open_vac}>
          <span>ВІДКРИТІ ВАКАНСІЇ</span>
        </ScrollLink>
      </div>
      <div className={styles.welcome_right}>
        <img src="/laptop3.png" alt="Laptop" className={styles.laptop} />
        <div className={styles.frame_laptop}>
          <div className={styles.frame_blc}>
            {/* <iframe
              src="https://www.youtube.com/embed/rprf7LEraU4"
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
    </section>
  );
};