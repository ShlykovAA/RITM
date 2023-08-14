import { NavLink } from 'react-router-dom';
import { FOOTER_CARDS_DATA } from '../../consts/footer-cards';
import styles from './Footer.module.scss';
import { FooterCard } from '../../components/Footer-card';

export const Footer = () => {
  const onVacancies = () => {
    
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
      <NavLink to="/" className={styles.logo_link}>
        <img src="/RITM-logo-1-1489.png" alt="Logo" />
      </NavLink>
      <h3 className={styles.h3_top}>
        develop developers
      </h3>
      </div>
      <div className={styles.footer_center}>
        <div className={styles.center_left}>
          <div className={styles.left_container}>
            <h3 className={styles.h3_center}>Про RITM</h3>
            <a href="/vacancies#current_vacancies">
              <p>Вакансії</p>
            </a>
            <a href="">
              <p>Команда</p>
            </a>
          </div>
          <div className={styles.left_container}>
            <h3 className={styles.h3_center}>Контакти</h3>
            <a href="tel:+380983517691">
              <p>+38 (098) 35 17 691</p>
            </a>
            <a href="mailto:contact@ritm.group">
              <p>contact@ritm.group</p>
            </a>
          </div>
        </div>
        <div className={styles.center_right}>
          <div className={styles.right_title}>
            <h3 className={styles.h3_center}>Інші проєкти</h3>
            <span>від</span>
            <img src="/RITM-logo-mini.png" alt="Logo" />
          </div>
          <div className={styles.right_content_box}>
            { FOOTER_CARDS_DATA.map((item, index) => <FooterCard data={item} key={index} /> )}
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p className={styles.p_footer_bottom}>
          2006-2023 RITM. Всі права захищено
        </p>
        <div className={styles.footer_contacts}>
          <a href="https://www.tiktok.com/@ritm.ukraine">
            <img src="/tiktok.png" alt="TikTok" className={styles.footer_contacts_img} />
          </a>
          <a href="https://t.me/Ritm2Job">
            <img src="/telegram-240.png" alt="Telegram" className={styles.footer_contacts_img} />
          </a>
          <a href="https://www.facebook.com/ritm2.ukraine">
            <img src="/facebook.png" alt="Facebook" className={styles.footer_contacts_img} />
          </a>
          <a href="https://instagram.com/ritm_ukraine">
            <img src="/instagram-240.png" alt="Instagram" className={styles.footer_contacts_img} />
          </a>
        </div>
        <p className={styles.p_footer_bottom}>
          Умови користування та Політика конфіденційності
        </p>
      </div>
    </footer>
  );
};