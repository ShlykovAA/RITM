import styles from './Advantages-img.module.scss';

export const AdvantagesImg = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages_title}>
        <h1>ЧОМУ РОБОТА У НАС<br /> - ЦЕ КРУТО?</h1>
      </div>
      <div className={styles.advantages_container}>
        <img src="/fon-900-2.png" alt="background_orange" className={styles.adv_bg_orange}/>
        <img src="/avercard.png" alt="advantages cards" className={styles.aver_img} />
      </div>
    </section>
  );
};