import styles from './Advantages-desktop.module.scss';

export const AdvantagesDesktop = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages_title}>
        <h1>ЧОМУ РОБОТА У НАС<br /> - ЦЕ КРУТО?</h1>
      </div>
      <div className={styles.advantages_container}>
        <img src="/fon-900-2.png" alt="background_orange" className={styles.adv_bg_orange} />
        <img src="/desktop-advantages.png" alt="All advantages" className={styles.all_cards_img} />
      </div>
    </section>
  );
};