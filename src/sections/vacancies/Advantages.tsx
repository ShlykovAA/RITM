import { AdvantagesCard } from '../../components/Advantages-card';
import { advantagesTextData } from '../../consts/advantages-text';
import styles from './Advantages.module.scss';

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages_title}>
        <h1>ЧОМУ РОБОТА У НАС<br /> - ЦЕ КРУТО?</h1>
      </div>
      <div className={styles.advantages_container}>
        <img src="/fon-900-2.png" alt="background_orange" className={styles.adv_bg_orange}/>
        <div className={styles.advantages_div}>
          <img src="/arrow-1.png" alt="Arrow 1" className={styles.arrow_1} />
          <AdvantagesCard data={advantagesTextData[0]} />
          <AdvantagesCard data={advantagesTextData[1]} />
        </div>
        <div className={styles.advantages_div_center}>
          <img src="/arrow-4.png" alt="Arrow 4" className={styles.arrow_4} />
          <img src="/arrow-2.png" alt="Arrow 2" className={styles.arrow_2} />
          <img src="/arrow-3.png" alt="Arrow 3" className={styles.arrow_3} />
          <img src="/arrow-5.png" alt="Arrow 5" className={styles.arrow_5} />
          <img src="/arrow-1.png" alt="Arrow 7" className={styles.arrow_7} />
          <img src="/arrow-6.png" alt="Arrow 8" className={styles.arrow_8} />
          <AdvantagesCard data={advantagesTextData[2]} />
        </div>
        <div className={styles.advantages_div}>
          <img src="/arrow-6.png" alt="Arrow 6" className={styles.arrow_6} />
          <AdvantagesCard data={advantagesTextData[3]} />
          <AdvantagesCard data={advantagesTextData[4]} />
        </div>
      </div>
    </section>
  );
};